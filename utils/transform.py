import logging
import os
import string
import argparse
import subprocess
from osgeo import ogr, osr, gdal
from datetime import datetime
from string import Template

logger = logging.getLogger(__name__)

class TransformSQlite(object):
    """
    Applies a schema transformation to a sqlite database.
    
    NOT IMPLEMENTED YET
    """
    
    def __init__(self, sqlite=None, transform=None, transform_sqlite=None, debug=None):
        self.sqlite = sqlite
        self.transform = transform
        if not os.path.exists(self.sqlite):
            raise IOError('Cannot find SQlite database for this task.')
        if not os.path.exists(self.transform):
            raise IOError('Cannot find transform file for this task.')
        self.debug = debug
        """
            OGR Command to run.
        """
        self.cmd = Template("""
            spatialite $sqlite < $transform
        """)
        
        # Enable GDAL/OGR exceptions
        gdal.UseExceptions()
        self.srs = osr.SpatialReference()
        self.srs.ImportFromEPSG(4326) # configurable
        
    def transform_spatialite(self, ):        
        # create spatialite from osm data
        ogr_cmd = self.ogr_cmd.safe_substitute({'sqlite': self.sqlite,
                                                'osm': self.osm, 'osmconf': self.osmconf})
        if(self.debug):
            print 'Running: %s' % ogr_cmd
        proc = subprocess.Popen(ogr_cmd, shell=True, executable='/bin/bash',
                                stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        (stdout, stderr) = proc.communicate()   
        returncode = proc.wait()
        if (returncode != 0):
                raise Exception, "ogr2ogr process failed with returncode: {0}".format(returncode)
        if(self.debug):
            print 'ogr2ogr returned: %s' % returncode
            
    def create_default_schema(self, ):
        assert os.path.exists(self.sqlite), "No spatialite file. Run 'create_spatialite()' method first."
        # update the spatialite schema
        self.update_sql = Template("spatialite $sqlite < $update_sql")
        sql_cmd = self.update_sql.safe_substitute({'sqlite': self.sqlite,
                            'update_sql': self.path + '/sql/planet_osm_schema.sql'})
        if(self.debug):
            print 'Running: %s' % sql_cmd
        proc = subprocess.Popen(sql_cmd, shell=True, executable='/bin/bash',
                                stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        (stdout, stderr) = proc.communicate() 
        returncode = proc.wait()
        if self.debug:
            print 'spatialite returned: %s' % returncode
 
    def update_zindexes(self, ):
        assert os.path.exists(self.sqlite), "No spatialite file. Run 'create_spatialite()' method first."
        ds = ogr.Open(self.sqlite, update=True)
        zindexes = {
            3 : ('path', 'track', 'footway', 'minor', 'road', 'service', 'unclassified', 'residential'),
            4 : ('tertiary_link', 'tertiary'),
            6 : ('secondary_link', 'secondary'),
            7 : ('primary_link', 'primary'),
            8 : ('trunk_link', 'trunk'),
            9 : ('motorway_link', 'motorway')
        }
        layer_count = ds.GetLayerCount()
        assert layer_count == 4, """Incorrect number of layers found. Run 'create_default_schema()' method first."""
        for layer_idx in range(layer_count):
            layer = ds.GetLayerByIndex(layer_idx).GetName()
            # update highway z_indexes
            for key in zindexes.keys():
                sql = 'UPDATE {0} SET z_index = {1} WHERE highway IN {2};'.format(layer, key, zindexes[key])
                ds.ExecuteSQL(sql)
            # update railway z_indexes
            sql = "UPDATE {0} SET z_index = z_index + 5 WHERE railway <> ''".format(layer);
            ds.ExecuteSQL(sql)
            # update layer
            sql = "UPDATE {0} SET z_index = z_index + 10 * cast(layer as int) WHERE layer <> ''".format(layer);
            ds.ExecuteSQL(sql)
            # update bridge z_index
            sql = "UPDATE {0} SET z_index = z_index + 10 WHERE bridge IN ('yes', 'true', 1)".format(layer);
            ds.ExecuteSQL(sql)
            # update tunnel z_index
            sql = "UPDATE {0} SET z_index = z_index - 10 WHERE tunnel IN ('yes', 'true', 1)".format(layer);
            ds.ExecuteSQL(sql)
        
        # close connection
        ds.Destroy()
            

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="""Converts OSM (xml|pbf) to Spatialite.
                                                    Updates schema to create planet_osm_* tables.
                                                    Creates planet_osm_roads tables.
                                                    Updates z_indexes on all layers.""")
    parser.add_argument('-o','--osm-file', required=True, dest="osm", help='The OSM file to convert (xml or pbf)')
    parser.add_argument('-s','--spatialite-file', required=True, dest="sqlite", help='The sqlite output file')
    parser.add_argument('-q','--schema-sql', required=False, dest="schema", help='A sql file to refactor the output schema')
    parser.add_argument('-d','--debug', action="store_true", help="Turn on debug output")
    args = parser.parse_args()
    config = {}
    for k,v in vars(args).items():
        if (v == None): continue
        else:
           config[k] = v
    osm = config.get('osm')
    sqlite = config.get('sqlite')
    debug = False
    if config.get('debug'): debug = True
    parser = OSMParser(osm=osm, sqlite=sqlite, debug=debug)
    parser.create_spatialite()
    parser.create_default_schema()
    parser.update_zindexes()
/*
    Copyright (C) 2015  Humanitarian OpenStreetMap Team

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
jobs = {};
jobs.list = (function(){
    var map;
    var job_extents;
    
    return {
        init: function(){
            initListMap();
            initDataTable();
            listJobs();
        },
    }
    
    /**
     * Initialize the job list map
     */
    function initListMap(){
        var maxExtent = new OpenLayers.Bounds(-180,-90,180,90).transform("EPSG:4326", "EPSG:3857");
        var mapOptions = {
                displayProjection: new OpenLayers.Projection("EPSG:4326"),
                controls: [new OpenLayers.Control.Attribution(),
                           new OpenLayers.Control.ScaleLine()],
                maxExtent: maxExtent,          
                scales:[500000,350000,250000,100000,25000,20000,15000,10000,5000,2500,1250],   
                units: 'm',
                sphericalMercator: true,
                noWrap: true // don't wrap world extents
        }
        map = new OpenLayers.Map('list-export-map', {options: mapOptions});
        
        // restrict extent to world bounds to prevent panning..
        map.restrictedExtent = new OpenLayers.Bounds(-180,-90,180,90).transform("EPSG:4326", "EPSG:3857");
        
        // add base layers
        var osm = new OpenLayers.Layer.OSM("OpenStreetMap");
        osm.options = {layers: "basic", isBaseLayer: true, visibility: true, displayInLayerSwitcher: true};
        map.addLayer(osm);
        map.zoomToMaxExtent();
        
        job_extents = new OpenLayers.Layer.Vector('extents', {
            displayInLayerSwitcher: false,
            styleMap: getExtentStyles()
        });
        
        /* required to fire selection events on waypoints */
        var selectControl = new OpenLayers.Control.SelectFeature(job_extents,{
            id: 'selectControl'
        });
        map.addControl(selectControl);
        selectControl.activate();
        
        $("tbody > tr").hover(function() {
            var uid = $(this).attr("id");
            var feature = job_extents.getFeatureByFid(uid);
            selectControl.unselectAll();
            selectControl.select(feature);
        });
        
        job_extents.events.register("featureselected", this, function(e) {
            var uid = e.feature.data.uid;
            $('a#' + uid).parent().parent().css('background-color', '#E8E8E8');
        });
        
        job_extents.events.register("featureunselected", this, function(e) {
            var uid = e.feature.data.uid;
            $('a#' + uid).parent().parent().css('background-color', '#FFF');
        });
        
        map.addLayer(job_extents);
        
        // add filter selection layer
        var bbox = new OpenLayers.Layer.Vector("filter", {
           displayInLayerSwitcher: false,
           styleMap: getTransformStyleMap(),
        });
        map.addLayers([bbox]);
        
        // add a draw feature control for bbox selection.
        var box = new OpenLayers.Control.DrawFeature(bbox, OpenLayers.Handler.RegularPolygon, { 
           handlerOptions: {
              sides: 4,
              snapAngle: 90,
              irregular: true,
              persist: true
           }
        });
        map.addControl(box);
       
       
        // add a transform control to enable modifications to bounding box (drag, resize)
        var transform = new OpenLayers.Control.TransformFeature(bbox, {
           rotate: false,
           irregular: true,
           renderIntent: "transform",
        });
        
        // listen for selection box being added to bbox layer
        box.events.register('featureadded', this, function(e){
            // get selection bounds
            bounds = e.feature.geometry.bounds;
            
            // clear existing features
            bbox.removeAllFeatures();
            box.deactivate();
            
            // add a bbox feature based on user selection
            var feature = new OpenLayers.Feature.Vector(bounds.toGeometry());
            bbox.addFeatures(feature);
            
            // enable bbox modification
            transform.setFeature(feature);
            
            
        });
        
        // update the bounds after bbox is moved / modified
        transform.events.register("transformcomplete", this, function(e){
            var bounds = e.feature.geometry.bounds.clone();
            
        });
        
        // add the transform control
        map.addControl(transform);
        
        // handles click on filter area button
        $("#filter-area").bind('click', function(e){
            /*
             * activate the draw box control
             */
            bbox.removeAllFeatures();
            transform.unsetFeature();
            box.activate();
        });
    }
    
    /*
     * get the style map for the filter bounding box.
     */
    function getTransformStyleMap(){
        return new OpenLayers.StyleMap({
                    "default": new OpenLayers.Style({
                        fillColor: "blue",
                        fillOpacity: 0.05,
                        strokeColor: "blue"
                    }),
                    // style for the select extents box
                    "transform": new OpenLayers.Style({
                        display: "${getDisplay}",
                        cursor: "${role}",
                        pointRadius: 6,
                        fillColor: "blue",
                        fillOpacity: 1,
                        strokeColor: "blue",
                    },
                    {
                        context: {
                            getDisplay: function(feature) {
                                // hide the resize handles except at the south-east corner
                                return  feature.attributes.role === "n-resize"  ||
                                        feature.attributes.role === "ne-resize" ||
                                        feature.attributes.role === "e-resize"  ||
                                        feature.attributes.role === "s-resize"  ||
                                        feature.attributes.role === "sw-resize" ||
                                        feature.attributes.role === "w-resize"  ||
                                        feature.attributes.role === "nw-resize" ? "none" : ""
                            }
                        }
                    })
                });
    }
    
    
    /**
     * Returns the styles for job extents.
     */
    function getExtentStyles(){
        var defaultStyle = new OpenLayers.Style({
            strokeWidth: 3.5,
            strokeColor: '#D73F3F',
            fillColor: '#D73F3F',
            fillOpacity: 0.5,
        });
        
        var selectStyle = new OpenLayers.Style({
            strokeWidth: 3.5,
            strokeColor: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
        });
        
        var styles = new OpenLayers.StyleMap(
        {
            "default": defaultStyle,
            "select": selectStyle
        });
        
        return styles;
        
    }
    /**
     * Lists the jobs.
     *
     * page: the page number to display
     *
     */
    function listJobs(page){
        var url = Config.JOBS_URL;
        if (page) {
            url += '?page=' + page;
        }
        $.ajax(url)
        .done(function(data, textStatus, jqXHR){
           paginate(jqXHR);
           var tbody = $('table#jobs tbody');
           var table = $('table#jobs').DataTable();
           // clear the existing data and add new page
           table.clear();
           table.rows.add(data).draw();
           // clear the existing bbox features and add the new ones..
           job_extents.destroyFeatures();
           $.each(data, function(idx, job){
                var created = moment(job.created_at).format('MMMM Do YYYY, h:mm:ss');
                var extent = job.extent;
                var geojson = new OpenLayers.Format.GeoJSON({
                        'internalProjection': new OpenLayers.Projection("EPSG:3857"),
                        'externalProjection': new OpenLayers.Projection("EPSG:4326")
                });
                var feature = geojson.read(extent);
                job_extents.addFeatures(feature);
            });
            // zoom to page extents..
            map.zoomToExtent(job_extents.getDataExtent());
            
            // select bbox features based on row hovering
            $('table#jobs tbody tr').hover(
                function(e){
                    var selectControl = map.getControlsBy('id','selectControl')[0];
                    uid = $(e.currentTarget).find('a').attr('id');
                    var feature = job_extents.getFeaturesByAttribute('uid',uid)[0]
                    selectControl.unselectAll();
                    selectControl.select(feature);
                    //map.zoomToExtent(feature.geometry.bounds);
                },
                function(e){
                    var selectControl = map.getControlsBy('id','selectControl')[0];
                    selectControl.unselectAll();
                }
            );
        });
    }
    
    /*
     * Creates the pagination links based on the Content-Range and Link headers.
     *
     * jqXHR: the ajax xhr
     */
    function paginate(jqXHR){
        // get the pagination ul
        var paginate = $('ul.pager');
        paginate.empty();
        var info = $('#info');
        info.empty();
        
        var link = jqXHR.getResponseHeader('Link');
        var links = link.split(',');
        var a = links[0];
        var b = links[1];
        
        var rangeHeader = jqXHR.getResponseHeader('Content-Range');
        var total = rangeHeader.split('/')[1];
        var range = rangeHeader.split('/')[0].split(' ')[1];
        info.append('<span>Displaying ' + range + ' of ' + total + ' results');
        
        if (b) {
            var url = b.split(';')[0];
            url = url.slice(1, url.length -1);
            var page = url.split('=')[1];
            var rel = b.split(';')[1].split('=')[1];
            rel = rel.slice(1, rel.length -1);
            paginate.append('<li id="prev" data-page="' + page + '"><a href="#"><span class="glyphicon glyphicon-chevron-left"/> Prev</a></li>&nbsp;');
            $('li#prev').on('click', function(){
                var p = this.dataset.page;
                p == 'undefined' ? listJobs() : listJobs(p);  
            });
        }
        
        if (a) {
            var url = a.split(';')[0];
            url = url.slice(1, url.length -1);
            var page = url.split('=')[1];
            var rel = a.split(';')[1].split('=')[1];
            rel = rel.slice(1, rel.length -1);
            if (rel == 'prev') {
                paginate.append('<li id="prev" data-page="' + page + '"><a href="#"><span class="glyphicon glyphicon-chevron-left"/> Prev</a></li>');
                $('li#prev').on('click', function(){
                    var p = this.dataset.page;
                    p == 'undefined' ? listJobs() : listJobs(p);
                });
            }
            else {
                paginate.append('<li id="next" data-page="' + page + '"><a href="#">Next <span class="glyphicon glyphicon-chevron-right"/></a></li>');
                $('li#next').on('click', function(){
                    var p = this.dataset.page;
                    p == 'undefined' ? listJobs() : listJobs(p);
                });
            }
        }
    }
    
    /*
     * Initialize the job data table.
     */
    function initDataTable(){
        $('table#jobs').DataTable({
            paging: false,
            info: false,
            filter: false,
            searching: false,
            columns: [
                {
                    data: 'name',
                    render: function(data, type, row){
                        return '<a id="' + row.uid + '" href="/jobs/' + row.uid + '">' + data + '</a>';
                    }
                },
                {data: 'description'},
                {
                    data: 'created_at',
                    render: function(data, type, row){
                        return moment(data).format('MMMM Do YYYY, h:mm:ss a');
                    }
                },
                {data: 'region.name'}
            ]
           });
    }
    
}());


$(document).ready(function() {
    // initialize the app..
    
    $('li#list-tab').on('click', function(e){
        $('#create-export-map').css('visibility', 'hidden');
        $('#create-controls').css('display','none');
        $('#list-export-map').css('visibility', 'visible');
        $('#list-controls').css('display','block');
    });
    
    jobs.list.init();
});


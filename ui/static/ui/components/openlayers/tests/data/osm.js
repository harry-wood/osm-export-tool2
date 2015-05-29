
var osm_test_data = {
    'node': '<?xml version="1.0" encoding="UTF-8"?><osm version="0.5" generator="OpenStreetMap server">  <node id="200545" lat="52.5503033" lon="-1.8166417" user="blackadder" visible="true" timestamp="2006-03-22T16:33:41+00:00"/></osm>',
    'node_with_tags': '<?xml version="1.0" encoding="UTF-8"?><osm version="0.5" generator="OpenStreetMap server">  <node id="200545" lat="52.5503033" lon="-1.8166417" user="blackadder" visible="true" timestamp="2006-03-22T16:33:41+00:00"><tag k="a" v="b" /></node></osm>',
    'way': '<?xml version="1.0" encoding="UTF-8"?><osm version="0.5" generator="OpenStreetMap server">  <node id="29783468" lat="52.5506446" lon="-1.8141177" user="blackadder" visible="true" timestamp="2007-05-30T14:22:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783470" lat="52.5501275" lon="-1.8151451" user="blackadder" visible="true" timestamp="2007-05-30T14:22:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783471" lat="52.5505521" lon="-1.8157703" user="blackadder" visible="true" timestamp="2007-12-18T15:33:59+00:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783472" lat="52.5501836" lon="-1.8164007" user="blackadder" visible="true" timestamp="2007-12-18T15:33:59+00:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783473" lat="52.5506035" lon="-1.8170311" user="blackadder" visible="true" timestamp="2007-05-30T14:21:32+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783474" lat="52.5509559" lon="-1.8164092" user="blackadder" visible="true" timestamp="2007-05-30T14:21:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783476" lat="52.5513103" lon="-1.8169385" user="blackadder" visible="true" timestamp="2007-05-30T14:21:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783477" lat="52.5517893" lon="-1.8159626" user="blackadder" visible="true" timestamp="2007-05-30T14:21:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783478" lat="52.5518461" lon="-1.8145067" user="blackadder" visible="true" timestamp="2007-05-30T14:21:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <node id="29783479" lat="52.5511883" lon="-1.8143197" user="blackadder" visible="true" timestamp="2007-05-30T14:21:33+01:00">    <tag k="created_by" v="JOSM"/>  </node>  <way id="4685537" visible="true" timestamp="2007-05-30T14:21:35+01:00" user="blackadder">    <nd ref="29783472"/>    <nd ref="29783473"/>    <nd ref="29783474"/>    <nd ref="29783476"/>    <nd ref="29783477"/>    <nd ref="29783478"/>    <nd ref="29783479"/>    <nd ref="29783468"/>    <nd ref="29783470"/>    <nd ref="29783471"/>    <nd ref="29783472"/>    <tag k="name" v="Maney Hill School"/>    <tag k="created_by" v="JOSM"/>    <tag k="landuse" v="school"/>    <tag k="amenity" v="school"/>  </way></osm>',
    'node_way': '<?xml version="1.0" encoding="UTF-8"?><osm version="0.5" generator="OpenStreetMap server">  <node id="200565" lat="52.5526654" lon="-1.8146664" user="blackadder" visible="true" timestamp="2006-03-22T16:34:29+00:00"/>  <node id="200571" lat="52.5535575" lon="-1.8148566" user="blackadder" visible="true" timestamp="2007-11-15T12:54:40+00:00"/>  <node id="200572" lat="52.5522848" lon="-1.8145676" user="blackadder" visible="true" timestamp="2008-01-15T17:36:32+00:00">    <tag k="ref" v="0562901"/>    <tag k="both_sides" v="true"/>    <tag k="route_ref" v="167|757"/>    <tag k="highway" v="bus_stop"/>    <tag k="location" v="East View Road, Shooters Hill"/>  </node>  <node id="200573" lat="52.5520736" lon="-1.8145054" user="blackadder" visible="true" timestamp="2006-03-22T16:34:49+00:00"/>  <node id="200751" lat="52.5511951" lon="-1.8142246" user="blackadder" visible="true" timestamp="2006-03-22T16:36:18+00:00"/>  <node id="200752" lat="52.5505598" lon="-1.8140051" user="blackadder" visible="true" timestamp="2006-03-22T16:36:20+00:00"/>  <node id="200753" lat="52.5496876" lon="-1.8136891" user="blackadder" visible="true" timestamp="2006-03-22T21:55:13+00:00"/>  <node id="200754" lat="52.549009" lon="-1.8133906" user="blackadder" visible="true" timestamp="2006-03-22T16:36:24+00:00"/>  <node id="200755" lat="52.5478879" lon="-1.8128287" user="blackadder" visible="true" timestamp="2006-03-22T16:36:26+00:00"/>  <node id="200759" lat="52.5464722" lon="-1.8119684" user="blackadder" visible="true" timestamp="2006-03-22T16:36:34+00:00"/>  <node id="200771" lat="52.5466788" lon="-1.8121387" user="blackadder" visible="true" timestamp="2008-01-15T16:56:49+00:00"/>  <node id="645730" lat="52.5491787" lon="-1.8134657" user="blackadder" visible="true" timestamp="2008-01-15T17:36:32+00:00">    <tag k="created_by" v="JOSM"/>    <tag k="ref" v="0562201"/>    <tag k="both_sides" v="true"/>    <tag k="route_ref" v="167|757"/>    <tag k="highway" v="bus_stop"/>    <tag k="location" v="East View Road, Recretaion Ground"/>    <tag k="amenity" v="bus_stop"/>  </node>  <way id="21329267" visible="true" timestamp="2008-01-15T16:24:55+00:00" user="blackadder">    <nd ref="200571"/>    <nd ref="200565"/>    <nd ref="200572"/>    <nd ref="200573"/>    <nd ref="200751"/>    <nd ref="200752"/>    <nd ref="200753"/>    <nd ref="645730"/>    <nd ref="200754"/>    <nd ref="200755"/>    <nd ref="200771"/>    <nd ref="200759"/>    <tag k="name" v="East View Road"/>    <tag k="postal_code" v="B72"/>    <tag k="place_name" v="Sutton Coldfield"/>    <tag k="created_by" v="JOSM"/>    <tag k="highway" v="unclassified"/>  </way></osm>',
    'node_way2': '<?xml version="1.0" encoding="UTF-8"?><osm version="0.5" generator="OpenStreetMap server">  <node id="200565" lat="52.5526654" lon="-1.8146664" user="blackadder" visible="true" timestamp="2006-03-22T16:34:29+00:00"/>  <node id="200571" lat="52.5535575" lon="-1.8148566" user="blackadder" visible="true" timestamp="2007-11-15T12:54:40+00:00"/>  <node id="200572" lat="52.5522848" lon="-1.8145676" user="blackadder" visible="true" timestamp="2008-01-15T17:36:32+00:00"> </node> <node id="200573" lat="52.5520736" lon="-1.8145054" user="blackadder" visible="true" timestamp="2006-03-22T16:34:49+00:00"/>  <node id="200751" lat="52.5511951" lon="-1.8142246" user="blackadder" visible="true" timestamp="2006-03-22T16:36:18+00:00"/>  <node id="200752" lat="52.5505598" lon="-1.8140051" user="blackadder" visible="true" timestamp="2006-03-22T16:36:20+00:00"/>  <node id="200753" lat="52.5496876" lon="-1.8136891" user="blackadder" visible="true" timestamp="2006-03-22T21:55:13+00:00"/>  <node id="200754" lat="52.549009" lon="-1.8133906" user="blackadder" visible="true" timestamp="2006-03-22T16:36:24+00:00"/>  <node id="200755" lat="52.5478879" lon="-1.8128287" user="blackadder" visible="true" timestamp="2006-03-22T16:36:26+00:00"/>  <node id="200759" lat="52.5464722" lon="-1.8119684" user="blackadder" visible="true" timestamp="2006-03-22T16:36:34+00:00"/>  <node id="200771" lat="52.5466788" lon="-1.8121387" user="blackadder" visible="true" timestamp="2008-01-15T16:56:49+00:00"/>  <node id="645730" lat="52.5491787" lon="-1.8134657" user="blackadder" visible="true" timestamp="2008-01-15T17:36:32+00:00">  </node>  <way id="21329267" visible="true" timestamp="2008-01-15T16:24:55+00:00" user="blackadder">    <nd ref="200571"/>    <nd ref="200565"/>    <nd ref="200572"/>    <nd ref="200573"/>    <nd ref="200751"/>    <nd ref="200752"/>    <nd ref="200753"/>    <nd ref="645730"/>    <nd ref="200754"/>    <nd ref="200755"/>    <nd ref="200771"/>    <nd ref="200759"/>    <tag k="name" v="East View Road"/>    <tag k="postal_code" v="B72"/>    <tag k="place_name" v="Sutton Coldfield"/>    <tag k="created_by" v="JOSM"/>    <tag k="highway" v="unclassified"/>  </way></osm>',
    'boundary': "<?xml version='1.0' encoding='UTF-8'?><osm version='0.6' generator='OpenStreetMap server'>  <node id='-1083' lat='46.5134349879662' lon='6.552016533417165' />  <node id='-928' lat='46.50718790887415' lon='6.5519445571654' />  <node id='263286633' lat='46.5071874' lon='6.539368' />  <node id='595552349' lat='46.5136857' lon='6.5416954' />  <way id='-1086'>    <nd ref='-1083' />    <nd ref='595552349' />  </way>  <way id='23387850'>    <nd ref='263286633' />    <nd ref='595552349' />  </way>  <way id='46599224'>    <nd ref='263286633' />    <nd ref='-928' />    <nd ref='-1083' />  </way>  <relation id='365555'>    <member type='way' ref='-1086' role='' />    <member type='way' ref='46599224' role='' />    <member type='way' ref='23387850' role='' />    <tag k='admin_level' v='8' />    <tag k='boundary' v='administrative' />    <tag k='name' v='Name' />    <tag k='type' v='boundary' />  </relation></osm>",
    'multipolygon': "<?xml version='1.0' encoding='UTF-8'?><osm version='0.6' generator='OpenStreetMap server'>  <node id='-1137' visible='true' lat='46.509161109772535' lon='6.544068328412906' />  <node id='-1135' visible='true' lat='46.50888527790929' lon='6.548215618860512' />  <node id='-1133' visible='true' lat='46.51185959363164' lon='6.548450957830836' />  <node id='-1132' visible='true' lat='46.51171613695582' lon='6.544472844448852' />  <node id='-1123' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5136857' lon='6.5416954' />  <node id='-1121' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5071874' lon='6.539368' />  <node id='-1119' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.50718790887415' lon='6.5519445571654' />  <node id='-1117' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5134349879662' lon='6.552016533417165' />  <way id='-1144' visible='true'>    <nd ref='-1133' />    <nd ref='-1135' />    <nd ref='-1137' />  </way>  <way id='-1134' action='modify' visible='true'>    <nd ref='-1137' />    <nd ref='-1132' />    <nd ref='-1133' />  </way>  <way id='-1129' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1121' />    <nd ref='-1119' />    <nd ref='-1117' />  </way>  <way id='-1127' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1121' />    <nd ref='-1123' />  </way>  <way id='-1125' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1117' />    <nd ref='-1123' />  </way>  <relation id='-1131' action='modify' timestamp='2010-11-20T13:31:37Z' visible='true'>    <member type='way' ref='-1125' role='outer' />    <member type='way' ref='-1129' role='outer' />    <member type='way' ref='-1127' role='outer' />    <member type='way' ref='-1134' role='inner' />    <member type='way' ref='-1144' role='inner' />    <tag k='landuse' v='forest' />    <tag k='name' v='Name' />    <tag k='type' v='multipolygon' />  </relation></osm>",
    'route_simple': "<?xml version='1.0' encoding='UTF-8'?><osm version='0.6' generator='OpenStreetMap server'>  <node id='-1123' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5136857' lon='6.5416954' />  <node id='-1121' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5071874' lon='6.539368' />  <node id='-1119' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.50718790887415' lon='6.5519445571654' />  <node id='-1117' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5134349879662' lon='6.552016533417165' />  <way id='-1129' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1121' />    <nd ref='-1119' />    <nd ref='-1117' />  </way>  <way id='-1125' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1117' />    <nd ref='-1123' />  </way>  <relation id='-1131' timestamp='2010-11-20T13:31:37Z' visible='true'>    <member type='way' ref='-1125' role='' />    <member type='way' ref='-1129' role='' />    <tag k='name' v='Name' />    <tag k='route' v='bicycle' />    <tag k='type' v='route' />  </relation></osm>",
    'route_complex': "<?xml version='1.0' encoding='UTF-8'?><osm version='0.6' generator='OpenStreetMap server'>  <node id='-1167' visible='true' lat='46.51881472255323' lon='6.520388159913888' />  <node id='-1164' visible='true' lat='46.51399347318593' lon='6.534605421744218' />  <node id='-1162' visible='true' lat='46.51677208142628' lon='6.527897119783108' />  <node id='-1160' visible='true' lat='46.51638709318958' lon='6.535865259422915' />  <node id='-1123' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5136857' lon='6.5416954' />  <node id='-1121' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5071874' lon='6.539368' />  <node id='-1119' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.50718790887415' lon='6.5519445571654' />  <node id='-1117' timestamp='2010-11-20T13:31:37Z' visible='true' lat='46.5134349879662' lon='6.552016533417165' />  <way id='-1170' visible='true'>    <nd ref='-1123' />    <nd ref='-1164' />    <nd ref='-1162' />  </way>  <way id='-1169' visible='true'>    <nd ref='-1123' />    <nd ref='-1160' />    <nd ref='-1162' />  </way>  <way id='-1168' visible='true'>    <nd ref='-1167' />    <nd ref='-1162' />  </way>  <way id='-1129' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1121' />    <nd ref='-1119' />    <nd ref='-1117' />  </way>  <way id='-1125' timestamp='2010-11-20T13:31:37Z' visible='true'>    <nd ref='-1117' />    <nd ref='-1123' />  </way>  <relation id='-1131' timestamp='2010-11-20T13:31:37Z' visible='true'>    <member type='way' ref='-1168' role='' />    <member type='way' ref='-1170' role='backward' />    <member type='way' ref='-1169' role='forward' />    <member type='way' ref='-1125' role='' />    <member type='way' ref='-1129' role='' />    <tag k='name' v='Name' />    <tag k='route' v='bicycle' />    <tag k='type' v='route' />  </relation></osm>"
};

var osm_serialized_data = {
    'node':'<osm version="0.5" generator="OpenLayers '+OpenLayers.VERSION_NUMBER+'"><node id="200545" lon="-1.8166417" lat="52.5503033"/></osm>',
    'node_with_tags':'<osm version="0.5" generator="OpenLayers '+OpenLayers.VERSION_NUMBER+'"><node id="200545" lon="-1.8166417" lat="52.5503033"><tag k="a" v="b"/></node></osm>',
    'way':'<osm version="0.5" generator="OpenLayers '+OpenLayers.VERSION_NUMBER+'"><node id="29783472" lon="-1.8164007" lat="52.5501836"/><node id="29783473" lon="-1.8170311" lat="52.5506035"/><node id="29783474" lon="-1.8164092" lat="52.5509559"/><node id="29783476" lon="-1.8169385" lat="52.5513103"/><node id="29783477" lon="-1.8159626" lat="52.5517893"/><node id="29783478" lon="-1.8145067" lat="52.5518461"/><node id="29783479" lon="-1.8143197" lat="52.5511883"/><node id="29783468" lon="-1.8141177" lat="52.5506446"/><node id="29783470" lon="-1.8151451" lat="52.5501275"/><node id="29783471" lon="-1.8157703" lat="52.5505521"/><way id="4685537"><nd ref="29783472"/><nd ref="29783473"/><nd ref="29783474"/><nd ref="29783476"/><nd ref="29783477"/><nd ref="29783478"/><nd ref="29783479"/><nd ref="29783468"/><nd ref="29783470"/><nd ref="29783471"/><nd ref="29783472"/><tag k="area" v="yes"/><tag k="name" v="Maney Hill School"/><tag k="landuse" v="school"/><tag k="amenity" v="school"/></way></osm>',
    'node_way':'<osm version="0.5" generator="OpenLayers '+OpenLayers.VERSION_NUMBER+'"><node id="645730" lon="-1.8134657" lat="52.5491787"><tag k="ref" v="0562201"/><tag k="both_sides" v="true"/><tag k="route_ref" v="167|757"/><tag k="highway" v="bus_stop"/><tag k="location" v="East View Road, Recretaion Ground"/><tag k="amenity" v="bus_stop"/></node><node id="200572" lon="-1.8145676" lat="52.5522848"><tag k="ref" v="0562901"/><tag k="both_sides" v="true"/><tag k="route_ref" v="167|757"/><tag k="highway" v="bus_stop"/><tag k="location" v="East View Road, Shooters Hill"/></node><node id="200571" lon="-1.8148566" lat="52.5535575"/><node id="200565" lon="-1.8146664" lat="52.5526654"/><node id="200573" lon="-1.8145054" lat="52.5520736"/><node id="200751" lon="-1.8142246" lat="52.5511951"/><node id="200752" lon="-1.8140051" lat="52.5505598"/><node id="200753" lon="-1.8136891" lat="52.5496876"/><node id="200754" lon="-1.8133906" lat="52.549009"/><node id="200755" lon="-1.8128287" lat="52.5478879"/><node id="200771" lon="-1.8121387" lat="52.5466788"/><node id="200759" lon="-1.8119684" lat="52.5464722"/><way id="21329267"><nd ref="200571"/><nd ref="200565"/><nd ref="200572"/><nd ref="200573"/><nd ref="200751"/><nd ref="200752"/><nd ref="200753"/><nd ref="645730"/><nd ref="200754"/><nd ref="200755"/><nd ref="200771"/><nd ref="200759"/><tag k="name" v="East View Road"/><tag k="postal_code" v="B72"/><tag k="place_name" v="Sutton Coldfield"/><tag k="highway" v="unclassified"/></way></osm>'
};

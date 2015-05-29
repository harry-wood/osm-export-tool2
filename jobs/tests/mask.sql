-- View: exports.region_mask

DROP VIEW exports.region_mask;

CREATE OR REPLACE VIEW exports.region_mask AS 
select 1 as id, st_symdifference(st_polyfromtext('POLYGON((-180 90, -180 -90, 180 -90, 180 90, -180 90))', 4326), st_union(the_geom)) AS the_geom 
FROM exports.regions;

ALTER TABLE exports.region_mask
OWNER TO hot;
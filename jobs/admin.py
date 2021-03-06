from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from django.contrib.gis.geos import GEOSGeometry
from .models import (ExportFormat, Job, Region,
                     ExportProfile)

admin.site.register(ExportFormat)
admin.site.register(ExportProfile)


class HOTRegionGeoAdmin(OSMGeoAdmin):
    
    model = Region
    exclude = ['the_geom', 'the_geog']
    
    def save_model(self, request, obj, form, change): #pragma no cover
        geom_merc = obj.the_geom_webmercator
        obj.the_geom = geom_merc.transform(ct=4326, clone=True)
        obj.the_geog = GEOSGeometry(obj.the_geom.wkt)
        obj.save()
        
class JobAdmin(admin.ModelAdmin):
    search_fields = ['uid', 'name', 'user__username']
    list_display = ['uid','name', 'user']
    exclude = ['the_geom', 'the_geog']

    
    
admin.site.register(Region, HOTRegionGeoAdmin)
admin.site.register(Job, JobAdmin)

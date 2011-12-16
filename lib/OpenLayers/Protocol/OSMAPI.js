/**
 * Copyright (c) 2008-2010 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */
/*
 * @requires OpenLayers/Protocol/HTTP.js
 */

OpenLayers.Protocol.OSMAPI = OpenLayers.Class(OpenLayers.Protocol.HTTP, {
    
    map: null, 

    initialize: function(map, options) {
        this.map = map;
        options = options || {};
        options.url = options.url || "http://api.openstreetmap.org/api/0.6/map?";
        OpenLayers.Protocol.prototype.initialize.apply(this, arguments);
    },

    read: function(options) {
        OpenLayers.Protocol.prototype.read.apply(this, arguments);
        options = OpenLayers.Util.applyDefaults(options, this.options);

        var params = {};
        var filter = options.filter;
        var className = filter.CLASS_NAME;
        var filterType = className.substring(className.lastIndexOf(".") + 1);
        if (filterType == "Spatial") {
            if (filter.type == OpenLayers.Filter.Spatial.BBOX) {
                var bbox = filter.value;
                if (filter.projection.projCode != "EPSG:4326") {
                    bbox.transform(filter.projection,
                        new OpenLayers.Projection("EPSG:4326"));
                }
                var area = (options.filter.value.top - options.filter.value.bottom)
                    * (options.filter.value.right - options.filter.value.left);
                if (area > 1) {
                    throw "Too low zoom !";
                }
                params['bbox'] = bbox.left+","+bbox.bottom+","+bbox.right+","+bbox.top;
            }
            else {
                OpenLayers.Console.warn("Unknown spatial filter type " + filter.type);
            }
        }
        else {
            OpenLayers.Console.warn("Unknown filter type " + filterType);
        }

        var resp = new OpenLayers.Protocol.Response({requestType: "read"});
        resp.priv = OpenLayers.Request.GET({
            url: this.url,
            callback: this.createCallback(this.handleRead, resp, options),
            headers: options.headers || {},
            params: params
        });
        return resp;
    },
    
    CLASS_NAME: "OpenLayers.Protocol.OSMAPI" 
});

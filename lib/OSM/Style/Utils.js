/**
 * Copyright (c) 2010-2011 The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */
/*
 * @requires OpenLayers/Filter/FeatureId.js
 * @include OpenLayers/Feature/Vector.js
 * @include OpenLayers/Geometry/Point.js
 * @include OpenLayers/Geometry/LineString.js
 * @include OpenLayers/Geometry/Polygon.js
 * @include OpenLayers/Filter/Comparison.js
 * @include OpenLayers/Filter/Logical.js
 * @include OpenLayers/Rule.js
 */

if (!window.OSM) {
    window.OSM = {};
}
if (!window.OSM.Style) {
    window.OSM.Style = {};
}

OSM.Style.Utils = {
    addPointNoLabel: function(styleMap, property, value, image, width, height) {
        var symbolizer = {
            externalGraphic: image,
            graphicWidth: width ? width : 16,
            graphicHeight: height ? height : 16,
            graphicOpacity: 1
        };
        styleMap.addPointPhysicalStyle(property, value, symbolizer);
    },

    addPoint: function(styleMap, property, value, image, width, height) {
        height =  height ? height : 16;
        var symbolizer = {
            externalGraphic: image,
            graphicWidth: width ? width : 16,
            graphicHeight: height,
            graphicOpacity: 1,
            labelYOffset: -6 - height/2,
            labelField: 'name'
        };
        styleMap.addPointPhysicalStyle(property, value, symbolizer);
    },

    addSubPoint: function(styleMap, property, value, subProperty, subValue, image, width, height) {
        height =  height ? height : 16;
        var symbolizer = {
            externalGraphic: image,
            graphicWidth: width ? width : 16,
            graphicHeight: height,
            graphicOpacity: 1,
            labelYOffset: -6 - height/2,
            labelField: 'name'
        };
        styleMap.addPointSubStyle(property, value, subProperty, subValue, symbolizer);
    },

    addPointNoImg: function(styleMap, property, value, color, radius, opacity) {
        var symbolizer = {
            fillColor: color,
            pointRadius: radius,
            fillOpacity: opacity
        };
        styleMap.addPointPhysicalStyle(property, value, symbolizer);
    },

    addStroke: function(styleMap, property, value, strokeColor, strokeWidth, strokeDashstyle, strokeOpacity) {
        var symbolizer = {
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            strokeDashstyle: strokeDashstyle ? strokeDashstyle : "solid",
            strokeOpacity: strokeOpacity ? strokeOpacity : 1
        };
        styleMap.addLinePhysicalStyle(property, value, symbolizer);
    },

    addAreaLabel: function(styleMap, property, value, fillColor, fillOpacity, label) {
        var symbolizer = {
            fillColor: fillColor,
            fillOpacity: fillOpacity ? fillOpacity : 0.7,
            strokeColor: fillColor,
            labelField: label
        };
        styleMap.addAreaPhysicalStyle(property, value, symbolizer);
    },

    addArea: function(styleMap, property, value, fillColor, fillOpacity) {
        var symbolizer = {
            fillColor: fillColor,
            fillOpacity: fillOpacity ? fillOpacity : 0.7,
            strokeColor: fillColor,
            labelField: 'name'
        };
        styleMap.addAreaPhysicalStyle(property, value, symbolizer);
    },

    addStrokeArea: function(styleMap, property, value, color, strokeWidth) {
        var symbolizer = {
            strokeColor: color,
            strokeWidth: strokeWidth,
            fillColor: color
        };
        styleMap.addLinePhysicalStyle(property, value, symbolizer);
        symbolizer = {
            strokeColor: color,
            fillColor: color
        };
        styleMap.addAreaPhysicalStyle(property, value, symbolizer);
    },

    addStrokeOperator: function(styleMap, property, value, operator, strokeColor, strokeWidth, strokeDashstyle) {
        var symbolizer = {
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            strokeDashstyle: strokeDashstyle ? strokeDashstyle : "solid"
        };
        styleMap.addLinePhysicalStyle(property, value, symbolizer);
    }
}

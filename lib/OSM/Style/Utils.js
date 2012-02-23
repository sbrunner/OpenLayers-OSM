/**
 * Copyright (c) 2010-2011 The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */
/*
 * @requires OSM/Style/StyleMap.js
 * @include OpenLayers/Rule.js
 */

if (!window.OSM) {
    window.OSM = {};
}
if (!window.OSM.Style) {
    window.OSM.Style = {};
}

OSM.Style.Utils = {

    addStyle: function(color, destination) {
        destination.point.addRules([new OpenLayers.Rule({
            symbolizer: {
                pointRadius: 3,
                fillOpacity: 1,
                fillColor: color,
                strokeOpacity: 0,
                strokeWidth: 20,
                fontSize: 10,
                fontFamily: 'sans-serif'
            }
        })]);
        destination.stroke.addRules([new OpenLayers.Rule({
            symbolizer: {
                pointRadius: 5,
                strokeColor: color,
                strokeWidth: 3,
                fontSize: 10,
                fontFamily: 'sans-serif',
                fillOpacity: 0
            }
        })]);
        destination.area.addRules([new OpenLayers.Rule({
            symbolizer: {
                pointRadius: 5,
                fillOpacity: 0.4,
                fillColor: color,
                strokeColor: color,
                strokeWidth: 1,
                fontSize: 10,
                fontFamily: 'sans-serif'
            }
        })]);
    },

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

    addSubStroke: function(styleMap, property, value, subProperty, subValue, strokeColor, strokeWidth, strokeDashstyle, strokeOpacity) {
        var symbolizer = {
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            strokeDashstyle: strokeDashstyle ? strokeDashstyle : "solid",
            strokeOpacity: strokeOpacity ? strokeOpacity : 1
        };
        styleMap.addLinePhysicalStyle(property, value, subProperty, subValue, symbolizer);
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

    addSubArea: function(styleMap, property, value, subProperty, subValue, fillColor, fillOpacity) {
        var symbolizer = {
            fillColor: fillColor,
            fillOpacity: fillOpacity ? fillOpacity : 0.6,
            strokeColor: fillColor,
            labelField: 'name'
        };
        styleMap.addAreaPhysicalStyle(property, value, subProperty, subValue, symbolizer);
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

    addSubStrokeArea: function(styleMap, property, value, subProperty, subValue, color, strokeWidth) {
        var symbolizer = {
            strokeColor: color,
            strokeWidth: strokeWidth,
            fillColor: color
        };
        styleMap.addLinePhysicalStyle(property, value, subProperty, subValue, symbolizer);
        symbolizer = {
            strokeColor: color,
            fillColor: color
        };
        styleMap.addAreaPhysicalStyle(property, value, subProperty, subValue, symbolizer);
    }
}

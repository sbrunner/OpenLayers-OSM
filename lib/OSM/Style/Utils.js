/**
 * Copyright (c) 2010-2011 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */
/*
 * @include OpenLayers/Filter/Comparison.js
 * @include OpenLayers/Rule.js
 */


 
function addPointNoLabel(styleMap, property, value, image, width, height) {
    var filter = new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Comparison.LIKE,
        property: property,
        value: value
    });
    var symbolizer = { externalGraphic: image, graphicWidth: width ? width : 16, graphicHeight: height ? height : 16, graphicOpacity: 1 };
    var rule = new OpenLayers.Rule({
        symbolizer: symbolizer,
        filter: filter
    });
    styleMap.styles["default"].addRules([rule]);
    styleMap.styles.select.addRules([rule]);
}
function addPoint(styleMap, property, value, image, width, height) {
    var filter = new OpenLayers.Filter.Logical({
        type: OpenLayers.Filter.Logical.AND,
        filters: [new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: property,
            value: value
        }), new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: 'name',
            value: '.+'
        })]
    });
    var symbolizer = { externalGraphic: image, graphicWidth: width ? width : 16, graphicHeight: height ? height : 16, graphicOpacity: 1, labelYOffset: -7 -height/2, label: '${name}' };
    var rule = new OpenLayers.Rule({
        symbolizer: symbolizer,
        filter: filter
    });
    styleMap.styles["default"].addRules([rule]);
    styleMap.styles.select.addRules([rule]);
}
function addPointNoImg(styleMap, property, value, color, radius, opacity) {
    var filter = new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Comparison.LIKE,
        property: property,
        value: value
    });
    var symbolizer = { fillColor: color, pointRadius: radius, fillOpacity: opacity };
    var rule = new OpenLayers.Rule({
        symbolizer: symbolizer,
        filter: filter
    });
    styleMap.styles["default"].addRules([rule]);
    styleMap.styles.select.addRules([rule]);

    filter = new OpenLayers.Filter.Logical({
        type: OpenLayers.Filter.Logical.AND,
        filters: [new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: property,
            value: value
        }), new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: 'name',
            value: '.+'
        })]
    });
    symbolizer =  { fillColor: color, pointRadius: radius, fillOpacity: opacity, labelYOffset: -10, label: '${name}' };
    rule = new OpenLayers.Rule({
        symbolizer: symbolizer,
        filter: filter
    });
    styleMap.styles["default"].addRules([rule]);
    styleMap.styles.select.addRules([rule]);
}
function addStroke(styleMap, property, value, strokeColor, strokeWidth, strokeDashstyle, strokeOpacity) {
    var filter = new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Comparison.LIKE,
        property: property,
        value: value
    });
    var symbolizer = { strokeColor: strokeColor, strokeWidth: strokeWidth,
        strokeDashstyle: strokeDashstyle ? strokeDashstyle : "solid",
        strokeOpacity: strokeOpacity ? strokeOpacity : 1
    };
    styleMap.styles["default"].addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
    symbolizer = { strokeWidth: strokeWidth };
    styleMap.styles.select.addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
}
function addAreaLabel(styleMap, property, value, fillColor, fillOpacity, label) {
    var filter = new OpenLayers.Filter.Logical({
        type: OpenLayers.Filter.Logical.AND,
        filters: [new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: property,
            value: value
        }), new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: label,
            value: '.+'
        })]
    });
    var symbolizer = { fillColor: fillColor, fillOpacity: fillOpacity ? fillOpacity : 0.5, stroke: false, label: '${'+label+'}' };
    styleMap.styles["default"].addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
    symbolizer = { label: '${'+label+'}' };
    styleMap.styles.select.addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
}
function addArea(styleMap, property, value, fillColor, fillOpacity) {
    var filter = new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Comparison.LIKE,
        property: property,
        value: value
    });
    var symbolizer = { fillColor: fillColor, fillOpacity: fillOpacity ? fillOpacity : 0.5, stroke: false };
    styleMap.styles["default"].addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
    
    filter = new OpenLayers.Filter.Logical({
        type: OpenLayers.Filter.Logical.AND,
        filters: [filter, new OpenLayers.Filter.Comparison({
            type: OpenLayers.Filter.Comparison.LIKE,
            property: 'name',
            value: '.+'
        })]
    });
    symbolizer = { fillColor: fillColor, fillOpacity: fillOpacity ? fillOpacity : 0.5, stroke: false, label: '${name}' };
    styleMap.styles["default"].addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
    symbolizer = { label: '${name}' };
    styleMap.styles.select.addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
}
function addStrokeArea(styleMap, property, value, color, strokeWidth) {
    var filter = new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Comparison.LIKE,
        property: property,
        value: value
    });
    var symbolizer = { strokeColor: color, strokeWidth: strokeWidth, fillColor: color, fillOpacity: 0.8, stroke: true };
    styleMap.styles["default"].addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
    symbolizer = { strokeWidth: strokeWidth };
    styleMap.styles.select.addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
}

function addStrokeOperator(styleMap, property, value, operator, strokeColor, strokeWidth, strokeDashstyle) {
    var filter = new OpenLayers.Filter.Comparison({
        type: operator,
        property: property,
        value: value
    });
    var symbolizer = { strokeColor: strokeColor, strokeWidth: strokeWidth, strokeDashstyle: strokeDashstyle ? strokeDashstyle : "solid" };
    styleMap.styles["default"].addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
    symbolizer = { strokeWidth: strokeWidth };
    styleMap.styles.select.addRules([new OpenLayers.Rule({ symbolizer: symbolizer, filter: filter })]);
}

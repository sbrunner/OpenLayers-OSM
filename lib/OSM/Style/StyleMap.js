
/*
 * @include OSM/Style/Style.js
 * @requires OpenLayers/StyleMap.js
 */

/**
 * A modified stylemap to be faster than the original one in our usage.
 */

if (!window.OSM) {
    window.OSM = {};
}
if (!window.OSM.Style) {
    window.OSM.Style = {};
}


OSM.Style.StyleMap = OpenLayers.Class(OpenLayers.StyleMap, {

    physical: ['landuse', 'amenity', 'highway', 'leisure', 'natural', 'building', 'route', 'boundary', 'man_made', 'power', 'railway', 'waterway', 'cycleway', 'barrier', 'place', 'historic', 'tourism', 'shop', 'aerialway', 'mountain_pass', 'aeroway', 'fixme', 'FIXME'],
    pointPhysicalStyles: {},
    pointSubStyles: {},
    linePhysicalStyles: {},
    lineSubStyles: {},
    areaPhysicalStyles: {},
    areaSubStyles: {},

    initialize: function(style, options) {
        var maps = ['default', 'select', 'temporary', 'delete'];
        this.styles = {};

        for (var i = 0, leni = maps.length ; i < leni ; i++) {
            this.styles[maps[i]] = new OSM.Style.Style(null, {parent: true});
        };
        OpenLayers.Util.extend(this, options);
    },

    build: function() {
        for (map in this.styles) {
            this.styles[map].build();
        }

        this.buildSubMap(this.pointSubStyles);
        this.buildSubMap(this.lineSubStyles);
        this.buildSubMap(this.areaSubStyles);
    },

    buildSubMap: function(map) {
/*        for (phKey in map) {
            var vMap = map[phKey];
            var starMap = vMap['*'];
            for (phValue in vMap) {
                var sMap = vMap[phValue];
                var starMap = sMap['*'];
                if (starMap) {
                    for (subKey in sMap) {
                        if (subKey !== '*') {
                            OpenLayers.Util.extend(sMap[subKey], starMap);
                        }
                    }
                }
            }
        }*/
    },

    /**
     * Method: addUniqueValueRules
     * Convenience method to create comparison rules for unique values of a
     * property. The rules will be added to the style object for a specified
     * rendering intent. This method is a shortcut for creating something like
     * the "unique value legends" familiar from well known desktop GIS systems
     *
     * Parameters:
     * renderIntent - {String} rendering intent to add the rules to
     * property     - {String} values of feature attributes to create the
     *                rules for
     * symbolizers  - {Object} Hash of symbolizers, keyed by the desired
     *                property values
     * context      - {Object} An optional object with properties that
     *                symbolizers' property values should be evaluated
     *                against. If no context is specified, feature.attributes
     *                will be used
     */
    addUniqueValueRules: function(renderIntent, property, symbolizers, context) {
        var rules = [];
        for (var value in symbolizers) {
            rules.push(new OpenLayers.Rule({
                symbolizer: symbolizers[value],
                context: context,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: property,
                    value: value
                })
            }));
        }
        this.styles[renderIntent].point.addRules(rules);
        this.styles[renderIntent].stroke.addRules(rules);
        this.styles[renderIntent].area.addRules(rules);
    },

    addUniqueShapeValueRules: function(renderIntent, type, property, symbolizers, context) {
        var rules = [];
        for (var value in symbolizers) {
            rules.push(new OpenLayers.Rule({
                symbolizer: symbolizers[value],
                context: context,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: property,
                    value: value
                })
            }));
        }
        if (type == 'point') {
            this.styles[renderIntent].point.addRules(rules);
        }
        else if (type == 'sroke') {
            this.styles[renderIntent].sroke.addRules(rules);
        }
        else if (type == 'area') {
            this.styles[renderIntent].area.addRules(rules);
        }
    },

    /**
     * Method: createSymbolizer
     * Creates the symbolizer for a feature for a render intent.
     *
     * Parameters:
     * feature - {<OpenLayers.Feature>} The feature to evaluate the rules
     *           of the intended style against.
     * intent  - {String} The intent determines the symbolizer that will be
     *           used to draw the feature. Well known intents are "default"
     *           (for just drawing the features), "select" (for selected
     *           features) and "temporary" (for drawing features).
     *
     * Returns:
     * {Object} symbolizer hash
     */
    createSymbolizer: function(feature, intent) {
        if (!feature || !feature.geometry) {
            return OpenLayers.StyleMap.prototype.createSymbolizer.apply(this, arguments);
        }
        if (!this.styles[intent]) {
            intent = "default";
        }
        var baseStyle = OpenLayers.StyleMap.prototype.createSymbolizer.apply(this, arguments);

        var style = null;
        var physicalKey = null;
        var physicalValue = null;
        var physicalMap;
        var subMap;
        if (feature.geometry.CLASS_NAME == 'OpenLayers.Geometry.Polygon') {
            physicalMap = this.areaPhysicalStyles;
            subMap = this.areaSubStyles;
        }
        else if (feature.geometry.CLASS_NAME == 'OpenLayers.Geometry.LineString') {
            physicalMap = this.linePhysicalStyles;
            subMap = this.lineSubStyles;
        }
        else {
            physicalMap = this.pointPhysicalStyles;
            subMap = this.pointSubStyles;
        }
        this.physical.forEach(function(key) {
            if (style === null && feature.attributes[key]) {
                physicalKey = key;
                physicalValue = feature.attributes[key];
                if (physicalMap[key] && physicalMap[key][physicalValue]) {
                    style = physicalMap[key][physicalValue];
                }
                else if (physicalMap[key] && physicalMap[key]['*']) {
                    style = physicalMap[key]['*'];
                }
            }
        }, this);
        if (style !== null) {
            // from base
            style = OpenLayers.Util.extend(baseStyle, style);
        }
        if (physicalKey && subMap[physicalKey] && (
                subMap[physicalKey][physicalValue] || subMap[physicalKey]['*'])) {
            var map;
            if (subMap[physicalKey][physicalValue]) {
                map = subMap[physicalKey][physicalValue];
            }
            else {
                map = subMap[physicalKey]['*'];
            }
            for (key in feature.attributes) {
                if (OpenLayers.Util.indexOf(this.physical, key) < 0) {
                    var subStyle;
                    if (map[key] && map[key][feature.attributes[key]]) {
                        subStyle = map[key][feature.attributes[key]];
                    }
                    else if (map[key] && map[key]['*']) {
                        subStyle = map[key]['*'];
                    }
                    if (subStyle !== null) {
                        if (style !== null) {
                            style = OpenLayers.Util.extend(style, subStyle);
                        }
                        else {
                            // from base
                            style = OpenLayers.Util.extend(baseStyle, subStyle);
                        }
                        break;
                    }
                }
            }
        }

        if (style !== null) {
            if (style.labelField && feature.attributes[style.labelField]) {
                style.label = feature.attributes[style.labelField];
            }
            else if (style.labelFields) {
                var join = style.labelJoin ? style.labelJoin : ' ';
                var values = [];
                style.labelFields.forEach(function(key) {
                    if (feature.attributes[key]) {
                        values.push(feature.attributes[key]);
                    }
                }, this);
                style.label = values.join(join);
            }
            if (intent === "default") {
                return style;
            }
            else {
                if (baseStyle.fillColor) style.fillColor = baseStyle.fillColor;
                if (baseStyle.strokeColor) style.strokeColor = baseStyle.strokeColor;
                if (baseStyle.fontColor) style.fontColor = baseStyle.fontColor;
                return style;
            }
        }
        else {
            return baseStyle;
        }
    },

    addPhysicalStyle: function(map, physicalKey, physicalValue, style) {
        if (!map[physicalKey]) {
            map[physicalKey] = {};
        }
        map[physicalKey][physicalValue] = style;
    },

    addSubStyle: function(map, physicalKey, physicalValue, subKey, subValue, style) {
        if (!map[physicalKey]) {
            map[physicalKey] = {};
        }
        if (!map[physicalKey][physicalValue]) {
            map[physicalKey][physicalValue] = {};
        }
        if (!map[physicalKey][physicalValue][subKey]) {
            map[physicalKey][physicalValue][subKey] = {};
        }

        map[physicalKey][physicalValue][subKey][subValue] = style;
    },

    addPointPhysicalStyle: function(physicalKey, physicalValue, style) {
        this.addPhysicalStyle(this.pointPhysicalStyles, physicalKey, physicalValue, style);
    },

    addPointSubStyle: function(physicalKey, physicalValue, subKey, subValue, style) {
        this.addSubStyle(this.pointSubStyles, physicalKey, physicalValue, subKey, subValue, style);
    },

    addLinePhysicalStyle: function(physicalKey, physicalValue, style) {
        this.addPhysicalStyle(this.linePhysicalStyles, physicalKey, physicalValue, style);
    },

    addLineSubStyle: function(physicalKey, physicalValue, subKey, subValue, style) {
        this.addSubStyle(this.lineSubStyles, physicalKey, physicalValue, subKey, subValue, style);
    },

    addAreaPhysicalStyle: function(physicalKey, physicalValue, style) {
        this.addPhysicalStyle(this.areaPhysicalStyles, physicalKey, physicalValue, style);
    },

    addAreaSubStyle: function(physicalKey, physicalValue, subKey, subValue, style) {
        this.addSubStyle(this.areaSubStyles, physicalKey, physicalValue, subKey, subValue, style);
    },

    CLASS_NAME: "OSM.Style.StyleMap"
});


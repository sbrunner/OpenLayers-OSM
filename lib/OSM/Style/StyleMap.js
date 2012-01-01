
/*
 * @include OSM/Style/Style.js
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


OSM.Style.StyleMap = OpenLayers.Class({

    initialize: function(options) {
        var maps = ['default', 'select', 'temporary', 'delete'];
        this.styles = {};

        for (var i = 0, leni = maps.length ; i < leni ; i++) {
            this.styles[maps[i]] = {
                'point': new OSM.Style.Style(),
                'stroke': new OSM.Style.Style(),
                'area': new OSM.Style.Style()
            };
        };
        OpenLayers.Util.extend(this, options);
    },

    build: function() {
        for (map in this.styles) {
            for (type in this.styles[map]) {
                this.styles[map][type].build();
            }
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
    createSymbolizer: function(feature, map) {
        if (!map) {
            map = 'default';
        }
        var type = 'point';
        if (feature) {
            if (feature.geometry.CLASS_NAME == "OpenLayers.Geometry.Polygon") {
                type = 'area';
            }
            else if (feature.geometry.CLASS_NAME != "OpenLayers.Geometry.Point") {
                type = 'stroke';
            }
        }
        else {
            return this.defaultsPerSymbolizer ? {} : OpenLayers.Util.extend({}, this.defaultStyle);
        }
        return this.styles[map][type].createSymbolizer(feature);
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
        this.styles[renderIntent]['point'].addRules(rules);
        this.styles[renderIntent]['stroke'].addRules(rules);
        this.styles[renderIntent]['area'].addRules(rules);
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
        this.styles[renderIntent][type].addRules(rules);
    },

    CLASS_NAME: "OSM.Style.StyleMap"
});


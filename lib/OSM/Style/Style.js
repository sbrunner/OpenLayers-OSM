
/*
 * @requires OpenLayers/Style.js
 */

if (!window.OSM) {
    window.OSM = {};
}
if (!window.OSM.Style) {
    window.OSM.Style = {};
}


OSM.Style.Style = OpenLayers.Class(OpenLayers.Style, {

    parent: false,
    point: null,
    stroke: null,
    area: null,

    initialize: function(style, options) {
        OpenLayers.Style.prototype.initialize.apply(this, arguments);

        if (this.parent) {
            this.point = new OSM.Style.Style();
            this.stroke = new OSM.Style.Style();
            this.area = new OSM.Style.Style();
        }
    },

    addRules: function(rules) {
        Array.prototype.push.apply(this.rules, rules);
    },

    build: function() {
        this.propertyStyles = this.findPropertyStyles();
        if (this.parent) {
            this.point.build();
            this.stroke.build();
            this.area.build();
        }
    },

    /**
     * Method: createSymbolizer
     * creates a style by applying all feature-dependent rules to the base
     * style.
     *
     * Parameters:
     * feature - {<OpenLayers.Feature>} feature to evaluate rules for
     *
     * Returns:
     * {Object} symbolizer hash
     */
    createSymbolizer: function(feature) {
        if (this.parent && feature) {
            if (feature.geometry instanceof OpenLayers.Geometry.Point) {
                return this.point.createSymbolizer(feature);
            }
            else if (feature.geometry instanceof OpenLayers.Geometry.LineString) {
                return this.stroke.createSymbolizer(feature);
            }
            else if (feature.geometry instanceof OpenLayers.Geometry.Polygon) {
                return this.area.createSymbolizer(feature);
            }
        }
        else {
            return OpenLayers.Style.prototype.createSymbolizer.apply(this, arguments);
        }
    },

    /**
     * Method: addPropertyStyles
     *
     * Parameters:
     * propertyStyles - {Object} hash to add new property styles to. Will be
     *                  modified inline
     * symbolizer     - {Object} search this symbolizer for property styles
     *
     * Returns:
     * {Object} propertyStyles hash
     */
    addPropertyStyles: function(propertyStyles, symbolizer) {
        var property;
        for (var key in symbolizer) {
            property = symbolizer[key];
            if (typeof property == "string" &&
                    property.match(/\$\{[\w:]+\}/)) {
                propertyStyles[key] = true;
            }
        }
        return propertyStyles;
    },

    CLASS_NAME: "OSM.Style.Style"
});



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

    addRules: function(rules) {
        Array.prototype.push.apply(this.rules, rules);
    },

    build: function() {
        this.propertyStyles = this.findPropertyStyles();
    },

    CLASS_NAME: "OSM.Style.Style"
});


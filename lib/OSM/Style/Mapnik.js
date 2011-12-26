/**
 * Copyright (c) 2010-2010 The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */

/*
 * @requires OSM/Style/Utils.js
 */

OSM.Style.Mapnik = {
    getStyleMap: function(styleMap) {
        if (!styleMap) {
            styleMap = getJOSMLikeStyleMap();
        }

        OSM.Style.Utils.addPoint(styleMap, 'religion', 'bahai', 'app/images/josm/religion/bahai.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'buddhist', 'app/images/josm/religion/buddhism.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'christian', 'app/images/josm/religion/church.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'hindu', 'app/images/josm/religion/hinduism.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'jain', 'app/images/josm/religion/jainism.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'jewish', 'app/images/josm/religion/jewish.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'muslim', 'app/images/josm/religion/muslim.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'sikh', 'app/images/josm/religion/sikhism.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'shinto', 'app/images/josm/religion/shinto.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'spiritualist', 'app/images/josm/misc/no_icon.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'taoist', 'app/images/josm/religion/taoism.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'unitarian', 'app/images/josm/misc/no_icon.png');
        OSM.Style.Utils.addPoint(styleMap, 'religion', 'zoroastrian', 'app/images/josm/misc/no_icon.png');

        styleMap.addUniqueValueRules("default", "tunnel", {
            'yes': { strokeDashstyle: 'dash' }
        });

        styleMap.addUniqueValueRules("default", "bridge", {
            'yes': { strokeOpacity: 0.5 }
        });

        OSM.Style.Utils.addStroke(styleMap, 'highway', 'path', 'green', 2);

        OSM.Style.Utils.addStroke(styleMap, 'highway', 'motorway', '#808bc0', 27);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'motorway_link', '#808bc0', 20);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'trunk', '#7fc97f', 23);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'trunk_link', '#7fc97f', 16);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'primary', '#e46d71', 20);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'primary_link', '#e46d71', 13);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'secondary', '#fdbf6f', 16);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'secondary_link', '#fdbf6f', 13);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'tertiary', '#fefeb3', 13);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'unclassified', '#dddddd', 10);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'road', '#dddddd', 10);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'residential', '#dddddd', 10);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'living_street', '#cccccc', 6);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'service', '#dddddd', 6);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'track', '#c39947', 4);
        OSM.Style.Utils.addStrokeArea(styleMap, 'highway', 'pedestrian', '#999999', 4);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'raceway', '#dddddd', 4);
        OSM.Style.Utils.addArea(styleMap, 'highway', 'services', '#dddddd');
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'path', '#222222', 2);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'cycleway', '#222222', 2);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'footway', '#222222', 2);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'bridleway', '#222222', 2);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'byway', '#222222', 2);
        OSM.Style.Utils.addStroke(styleMap, 'highway', 'steps', '#222222', 3, 'dot');

        styleMap.addUniqueValueRules("default", "area", {
          'yes': { stroke: false }
        });

        styleMap.addUniqueValueRules("default", "landuse", {
          'allotments': { fillColor: '#bde3cb', fillOpacity: 0.5, stroke: false },
          'basin': { fillColor: '#b4d5f0', fillOpacity: 0.5, stroke: false },
          'brownfield': { fillColor: '#ebd7fe', fillOpacity: 0.5, stroke: false },
          'cemetery': { fillColor: '#b4b4b4', fillOpacity: 0.5, stroke: false },
          'commercial': { fillColor: '#fbfec8', fillOpacity: 0.5, stroke: false },
          'construction': { fillColor: '#9d9d6c', fillOpacity: 0.5, stroke: false },
          'farm': { fillColor: '#ead88d', fillOpacity: 0.5, stroke: false },
          'farmland': { fillColor: '#ead88d', fillOpacity: 0.5, stroke: false },
          'farmyard': { fillColor: '#ead88d', fillOpacity: 0.5, stroke: false },
          'forest': { fillColor: '#71be80', fillOpacity: 0.5, stroke: false },
          'garages': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'grass': { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false },
          'greenfield': { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false },
          'greenhouse_horticulture': { fillColor: '#dceaee', fillOpacity: 0.5, stroke: false },
          'industrial': { fillColor: '#ebd7fe', fillOpacity: 0.5, stroke: false },
          'landfill': { fillColor: '#9d9c6c', fillOpacity: 0.5, stroke: false },
          'meadow': { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false },
          'military': { fillColor: '#cdc0a2', fillOpacity: 0.5, stroke: false },
          'orchard': { fillColor: '#c2c2c2', fillOpacity: 0.5, stroke: false },
          'quarry': { fillColor: '#ded0d5', fillOpacity: 0.5, stroke: false },
          'railway': { fillColor: '#bde3cb', fillOpacity: 0.5, stroke: false },
          'recreation_ground': { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false },
          'reservoir': { fillColor: '#b4d5f0', fillOpacity: 0.5, stroke: false },
          'residential': { fillColor: '#f3f3f3', fillOpacity: 0.5, stroke: false },
          'retail': { fillColor: '#feeaea', fillOpacity: 0.5, stroke: false },
          'salt_pond': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'village_green': { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false },
          'vineyard': { fillColor: '#b3e2a8', fillOpacity: 0.5, stroke: false }
        });
        styleMap.addUniqueValueRules("default", "natural", {
          'bay': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'beach': { fillColor: '#efce54', fillOpacity: 0.5, stroke: false },
          'cave_entrance': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'cliff': { fillColor: '#aaaaaa', fillOpacity: 0.5, stroke: false },
          'coastline': { fillColor: '#b7d7f2', fillOpacity: 0.5, stroke: false },
          'fell': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'glacier': { fillColor: '#ddecec', fillOpacity: 0.5, stroke: false },
          'heath': { fillColor: '#ffffc0', fillOpacity: 0.5, stroke: false },
          'land': { fillColor: '#ffffc0', fillOpacity: 0.5, stroke: false },
          'mud': { fillColor: '#e5dbd0', fillOpacity: 0.5, stroke: false },
          'peak': { externalGraphic: 'symbols/peak.png', graphicWidth: 8, graphicHeight: 8, graphicOpacity: 1 },
          'sand': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'scree': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'scrub': { fillColor: '#73c182', fillOpacity: 0.5, stroke: false },
          'spring': { fillColor: '#b7d7f2', fillOpacity: 0.8, stroke: false },
          'stone': { fillColor: '#aaaaaa', fillOpacity: 0.8, stroke: false },
          'tree': { fillColor: '#73c182', fillOpacity: 0.8, stroke: false },
          'volcano': { fillColor: 'red', fillOpacity: 0.8, stroke: false },
          'water': { fillColor: '#b7d7f2', fillOpacity: 0.5, stroke: false },
          'wetland': { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false },
          'wood': { fillColor: '#73c182', fillOpacity: 0.5, stroke: false }
        });
        OSM.Style.Utils.addArea(styleMap, 'building', '.+', '#bca9a9', 0.9);

        styleMap.styles["default"].addRules([new OpenLayers.Rule({
            symbolizer: { fill: false },
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.LIKE,
                property: 'admin_level',
                value: '.+'
            })
        })]);

        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'river', 'blue', 15);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'stream', 'blue', 6);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'canal', 'blue', 10);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'ditch', 'blue', 6);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'drain', 'blue', 6);

        return styleMap;
    }
}

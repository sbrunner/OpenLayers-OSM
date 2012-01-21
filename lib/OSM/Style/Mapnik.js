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

        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'bahai', 'app/images/josm/religion/bahai.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'buddhist', 'app/images/josm/religion/buddhism.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'christian', 'app/images/josm/religion/church.png', 9);
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'hindu', 'app/images/josm/religion/hinduism.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'jain', 'app/images/josm/religion/jainism.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'jewish', 'app/images/josm/religion/jewish.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'muslim', 'app/images/josm/religion/muslim.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'sikh', 'app/images/josm/religion/sikhism.png', 12);
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'shinto', 'app/images/josm/religion/shinto.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'spiritualist', 'app/images/josm/misc/no_icon.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'taoist', 'app/images/josm/religion/taoism.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'unitarian', 'app/images/josm/misc/no_icon.png');
        OSM.Style.Utils.addSubPoint(styleMap, 'amenity', 'place_of_worship', 'religion', 'zoroastrian', 'app/images/josm/misc/no_icon.png');

        styleMap.addLineSubStyle('highway', '*', 'tunel', 'yes', { strokeDashstyle: 'dash' });
        styleMap.addLineSubStyle('highway', '*', 'bridge', 'yes', { strokeOpacity: 0.5 });

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

        styleMap.addAreaPhysicalStyle('landuse', 'allotments', { fillColor: '#bde3cb', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'basin', { fillColor: '#b4d5f0', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'brownfield', { fillColor: '#ebd7fe', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'cemetery', { fillColor: '#b4b4b4', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'commercial', { fillColor: '#fbfec8', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'construction', { fillColor: '#9d9d6c', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'farm', { fillColor: '#ead88d', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'farmland', { fillColor: '#ead88d', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'farmyard', { fillColor: '#ead88d', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'forest', { fillColor: '#71be80', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'garages', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'grass', { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'greenfield', { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'greenhouse_horticulture', { fillColor: '#dceaee', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'industrial', { fillColor: '#ebd7fe', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'landfill', { fillColor: '#9d9c6c', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'meadow', { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'military', { fillColor: '#cdc0a2', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'orchard', { fillColor: '#c2c2c2', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'quarry', { fillColor: '#ded0d5', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'railway', { fillColor: '#bde3cb', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'recreation_ground', { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'reservoir', { fillColor: '#b4d5f0', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'residential', { fillColor: '#f3f3f3', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'retail', { fillColor: '#feeaea', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'salt_pond', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'village_green', { fillColor: '#c5f0c5', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('landuse', 'vineyard', { fillColor: '#b3e2a8', fillOpacity: 0.5, stroke: false });

        styleMap.addAreaPhysicalStyle('natural', 'bay', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'beach', { fillColor: '#efce54', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'cave_entrance', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'cliff', { fillColor: '#aaaaaa', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'coastline', { fillColor: '#b7d7f2', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'fell', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'glacier', { fillColor: '#ddecec', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'heath', { fillColor: '#ffffc0', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'land', { fillColor: '#ffffc0', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'mud', { fillColor: '#e5dbd0', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'peak', { externalGraphic: 'symbols/peak.png', graphicWidth: 8, graphicHeight: 8, graphicOpacity: 1 });
        styleMap.addAreaPhysicalStyle('natural', 'sand', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'scree', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'scrub', { fillColor: '#73c182', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'spring', { fillColor: '#b7d7f2', fillOpacity: 0.8, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'stone', { fillColor: '#aaaaaa', fillOpacity: 0.8, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'tree', { fillColor: '#73c182', fillOpacity: 0.8, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'volcano', { fillColor: 'red', fillOpacity: 0.8, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'water', { fillColor: '#b7d7f2', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'wetland', { fillColor: '#dddddd', fillOpacity: 0.5, stroke: false });
        styleMap.addAreaPhysicalStyle('natural', 'wood', { fillColor: '#73c182', fillOpacity: 0.5, stroke: false });

        styleMap.addAreaPhysicalStyle('building', '*', {
            fillColor: '#bca9a9',
            fillOpacity: 0.8,
            strokeColor: '#bca9a9',
            labelFields: ['name', 'addr:housename', 'addr:housenumber'],
            labelJoin: '\n'
        });
        styleMap.addPointPhysicalStyle('building', '*', {
            externalGraphic: 'app/images/josm/misc/landmark/building.png',
            graphicWidth: 16,
            graphicHeight: 16,
            graphicOpacity: 1,
            labelYOffset: -6 - 8,
            labelField: ['name', 'addr:housename', 'addr:housenumber']
        });

        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'river', 'blue', 15);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'stream', 'blue', 6);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'canal', 'blue', 10);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'ditch', 'blue', 6);
        OSM.Style.Utils.addStroke(styleMap, 'waterway', 'drain', 'blue', 6);

        return styleMap;
    }
}

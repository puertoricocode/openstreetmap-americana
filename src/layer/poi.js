import * as label from "../constants/label.js";
import * as Color from "../constants/color.js";

const poiIcon = [
  "match",
  ["get", "class"],
  ["bar", "beer"],
  "poi_martini_glass",
  "hospital",
  "poi_health_cross",
  "parking",
  "poi_p",
  "poi_square_dot", //icon for generic POI, not currently used
];

const poiFilter = [
  ">=",
  ["zoom"],
  [
    "match",
    ["get", "class"],
    "hospital",
    15,
    ["bar", "beer"],
    16,
    "parking",
    17,
    18,
  ],
];

const iconColor = [
  "match",
  ["get", "class"],
  ["bar", "beer"],
  Color.poi.consumer,
  ["hospital", "parking"],
  Color.poi.infrastructure,
  Color.poi.infrastructure,
];

const labelPaint = {
  "text-halo-color": "#ffffff",
  "icon-halo-color": "#ffffff",
  "text-halo-width": 1.5,
  "icon-halo-width": 0.4,
  "text-halo-blur": 1,
  "icon-halo-blur": 0.2,
  "text-color": iconColor,
};

export const poi = {
  id: "poi",
  type: "symbol",
  paint: labelPaint,
  filter: poiFilter,
  layout: {
    "text-font": ["Metropolis Light"],
    "text-optional": true, //TODO: disable this for generic (square dot) POIs
    "text-size": {
      base: 1.0,
      stops: [
        [15, 10],
        [17, 12],
      ],
    },
    "icon-image": poiIcon,
    "icon-size": 0.5,
    "text-field": label.name_en,
    "text-variable-anchor": ["left", "right", "bottom"],
    "text-justify": "auto",
    "text-radial-offset": 0.75,
    "icon-optional": false,
    "text-max-width": 5,
    "icon-padding": 0,
    "text-padding": 0,
    "icon-allow-overlap": false,
  },
  source: "openmaptiles",
  "source-layer": "poi",
};

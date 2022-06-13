import * as label from "../constants/label.js";
import * as Color from "../constants/color.js";

const poiIcon = [
  "match",
  ["get", "class"],
  "bar",
  "martini-glass",
  "beer",
  "martini-glass",
  "hospital",
  "hospital-cross",
  "", //TODO add icon for generic POI
];

const poiFilter = [
  "any",
  ["==", ["get", "class"], "bar"],
  ["==", ["get", "class"], "beer"],
  ["==", ["get", "class"], "hospital"],
];

const iconColor = [
  "match",
  ["get", "class"],
  ["bar", "beer"],
  Color.shields.black,
  "hospital",
  Color.shields.red,
  Color.shields.black,
];

const labelPaint = {
  "text-halo-color": "#ffffff",
  "icon-halo-color": "#ffffff",
  "text-halo-width": 1.5,
  "icon-halo-width": 1.5,
  "text-halo-blur": 1,
  "icon-halo-blur": 1,
  "text-color": iconColor,
  "icon-color": iconColor,
};

export const poi = {
  id: "poi",
  type: "symbol",
  paint: labelPaint,
  filter: poiFilter,
  layout: {
    "text-font": ["Metropolis Light"],
    "text-size": {
      base: 1.0,
      stops: [
        [15, 10],
        [17, 12],
      ],
    },
    "icon-image": poiIcon,
    "icon-size": 1,
    "text-field": label.name_en,
    "text-anchor": "bottom",
    "text-variable-anchor": [
      "bottom",
      "bottom-right",
      "bottom-left",
      "right",
      "left",
    ],
    "text-justify": "auto",
    "text-radial-offset": 0.8,
    "icon-optional": false,
    "text-max-width": 8,
    "icon-padding": 0,
    "text-padding": 1,
    "icon-allow-overlap": false,
  },
  source: "openmaptiles",
  minzoom: 15,
  "source-layer": "poi",
};

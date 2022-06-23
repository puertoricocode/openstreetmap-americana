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
  "health-cross",
  "parking",
  "p",
  "square_dot", //icon for generic POI
];

const poiFilter = [
  "any",
  ["==", ["get", "class"], "bar"],
  ["==", ["get", "class"], "beer"],
  ["==", ["get", "class"], "hospital"],
  ["==", ["get", "class"], "parking"],
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
    "icon-size": 0.5,
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
    "text-padding": 0,
    "icon-allow-overlap": false,
  },
  source: "openmaptiles",
  minzoom: 15,
  "source-layer": "poi",
};

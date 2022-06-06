import * as label from "../constants/label.js";

const labelPaint = {
  "text-color": "#444",
  "text-halo-color": "rgb(255,255,255)",
  "text-halo-width": 2,
  "text-halo-blur": 0.5,
};

const poiIcon = [
  "match",
  ["get", "class"],
  "bar",
  "martini-glass",
  "beer",
  "martini-glass",
  "dot_city",
];

export const poi = {
  id: "poi",
  type: "symbol",
  paint: labelPaint,
  // filter: [
  //   "all",
  //   ["==", ["get", "class"], "village"],
  //   [
  //     "step",
  //     ["zoom"],
  //     ["<=", ["get", "rank"], 2],
  //     6,
  //     ["<=", ["get", "rank"], 4],
  //     7,
  //     ["<=", ["get", "rank"], 5],
  //     8,
  //     ["<=", ["get", "rank"], 9],
  //     10,
  //     [">=", ["get", "rank"], 1],
  //   ],
  // ],
  layout: {
    "text-font": ["Metropolis Bold"],
    "text-size": {
      base: 1.0,
      stops: [
        [5, 8],
        [8, 10],
        [12, 12],
      ],
    },
    "icon-image": poiIcon,
    "icon-size": {
      base: 1.0,
      stops: [
        [4, 0.12],
        [7, 0.25],
        [11, 0.5],
      ],
    },
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
    "text-radial-offset": 0.5,
    "icon-optional": false,
    "text-max-width": 8,
    "icon-padding": 0,
    "text-padding": 1,
    "icon-allow-overlap": false,
  },
  source: "openmaptiles",
  minzoom: 14,
  // maxzoom: 14,
  "source-layer": "poi",
};


import * as label from "../constants/label.js";
import * as Color from "../constants/color.js";

export const poi = {
  id: "poi",
  type: "symbol",
  paint: {
    "text-halo-color": "#ffffff",
    "icon-halo-color": "#ffffff",
    "text-halo-width": 1.5,
    "icon-halo-width": 0.4,
    "text-halo-blur": 1,
    "icon-halo-blur": 0.2,
    "text-color": [
      "match",
      ["get", "class"],
      ["bar", "beer"],
      Color.poi.consumer,
      ["hospital", "parking"],
      Color.poi.infrastructure,
      Color.poi.infrastructure,
    ],
  },
  filter: [
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
  ],
  layout: {
    "text-font": ["Metropolis Light"],
    "icon-optional": [
      "match",
      ["get", "class"],
      ["hospital", "parking"],
      true,
      false,
    ],
    "text-size": {
      base: 1.0,
      stops: [
        [15, 10],
        [17, 12],
      ],
    },
    "icon-image": [
      "match",
      ["get", "class"],
      ["bar", "beer"],
      "poi_martini_glass",
      "hospital",
      "poi_health_cross",
      "parking",
      "poi_p",
      "poi_square_dot", //icon for generic POI, not currently used
    ],
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

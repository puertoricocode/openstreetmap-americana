export const standardPalette = {
  black: "black",
  blue: "#003f87", // Pantone 294
  brown: "#693f23", // Pantone 469
  green: "#006747", // Pantone 342
  orange: "#f38f00", // Pantone 152
  pink: "#df4661", // Pantone 198
  purple: "#6d2077", // Pantone 259
  red: "#bf2033", // Pantone 187
  white: "white",
  yellow: "#ffcd00", // Pantone 116
  yellow_green: "#c4d600", // Pantone 382
};

export const hue = {
  tollRoad: 48,
  park: 136,
  water: 211,
  transport: 250,
  borderCasing: 281,
};

export const backgroundFill = "#faf6f2";

export const waterFill = `hsl(${hue.water}, 42%, 70%)`;
export const waterLine = `hsl(${hue.water}, 73%, 78%)`;
export const waterIntermittent = "hsl(205, 89%, 83%)";
export const waterLabel = `hsl(${hue.water}, 43%, 28%)`;

export const hueBorder = 0;

export const border = "hsl(0, 2%, 47%)";
export const borderCasing = `hsl(${hue.borderCasing}, 35%, 86%)`;

export const parkFill = `hsl(${hue.park}, 41%, 89%)`;
export const parkOutline = `hsl(${hue.park}, 41%, 79%)`;
export const parkLabel = `hsl(${hue.park}, 71%, 29%)`;

export const airportFill = `hsl(${hue.transport}, 41%, 95%)`;
export const airportOutline = `hsl(${hue.transport}, 41%, 79%)`;
export const airportRunway = `hsl(${hue.transport}, 41%, 79%)`;
export const airportLabel = `hsl(${hue.transport}, 71%, 29%)`;

export const poi = {
  infrastructure: standardPalette.blue,
  consumer: "#c05121",
  //"hsl(35, 97%, 39%)",
  //outdoor:
  //attraction:
  transportation: `hsl(${hue.transport}, 71%, 29%)`,
};

export const shields = standardPalette;

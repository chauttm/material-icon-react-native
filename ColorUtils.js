import tinycolor from "./tinycolor"; //https://github.com/bgrins/TinyColor

export const generateColorTheme = (primaryColor, secondaryColor) => {
  var color = tinycolor("red");
  console.log(color);
  var colors = tinycolor(primaryColor).monochromatic();

  const mc = colors.map(function (t) {
    return t.toHexString();
  });

  const dark = tinycolor(primaryColor).darken(10).toString();
  const darkRGB = toRGB(dark);

  return {
    Black: "#000000",
    White: "#FFFFFF",
    Blue: "#009CFF",
    Warning: "#FF7A00",
    Danger: "#FF0000",
    Primary: primaryColor,
    PrimaryLight: tinycolor(primaryColor).brighten().toString(),
    PrimaryLighter: tinycolor(primaryColor).brighten(60).toString(),

    NeutralLighter: tint(darkRGB, 0.9),
    NeutralLight: tint(darkRGB, 0.7),
    Neutral: tint(darkRGB, 0.5),
    NeutralDark: tint(darkRGB, 0.2),
    NeutralDarker: dark,
    Secondary: secondaryColor,
  };
};

const tint = (rgb, f) => {
  const { R, G, B } = rgb;
  const newR = R + Math.round((255 - R) * f);
  const newG = G + Math.round((255 - G) * f);
  const newB = B + Math.round((255 - B) * f);
  return rgbToCode(newR, newG, newB);
};

const shade = (rgb, f) => {
  const { R, G, B } = rgb;
  const newR = Math.round(R * (1 - f));
  const newG = Math.round(G * (1 - f));
  const newB = Math.round(B * (1 - f));
  return rgbToCode(newR, newG, newB);
};

const rgbToCode = (R, G, B) => "#" + intToHex(R) + intToHex(G) + intToHex(B);

const intToHex = (n) => {
  const s = n.toString(16);
  return s.length == 1 ? "0" + s : s.slice(-2);
};

const toRGB = (s) => {
  const red = parseInt(s.slice(1, 3), 16);
  const green = parseInt(s.slice(3, 5), 16);
  const blue = parseInt(s.slice(5, 7), 16);
  return { R: red, G: green, B: blue };
};

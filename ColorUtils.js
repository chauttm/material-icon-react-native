const NeutralLighter = "#efefef";
const NeutralLight = "#B6B6B6";
const Neutral = "#868686";
const NeutralDark = "#404040";
const NeutralDarker = "#222222";
const Black = "#000000";
const White = "#FFFFFF";

export const generateColorTheme = (
  primaryColor,
  secondaryColor,
  isDarkMode
) => ({
  Black: Black,
  White: White,
  Blue: "#009CFF",
  Warning: "#FF7A00",
  Danger: "#FF0000",
  Primary: primaryColor,
  Secondary: secondaryColor,

  NeutralLighter: NeutralLighter,
  NeutralLight: NeutralLight,
  Neutral: Neutral,
  NeutralDark: NeutralDark,
  NeutralDarker: NeutralDarker,

  Background: isDarkMode ? NeutralDarker : NeutralLighter,
  DividerOnBackground: isDarkMode ? NeutralDark : NeutralLight,
  TextOnBackground: isDarkMode ? White : Black,
  TextOnBackgroundMinor: isDarkMode ? NeutralLight : NeutralDark,
  TextOnSecondary: getBrightness(secondaryColor) > 130 ? Black : White,
  BottomBar: isDarkMode ? Black : White,
});

const getBrightness = (color) => {
  const { R, G, B } = toRGB(color);
  console.log(R, G, B);
  return (R + R + R + B + G + G + G + G) >> 3;
};

const toRGB = (s) => {
  const red = parseInt(s.slice(1, 3), 16);
  const green = parseInt(s.slice(3, 5), 16);
  const blue = parseInt(s.slice(5, 7), 16);
  return { R: red, G: green, B: blue };
};

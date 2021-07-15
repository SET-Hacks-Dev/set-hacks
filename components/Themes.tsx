import cloneDeep from "lodash.clonedeep";

const getTheme = (T) => {
  return cloneDeep(T);
};

export const invertAccentColor = (T) => {
  let theme = getTheme(T);
  let { brand, secondaryVariant } = theme.colors;
  theme.colors.brand[400] = secondaryVariant;
  theme.colors.secondaryVariant = brand[400];
  return theme;
};

export const invertHighlightColor = (T) => {
  let theme = getTheme(T);
  let temp = theme.colors.brand[1000];
  theme.colors.brand[1000] = theme.colors.brand[1100];
  theme.colors[1100] = temp;
  return theme;
};

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

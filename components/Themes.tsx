import cloneDeep from "lodash.clonedeep";

const getTheme = (T) => {
  return cloneDeep(T);
};

export const invertSecondaryColors = (T) => {
  let theme = getTheme(T);
  let { secondary, secondaryVariant } = theme.colors;
  theme.colors.secondary = secondaryVariant;
  theme.colors.secondaryVariant = secondary;
  return theme;
};

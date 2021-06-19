import { css } from "styled-components";
import theme from "./theme";

type ArrayMin<T> = {
  0: T;
} & Array<T>;

const media = Object.keys(theme.breakpoints).reduce(
  (accumulator: any, label) => {
    // use em as breakpoints to work properly cross-browser and to support
    // clients that change their browser font size
    // source: https://zellwk.com/blog/media-query-units/

    const em: number = theme.breakpoints[label] / 16;
    accumulator[label] = (...args: ArrayMin<any>) => css`
      @media (min-width: ${em}em) {
        ${
          //   @ts-ignore: An argument for 'first' was not provided.
          css(...args)
        }
      }
    `;

    return accumulator;
  },
  {}
);

export default media;

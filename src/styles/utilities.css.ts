import { breakpoints } from '@/styles/breakpoints.css.ts';

export const mediaQuery = (breakpoint: keyof typeof breakpoints) =>
  `@media(min-width: ${breakpoints[breakpoint]}) `;

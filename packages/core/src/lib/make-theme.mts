import type { Prettify } from '@inquirer/type';
import { defaultTheme, type Theme } from './theme.mjs';

export function makeTheme<SpecificTheme extends {}>(
  // @ts-expect-error: TODO Fix me
  theme: SpecificTheme & Partial<Theme> = {},
): Prettify<SpecificTheme & Theme> {
  return {
    ...defaultTheme,
    ...theme,
    style: {
      ...defaultTheme.style,
      ...theme.style,
    },
  };
}

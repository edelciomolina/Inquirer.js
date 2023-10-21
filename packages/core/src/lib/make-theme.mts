import type { Prettify } from '@inquirer/type';

export function makeTheme<SpecificTheme extends {}>(
  defaultSpecificTheme: SpecificTheme,
  theme: Partial<SpecificTheme> = {},
): Prettify<SpecificTheme> {
  return {
    ...defaultSpecificTheme,
    ...theme,
  };
}

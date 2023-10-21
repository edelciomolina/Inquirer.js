import chalk from 'chalk';
import spinners from 'cli-spinners';
import type { Prettify } from '@inquirer/type';

export type DefaultTheme = {
  prefix: string;
  spinner: {
    interval: number;
    frames: string[];
  };
  style: {
    answer: (text: string) => string;
    message: (text: string) => string;
    error: (text: string) => string;
    defaultAnswer: (text: string) => string;
    highlight: (text: string) => string;
    key: (text: string) => string;
  };
};

export type Theme<Extension extends {} = {}> = Prettify<Extension & DefaultTheme>;

export const defaultTheme: DefaultTheme = {
  prefix: chalk.green('?'),
  spinner: spinners.dots,
  style: {
    answer: chalk.cyan,
    message: chalk.bold,
    error: (text) => chalk.red(`> ${text}`),
    defaultAnswer: (text) => chalk.dim(`(${text})`),
    highlight: chalk.cyan,
    key: (text: string) => chalk.cyan.bold(`<${text}>`),
  },
};

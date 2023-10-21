import chalk from 'chalk';
import spinners from 'cli-spinners';

export type Theme = {
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
  };
};

export const defaultTheme: Theme = {
  prefix: chalk.green('?'),
  spinner: spinners.dots,
  style: {
    answer: chalk.cyan,
    message: chalk.bold,
    error: (text) => chalk.red(`> ${text}`),
    defaultAnswer: (text) => chalk.dim(`(${text})`),
  },
};

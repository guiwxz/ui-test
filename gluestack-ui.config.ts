//gluestack-ui.config.ts

import { createConfig, config as defaultConfig } from '@gluestack-ui/themed';

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      backgroundLight0: '#000',
      backgroundLight50: '#000',
      backgroundLight100: '#000',
      backgroundLight200: '#000',
      backgroundLight300: '#000',
      backgroundLight400: '#000',
      backgroundLight500: '#000',
      backgroundLight600: '#000',
      backgroundLight700: '#000',
      primary: '#000',
      primary0: '#ffffff',
      primary50: '#a3fff4',
      primary100: '#82fff0',
      primary200: '#61ffed',
      primary300: '#45fae5',
      primary400: '#24f9e1',
      primary500: '#17f3d9',
      primary600: '#12e4cb',
      primary700: '#17ccb7',
      primary800: '#1ab5a3',
      primary900: '#1c9f90',
      primary950: '#000000',
    },
  },
});

export { config }

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module "@gluestack-style/react" {
  interface ICustomConfig extends ConfigType { }
}
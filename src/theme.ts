import { createTheme, type MantineColorsTuple } from '@mantine/core';

/**
 * Tema rojo sobre negro: fondos neutros muy oscuros y un acento rojo vivo.
 */
const red: MantineColorsTuple = [
  '#ffe9e9',
  '#ffd1d1',
  '#ffb0b0',
  '#ff8585',
  '#ff5252',
  '#ff2d20',
  '#e01b10',
  '#b8150c',
  '#8f1009',
  '#660a06',
];

export const theme = createTheme({
  primaryColor: 'red',
  primaryShade: { light: 6, dark: 5 },
  colors: { red },
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontFamilyMonospace: '"SF Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  headings: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
  radius: { md: '12px', lg: '18px', xl: '26px' },
});

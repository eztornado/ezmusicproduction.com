import { createTheme, type MantineColorsTuple } from '@mantine/core';

/**
 * Tema oscuro cálido, en la línea visual del propio DAW:
 * fondos marrón-carbón y un acento ámbar.
 */
const amber: MantineColorsTuple = [
  '#fff4e2',
  '#ffe8c8',
  '#ffd79c',
  '#ffc46a',
  '#fdb543',
  '#fcab2b',
  '#fca61a',
  '#e09109',
  '#c88000',
  '#ae6d00',
];

export const theme = createTheme({
  primaryColor: 'amber',
  primaryShade: { light: 6, dark: 5 },
  colors: { amber },
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

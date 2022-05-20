import ITheme from 'models/ITheme';
import BREAKPOINTS from 'styles/breakpoints';
import COLORS from 'styles/colors';
import FONTS from 'styles/fonts';

const DARK: ITheme = {
  colors: COLORS,
  fonts: FONTS,
  breakpoints: BREAKPOINTS,
  basic: {
    background: '#171A1F',
    text: '#f5f5f5',
  },
};

export default DARK;

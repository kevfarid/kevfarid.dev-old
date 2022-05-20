import ITheme from 'models/ITheme';
import BREAKPOINTS from 'styles/breakpoints';
import COLORS from 'styles/colors';
import FONTS from 'styles/fonts';

const LIGHT: ITheme = {
  colors: COLORS,
  fonts: FONTS,
  breakpoints: BREAKPOINTS,
  basic: {
    background: '#f5f5f5',
    text: '#171A1F',
  },
};

export default LIGHT;

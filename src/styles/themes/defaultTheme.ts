import ITheme from 'models/ITheme';
import BREAKPOINTS from 'styles/breakpoints';
import COLORS from 'styles/colors';
import FONTS from 'styles/fonts';

const DEFAULT_THEME: Omit<ITheme, 'basic'> = {
  colors: COLORS,
  fonts: FONTS,
  breakpoints: BREAKPOINTS,
};

export default DEFAULT_THEME;

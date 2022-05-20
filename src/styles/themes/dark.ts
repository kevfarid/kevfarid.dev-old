import ITheme from 'models/ITheme';
import DEFAULT_THEME from './defaultTheme';

const DARK: ITheme = {
  ...DEFAULT_THEME,
  basic: {
    background: '#171A1F',
    text: '#f5f5f5',
  },
};

export default DARK;

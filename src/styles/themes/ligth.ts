import ITheme from 'models/ITheme';
import DEFAULT_THEME from './defaultTheme';

const LIGHT: ITheme = {
  ...DEFAULT_THEME,
  basic: {
    background: '#f5f5f5',
    backgroundSecondary: '#e5e5e5',
    text: '#171A1F',
  },
};

export default LIGHT;

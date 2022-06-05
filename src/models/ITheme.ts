import IBreakPoints from './IBreakPoints';
import IColors from './IColors';
import IFonts from './IFont';

export default interface ITheme {
  colors: IColors;
  fonts: IFonts;
  breakpoints: IBreakPoints;
  basic: {
    background: string;
    backgroundSecondary: string;
    text: string;
  };
}

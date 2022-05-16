import IColors from './IColors';
import IFonts from './IFont';

export default interface ITheme {
  colors: IColors;
  fonts: IFonts;
  basic: {
    background: string;
    text: string;
  };
}

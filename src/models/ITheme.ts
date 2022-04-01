import IColors from './IColors';

export default interface ITheme {
  colors: IColors;
  basic: {
    background: string;
    text: string;
  };
}

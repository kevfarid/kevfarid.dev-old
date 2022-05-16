interface IFont {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export default interface IFonts {
  h1?: IFont;
  h2?: IFont;
  h3?: IFont;
  subtitle?: IFont;
  body?: IFont;
  caption?: IFont;
  button?: IFont;
  buttonSmall?: IFont;
}

interface IFont {
  fontFamily: string;
  fontSize: number | string;
  fontWeight: number | string;
  lineHeight: number | string;
}

export default interface IFonts {
  h1?: IFont;
  h2?: IFont;
  h3?: IFont;
  subtitle?: IFont;
  body?: IFont;
  caption?: IFont;
  button?: IFont;
  link?: IFont;
}

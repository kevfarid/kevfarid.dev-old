export default interface ILang {
  title: string;
  description: string;
  subtitle: string;
  nickname: string;
  atsing: string;
  email: string;
  sections: {
    buildBanner: ISection;
  };
}

interface ISection {
  title: string;
  text: string;
  description?: string;
  path?: string;
  subtitle?: string;
}

export default interface ILang {
  title: string;
  description: string;
  subtitle: string;
  nickname: string;
  atsing: string;
  email: string;
  paths: IPath[];
  sections: {
    buildBanner: ISection;
    home: ISection;
  };
}

interface IPath {
  path: string;
  isSection: boolean;
  title: string;
}

interface IComponent {
  title: string;
}

interface IButton {
  title: string;
  url: string;
  type: string;
}

interface ISection {
  title: string;
  text: string;
  description?: string;
  path?: string;
  subtitle?: string;
  components?: {
    [key: string]: IComponent;
  };
  buttons: {
    [key: string]: IButton;
  };
}

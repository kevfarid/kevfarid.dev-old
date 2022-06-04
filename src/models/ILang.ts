export default interface ILang {
  title: string;
  description: string;
  subtitle: string;
  nickname: string;
  atsing: string;
  email: string;
  paths: IPath[];
  projects: IProject[];
  experiences: IExperience[];
  sections: {
    [key: string]: ISection;
  };
}

export interface IProject {
  title: string;
  img: string;
  isPrivate: boolean;
  url: string;
  repo: string;
  technologies: string[];
}

export interface IExperience {
  title: string;
  year: string;
  company: string;
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

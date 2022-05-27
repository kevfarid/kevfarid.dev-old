export default interface IConstants {
  title: string;
  description: string;
  nickname: string;
  avatar: string;
  profilesUrls: {
    linkedin: string;
    github: string;
    email: string;
    cv: string;
    twitter: string;
  };
  skills: {
    [key: string]: {
      icon: string;
      name: string;
    };
  };
  imgs: {
    heroBG: string;
    about: string;
    ogImage: string;
  };
  siteData: {
    siteUrl: string;
    siteRepo: string;
  };
  default: {
    theme: string;
    language: string;
  };
}

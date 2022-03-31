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
  icons: {
    linkedin: string;
    github: string;
    email: string;
    twitter: string;
    myIcon: string;
    menu: string;
    close: string;
    download: string;
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

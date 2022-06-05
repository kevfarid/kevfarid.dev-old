import IConstants from 'models/IConstansts';
import technologies from './technologies';

const constants: IConstants = {
  title: 'Kevin Farid Cruz',
  description: 'Software Engineer',
  nickname: 'KevFarid',
  avatar: '/static/images/me.png',
  url: 'https://kevfarid.dev',
  profilesUrls: {
    linkedin: 'https://www.linkedin.com/in/kevfarid/',
    github: 'https://github.com/kevfarid',
    email: 'mailto:kevfaridc@gmail.com',
    cv: '/cv-kevin-farid-cruz.pdf',
    twitter: 'https://twitter.com/KevFarid_',
  },
  skills: ['javascript', 'typescript', 'react', 'linux', 'git', 'angular'],
  technologies,
  imgs: {
    heroBG: '/heroBG.jpeg',
    about: 'https://i.imgur.com/K0VY5gf.png',
    ogImage: 'https://i.imgur.com/K0VY5gf.png',
  },
  siteData: {
    siteUrl: 'https://kevinfarid.com',
    siteRepo: 'https://github.com/kevfarid/kevinfarid.com',
  },
  default: {
    theme: 'dark',
    language: 'en',
  },
};

export default constants;

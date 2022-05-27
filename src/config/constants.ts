import IConstants from 'models/IConstansts';

const constants: IConstants = {
  title: 'Kevin Farid Cruz',
  description: 'Software Engineer',
  nickname: 'KevFarid',
  avatar: '/static/images/me.png',
  profilesUrls: {
    linkedin: 'https://www.linkedin.com/in/kevfarid/',
    github: 'https://github.com/kevfarid',
    email: 'mailto:kevfaridc@gmail.com',
    cv: '/cv-kevin-farid-cruz.pdf',
    twitter: 'https://twitter.com/KevFarid_',
  },
  skills: ['javascript', 'typescript', 'react', 'linux', 'git', 'angular'],
  technologies: {
    react: {
      icon: 'https://img.icons8.com/ios-glyphs/60/171A1F/react.png',
      name: 'React',
      key: 'react',
    },
    javascript: {
      icon: 'https://img.icons8.com/ios-glyphs/60/171A1F/javascript.png',
      name: 'JavaScript',
      key: 'javascript',
    },
    typescript: {
      icon: 'https://img.icons8.com/material-rounded/60/171A1F/typescript.png',
      name: 'TypeScript',
      key: 'typescript',
    },
    linux: {
      icon: 'https://img.icons8.com/ios-filled/50/171A1F/linux.png',
      name: 'Linux',
      key: 'linux',
    },
    git: {
      icon: 'https://img.icons8.com/ios-filled/50/171A1F/git.png',
      name: 'Git',
      key: 'git',
    },
    angular: {
      icon: 'https://img.icons8.com/ios-filled/50/171A1F/angularjs.png',
      name: 'Angular',
      key: 'angular',
    },
  },
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

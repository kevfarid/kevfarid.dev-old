import IConstants from './IConstansts';

export default interface IConfig {
  language: string;
  theme: string;
  constants: IConstants;
  languageTexts: object;
  fileConstantsPath: string;
}

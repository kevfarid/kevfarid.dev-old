export default interface IColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
}

export type ColorsVariant =
  | 'primary'
  | 'primaryHover'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'text'
  | 'background';

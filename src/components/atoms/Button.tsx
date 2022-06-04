import styled from '@emotion/styled';
import ITheme from 'models/ITheme';

const buttonGeneric = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '0.5rem',
  fontSize: '1rem',
  fontWeight: '600',
  minWidth: '7.5rem',
};

const buttonStyles = {
  primary: styled.a<ButtonProps>(({ theme }) => ({
    ...buttonGeneric,
    backgroundColor: theme.colors.primary,
    border: '0',
    borderRadius: '0.7rem',
    padding: '0.5rem 0.7rem',
    color: theme.colors.light,
    '&:hover': {
      backgroundColor: theme.colors.primaryHover,
      color: theme.colors.secondary,
    },
  })),
  secondary: styled.a<ButtonProps>(({ theme }) => ({
    ...buttonGeneric,
    backgroundColor: 'transparent',
    color: theme.basic.text,
    border: '0',
    '&:hover': {
      color: theme.colors.secondary,
    },
  })),
};

export default function Button(props: ButtonProps) {
  const { children, variant, icon, href, ...otherProps } = props;
  const Component = buttonStyles[variant || 'primary'] || buttonStyles.primary;

  return (
    <Component href={href} {...otherProps}>
      {children}
      {icon}
    </Component>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  download?: string;
  theme?: ITheme;
};

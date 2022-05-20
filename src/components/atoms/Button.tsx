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
  primary: styled.button<ButtonProps>(({ theme }) => ({
    ...buttonGeneric,
    backgroundColor: theme.colors.primary,
    border: '0',
    borderRadius: '0.7rem',
    padding: '0.7rem',
    color: theme.colors.light,
    '&:hover': {
      backgroundColor: theme.colors.primaryHover,
      color: theme.colors.secondary,
    },
  })),
  secondary: styled.button<ButtonProps>(({ theme }) => ({
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
  const { children, variant, icon, onClick, ...otherProps } = props;
  const Component = buttonStyles[variant || 'primary'] || buttonStyles.primary;

  return (
    <Component onClick={onClick} {...otherProps}>
      {children}
      {icon}
    </Component>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  theme?: ITheme;
};

import styled from '@emotion/styled';
import ITheme from 'models/ITheme';

export default function Title(props: TitleProps) {
  const { children, align, variant, ...otherProps } = props;

  return (
    <TitleStyled align={align} variant={variant} {...otherProps}>
      {children}
    </TitleStyled>
  );
}

const TitleStyled = styled.h1<TitleProps>`
  display: flex;
`;

type TitleProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  theme?: ITheme;
  align?: 'left' | 'center' | 'right';
};

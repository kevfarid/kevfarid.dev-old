import styled from '@emotion/styled';
import { ColorsVariant } from 'models/IColors';
import ITheme from 'models/ITheme';
import React from 'react';

export default function Title(props: TextProps) {
  const { children, align, variant, color, ...otherProps } = props;

  const Component = textVariant[variant || 'body'] || textVariant.body;

  return (
    <Component align={align} variant={variant} color={color} {...otherProps}>
      {children}
    </Component>
  );
}

const createStyleds = (props: TextProps) => ({
  textAlign: props.align || 'left',
  color: props.color || props.theme?.basic.text,
  ...props.theme?.fonts[props.variant || 'body'],
});

const textVariant = {
  h1: styled.h1<TextProps>(createStyleds),
  h2: styled.h2<TextProps>(createStyleds),
  h3: styled.h3<TextProps>(createStyleds),
  subtitle: styled.h4<TextProps>(createStyleds),
  body: styled.p<TextProps>(createStyleds),
  caption: styled.small<TextProps>(createStyleds),
  button: styled.button<TextProps>(createStyleds),
  link: styled.a<TextProps>(createStyleds),
};

type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'button'
  | 'link';

type TextProps = {
  children: React.ReactNode;
  color?: ColorsVariant;
  variant?: Variants;
  theme?: ITheme;
  align?: 'left' | 'center' | 'right';
};

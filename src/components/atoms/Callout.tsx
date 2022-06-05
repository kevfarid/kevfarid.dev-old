import styled from '@emotion/styled';
import { ColorsVariant } from 'models/IColors';
import ITheme from 'models/ITheme';

export default function Callout(props: CalloutProps) {
  const { children, emojin, align, variant, ...otherProps } = props;
  return (
    <CalloutStyled align={align} variant={variant} {...otherProps}>
      {emojin} {children}
    </CalloutStyled>
  );
}

const CalloutStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props: Omit<CalloutProps, 'emojin'>) =>
    props.theme?.colors[props.variant || 'primary']};
  color: ${(props: Omit<CalloutProps, 'emojin'>) =>
    props.theme?.colors.light || 'white'};
  justify-content: ${(props: Omit<CalloutProps, 'emojin'>) =>
    props.align || 'left'};
  padding: 0.7rem;
`;

type CalloutProps = {
  children: React.ReactNode;
  emojin: string;
  variant?: ColorsVariant;
  theme?: ITheme;
  align?: 'left' | 'center' | 'right';
};

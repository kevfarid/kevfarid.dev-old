import styled from '@emotion/styled';
import ITheme from 'models/ITheme';

export default function ButtonGroup(props: ButtonGroupProps) {
  const { children, gap, ...otherProps } = props;

  return (
    <ButtonGroupStyled gap={gap} {...otherProps}>
      {children}
    </ButtonGroupStyled>
  );
}

const ButtonGroupStyled = styled.div<ButtonGroupProps>(({ gap }) => ({
  display: 'flex',
  gap: gap || '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
}));

type ButtonGroupProps = {
  children: React.ReactNode;
  gap?: string | number;
  theme?: ITheme;
};

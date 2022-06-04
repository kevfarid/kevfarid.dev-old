import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import MySocialMedia from 'components/molecules/MySocialMedia';
import useConfig from 'hooks/useConfig';
import ITheme from 'models/ITheme';
import React from 'react';

export default function Footer() {
  const { lang } = useConfig();

  return (
    <FooterStyles>
      <Text variant="caption">{lang.sections?.footer.text}</Text>
      <MySocialMedia />
    </FooterStyles>
  );
}

const FooterStyles = styled.footer<{ theme?: ITheme }>`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  margin-top: 8rem;
  border-top: 1px solid ${({ theme }) => theme.basic.text};
  align-items: center;
`;

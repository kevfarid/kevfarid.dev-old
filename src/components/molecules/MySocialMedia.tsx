import styled from '@emotion/styled';
import GitHub from 'components/atoms/icons/GitHub';
import Linkedin from 'components/atoms/icons/Linkedin';
import Mail from 'components/atoms/icons/Mail';
import Twitter from 'components/atoms/icons/Twitter';
import LinkExtenal from 'components/atoms/LinkExternal';

export default function MySocialMedia() {
  return (
    <SocialMediaStyled>
      <LinkExtenal href="https://github.com/" target="black">
        <GitHub label="Github" />
      </LinkExtenal>
      <Linkedin label="Linkedin" />
      <Twitter label="Twitter" />
      <Mail label="Email" />
    </SocialMediaStyled>
  );
}

const SocialMediaStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

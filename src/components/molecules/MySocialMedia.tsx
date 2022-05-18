import styled from '@emotion/styled';
import GitHub from 'components/atoms/icons/GitHub';
import Linkedin from 'components/atoms/icons/Linkedin';
import Mail from 'components/atoms/icons/Mail';
import Twitter from 'components/atoms/icons/Twitter';
import LinkExtenal from 'components/atoms/LinkExternal';
import useConfig from 'hooks/useConfig';

export default function MySocialMedia() {
  const { constants } = useConfig();
  return (
    <SocialMediaStyled>
      <LinkExtenal href={constants.profilesUrls.github} target="black">
        <GitHub label="Github" />
      </LinkExtenal>
      <LinkExtenal href={constants.profilesUrls.twitter} target="black">
        <Twitter label="Twitter" />
      </LinkExtenal>
      <LinkExtenal href={constants.profilesUrls.linkedin} target="black">
        <Linkedin label="Linkedin" />
      </LinkExtenal>
      <LinkExtenal href={constants.profilesUrls.email} target="black">
        <Mail label="Email" />
      </LinkExtenal>
    </SocialMediaStyled>
  );
}

const SocialMediaStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  max-width: 300px;
`;

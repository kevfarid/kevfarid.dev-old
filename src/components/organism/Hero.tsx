import styled from '@emotion/styled';
import Button from 'components/atoms/Button';
import Arrow from 'components/icons/Arrow';
import PaperPlane from 'components/icons/PaperPlane';
import About from 'components/molecules/About';
import ButtonGroup from 'components/molecules/ButtonGroup';
import MyPicture from 'components/molecules/MyPicture';
import MySocialMedia from 'components/molecules/MySocialMedia';
import Text from 'components/atoms/Text';
import useConfig from 'hooks/useConfig';
import ITheme from 'models/ITheme';

export default function Hero(props: HeroProps) {
  const { title, description, src, section } = props;

  const { lang } = useConfig();

  const buttons = lang.sections?.home?.buttons;

  const handleClick = (path: string, type: string) => {
    if (type === 'download') {
      return window.open(path, '_blank');
    }

    return (window.location.href = path);
  };

  return (
    <HeroStyles id={section}>
      <HeroAboutStyles>
        <About title={title} description={description} />
        <ButtonGroup>
          <Button
            onClick={() => {
              handleClick(buttons.cv.url, buttons.cv?.type);
            }}
            variant="primary"
            icon={<PaperPlane color="#fff" />}
          >
            {buttons?.cv?.title}
          </Button>
          <Button
            onClick={() => {
              handleClick(buttons.portfolio?.url, buttons.portfolio?.type);
            }}
            variant="secondary"
            icon={<Arrow />}
          >
            {buttons?.portfolio?.title}
          </Button>
        </ButtonGroup>
      </HeroAboutStyles>
      <HeroPictureStyles>
        <MyPicture src={src} alt={title} />
        <HeroSocialMediaStyles>
          <Text variant="body">
            {lang.sections?.home.components?.socialMedia.title}
          </Text>
          <MySocialMedia />
        </HeroSocialMediaStyles>
      </HeroPictureStyles>
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${({ theme }: StyleProps) => theme?.breakpoints.mobile}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const HeroSocialMediaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeroPictureStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeroAboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

type HeroProps = {
  title: string;
  description: string;
  src: string;
  section: string;
};

type StyleProps = {
  theme?: ITheme;
};

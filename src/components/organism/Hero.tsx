import styled from '@emotion/styled';
import Button from 'components/atoms/Button';
import Arrow from 'components/atoms/icons/Arrow';
import PaperPlane from 'components/atoms/icons/PaperPlane';
import About from 'components/molecules/About';
import ButtonGroup from 'components/molecules/ButtonGroup';
import MyPicture from 'components/molecules/MyPicture';
import MySocialMedia from 'components/molecules/MySocialMedia';
import Text from 'components/atoms/Text';
import useConfig from 'hooks/useConfig';

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
        <HeroSocialMediaStyles>
          <Text variant="body">
            {lang.sections?.home.components?.socialMedia.title}
          </Text>
          <MySocialMedia />
        </HeroSocialMediaStyles>
      </HeroAboutStyles>
      <MyPicture src={src} alt={title} />
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeroSocialMediaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeroAboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem;
  gap: 2rem;
`;

type HeroProps = {
  title: string;
  description: string;
  src: string;
  section: string;
};

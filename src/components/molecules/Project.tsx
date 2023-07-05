import styled from '@emotion/styled';
import { IProject } from 'models/ILang';
import Text from 'components/atoms/Text';
import ImageCustom from 'components/atoms/Image';
import Button from 'components/atoms/Button';
import ButtonGroup from './ButtonGroup';
import useConfig from 'hooks/useConfig';
import ITheme from 'models/ITheme';

export default function Project(props: IProject) {
  const { title, img, isPrivate, url, repo, technologies } = props;

  const { lang, constants, isDark } = useConfig();

  const technologiesList = Object.values(constants.technologies).filter(
    (tech) => technologies.includes(tech.key)
  );

  return (
    <ProyectStyled>
      <Card>
        <Image src={img} alt={title} />
        <Content>
          <Info>
            <Text variant="h2" margin-bottom=".5rem">
              {title}
            </Text>
            <Stacks>
              {technologiesList.map((tech) => (
                <Stack key={tech.key} isDark={isDark} uniColor={tech.uniColor}>
                  <ImageCustom src={tech.icon} alt={tech.name} width="20px" />
                  <Text variant="caption" margin-bottom="0">
                    {tech.name}
                  </Text>
                </Stack>
              ))}
            </Stacks>
          </Info>
          <ButtonGroup>
            <Button href={url} target="_blank" variant="primary">
              {lang.sections?.portfolio?.buttons?.url}
            </Button>
            {!isPrivate && (
              <Button href={repo} target="_blank" variant="primary">
                {lang.sections?.portfolio?.buttons?.repo}
              </Button>
            )}
          </ButtonGroup>
        </Content>
      </Card>
    </ProyectStyled>
  );
}

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  padding: 1rem;
  @media (max-width: ${({ theme }: StyleProps) => theme?.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 0.2rem;
    & > img {
      width: 100%;
    }
  }
`;

const Stack = styled.div<{ isDark?: boolean; uniColor?: boolean }>`
  display: flex;
  justify-content: left;
  align-items: center;
  & img {
    filter: invert(
      ${(props) => {
        if (props.isDark && props.uniColor) {
          return '1';
        }
        return '0';
      }}
    );
  }
`;

const Stacks = styled(Stack)`
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

const Info = styled.div`
  margin-bottom: 2rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 80%;
  height: 80%;
`;

const ProyectStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  max-width: 660px;
  gap: 0.5rem;
  background-color: ${({ theme }: StyleProps) =>
    theme?.basic.backgroundSecondary};
`;

type StyleProps = {
  theme?: ITheme;
};

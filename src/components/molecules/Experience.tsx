import styled from '@emotion/styled';
import Text from 'components/atoms/Text';
import ITheme from 'models/ITheme';

export default function Experience(props: ExperienceProps) {
  const { year, position, company } = props;
  return (
    <ExperienceStyles>
      <Text variant="caption" weight="bold">
        {year}
      </Text>
      <Text variant="subtitle" weight="bold" margin-bottom="0" margin-top="0">
        {position}
      </Text>
      <div></div>
      <Text variant="body" margin-top="0" margin-bottom="2rem">
        {company}
      </Text>
    </ExperienceStyles>
  );
}

const ExperienceStyles = styled.div<{ theme?: ITheme }>`
  border-top: 2px solid ${(props) => props.theme.basic.text};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
`;

type ExperienceProps = {
  year: string;
  position: string;
  company: string;
};

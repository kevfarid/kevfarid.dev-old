import styled from '@emotion/styled';
import ImageCustom from 'components/atoms/Image';

export default function MyPicture({ src, alt }: MyPictureProps) {
  return (
    <MyPictureStyles>
      <ImageCustom src={src} alt={alt} width={250} />
    </MyPictureStyles>
  );
}

const MyPictureStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type MyPictureProps = {
  src: string;
  alt: string;
};

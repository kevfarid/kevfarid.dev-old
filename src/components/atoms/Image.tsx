import Image from 'next/image';

export default function ImageCustom(props: ImageProps) {
  const { src, alt, width, height, ...otherProps } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={width || height || '100%'}
      height={height || width || '100%'}
      {...otherProps}
    />
  );
}

type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
};

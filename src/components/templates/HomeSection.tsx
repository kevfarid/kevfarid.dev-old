import Hero from 'components/organism/Hero';

export default function HomeSection(props: AboutSectionProps) {
  const { title, description, image, section } = props;

  return (
    <Hero
      title={title}
      description={description}
      src={image}
      section={section}
    />
  );
}

type AboutSectionProps = {
  title: string;
  description: string;
  image: string;
  section: string;
};

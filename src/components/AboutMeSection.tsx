import FullPageSection from './layout/FullPageSection';
import SectionTitle from './layout/SectionTitle';

const AboutMeSection = () => {
  return (
    <FullPageSection watermarkText="About Me">
      <SectionTitle title="Who Am I?" />
      <div className="grid grid-cols-2 items-center">
        <div className="portrait relative z-10 h-[402px] w-[268px] place-self-center rounded-lg bg-portrait-img bg-cover" />

        <p className="max-w-prose text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
          ullamcorper lectus pellentesque hac tempus, ut iaculis. Lacus, risus,
          odio dictumst morbi viverra commodo enim id ultrices. Amet nulla
          tincidunt non rutrum orci amet, tortor. Neque lectus non turpis et
          enim quis. Leo fames vulputate scelerisque sed at non adipiscing.
          Massa amet ipsum metus, pulvinar senectus. A blandit sed aliquam urna.
          Pretium mattis tortor cras cursus pulvinar proin cursus viverra sit.
          Tortor, porttitor tincidunt scelerisque sit dictum ultrices.
        </p>
      </div>
    </FullPageSection>
  );
};

export default AboutMeSection;

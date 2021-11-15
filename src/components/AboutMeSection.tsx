import FullPageSection from './layout/FullPageSection';
import portrait from '../assets/portrait.jpeg';

const AboutMeSection = () => {
  return (
    <FullPageSection title="Who am I?" watermarkText="About Me">
      <div className="grid grid-cols-2 items-center">
        <img
          src={portrait}
          alt="Portrait of Nathan Downer"
          className="w-auto h-98 rounded-lg object-cover place-self-center relative test"
        />
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

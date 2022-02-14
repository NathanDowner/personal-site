import FullPageSection from './layout/FullPageSection';
import SectionTitle from './layout/SectionTitle';
import portrait from '../assets/portrait.jpeg';

const AboutMeSection = () => {
  return (
    <FullPageSection id="about" watermarkText="About Me">
      <SectionTitle title="Who Am I?" />
      <div className="grid items-center lg:grid-cols-2">
        <div className="relative mb-16 place-self-center before:absolute before:inset-0 before:-translate-x-3 before:translate-y-3 before:rounded-lg before:border-2 before:border-red before:transition-transform before:ease-in-out before:hover:-translate-x-1 before:hover:translate-y-1 md:mb-24">
          <img
            src={portrait}
            className="relative h-60 w-[auto] rounded-lg md:h-72 lg:h-[402px]"
            alt=""
          />
        </div>
        <p className="max-w-prose lg:text-lg">
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

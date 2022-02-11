import FullPageSection from './layout/FullPageSection';
import SectionTitle from './layout/SectionTitle';
import portrait from '../assets/portrait.jpeg';

const AboutMeSection = () => {
  return (
    <FullPageSection watermarkText="About Me">
      <SectionTitle title="Who Am I?" />
      <div className="grid grid-cols-2 items-center">
        <div className="group relative place-self-center before:absolute before:inset-0 before:z-[-1] before:-translate-x-3 before:translate-y-3 before:transform before:rounded-lg before:border-2 before:border-red before:transition-transform before:ease-in-out before:hover:-translate-x-1 before:hover:translate-y-1">
          <img
            src={portrait}
            className=" h-[402px] w-[268px] rounded-lg group-hover:filter"
            alt=""
          />
        </div>
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

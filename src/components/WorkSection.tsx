import JobEntry from './JobEntry';
import FullPageSection from './layout/FullPageSection';
import SectionTitle from './layout/SectionTitle';

const WorkSection = () => {
  return (
    <FullPageSection watermarkText="Work">
      <SectionTitle title="Where I've Worked" />
      <div className="flex items-center justify-center ">
        <ul className="relative mt-10 space-y-4">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-4 border-red" />
          {[1, 2, 3, 4, 5, 6].map((blank) => (
            <JobEntry key={blank} />
          ))}
        </ul>
      </div>
    </FullPageSection>
  );
};

export default WorkSection;

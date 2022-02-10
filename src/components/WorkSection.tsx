import JobEntry from './JobEntry';
import FullPageSection from './layout/FullPageSection';
import SectionTitle from './layout/SectionTitle';

const WorkSection = () => {
  return (
    <FullPageSection watermarkText="Work">
      <SectionTitle title="Where I've Worked" />
      <div className="flex justify-center items-center ">
        <ul className="relative space-y-4 mt-10">
          <div className="absolute border-l-4 border-red h-full left-1/2 transform -translate-x-1/2" />
          {[1, 2, 3, 4, 5, 6].map((blank) => (
            <JobEntry key={blank} />
          ))}
        </ul>
      </div>
    </FullPageSection>
  );
};

export default WorkSection;

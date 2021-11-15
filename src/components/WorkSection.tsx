import JobEntry from './JobEntry';
import FullPageSection from './layout/FullPageSection';

const WorkSection = () => {
  return (
    <FullPageSection title="Where I've Worked" watermarkText="Work">
      <div className="flex justify-center ">
        {/* <div
          className="border-2 absolute border-dashed border-red h-full"
          style={{ left: '5.8%' }}
        /> */}
        <ul className="space-y-4 border-l-4 border-dashed border-red">
          {[1, 2, 3].map((blank) => (
            <li className="ml-6">
              <JobEntry key={blank} />
            </li>
          ))}
        </ul>
      </div>
    </FullPageSection>
  );
};

export default WorkSection;

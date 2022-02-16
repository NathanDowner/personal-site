import FullPageSection from '../layout/FullPageSection';
import SectionTitle from '../layout/SectionTitle';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = () => {
  return (
    <FullPageSection id="projects" watermarkText="Projects">
      <SectionTitle title="Things I've Built" />
      <div className="absolute inset-0 z-20 grid select-none place-items-center text-center text-4xl font-bold backdrop-blur-md lg:text-6xl">
        Project Section Coming Soon!!!
      </div>
      <div className="relative flex w-full max-w-screen-2xl items-center justify-evenly">
        {/* Billboard */}
        <div className="relative left-5 transform [perspective:1000px] [perspective-origin:60%_50%]">
          <h3 className="font-bold [transform:rotateY(20deg)]">
            Project Name Here
          </h3>
          <div className="h-[400px] w-[600px] rounded-md bg-billboard-bg [transform:rotateY(20deg)]"></div>
        </div>
        <ProjectCarousel />
      </div>
    </FullPageSection>
  );
};

export default ProjectsSection;

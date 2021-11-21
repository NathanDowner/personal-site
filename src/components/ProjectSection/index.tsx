import FullPageSection from '../layout/FullPageSection';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = () => {
  return (
    <FullPageSection title="Things I've Built" watermarkText="Projects">
      <ProjectCarousel />
    </FullPageSection>
  );
};

export default ProjectsSection;

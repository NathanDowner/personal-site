import FullPageSection from '../layout/FullPageSection';
import SectionTitle from '../layout/SectionTitle';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = () => {
  return (
    <FullPageSection id="projects" watermarkText="Projects">
      <SectionTitle title="Things I've Built" />
      <ProjectCarousel />
    </FullPageSection>
  );
};

export default ProjectsSection;

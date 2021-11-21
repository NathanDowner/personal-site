import FullPageSection from './layout/FullPageSection';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <FullPageSection title="Things I've Built" watermarkText="Projects">
      {[1, 2, 3, 4, 5].map((count) => (
        <ProjectCard key={count} isSelected={true} />
      ))}
    </FullPageSection>
  );
};

export default ProjectsSection;

import ProjectCard from './ProjectCard';

const ProjectCarousel = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((count) => (
        <ProjectCard key={count} isSelected={true} />
      ))}
    </div>
  );
};

export default ProjectCarousel;

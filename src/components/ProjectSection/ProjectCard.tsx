import githubIcon from '../../assets/logos/github-proj-icon.svg';
import externalIcon from '../../assets/icons/external-link-icon.svg';
import { Project } from '../../models/project.model';

type Props = {
  isSelected: boolean;
  isPrev: boolean;
  isNext: boolean;
};

const icons: { [externalSite: string]: string } = {
  github: githubIcon,
  website: externalIcon,
};

const sampleProject: Project = {
  title: 'Project Name Here',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis porroquam, obcaecati magni perferendis odio quia tenetur exercitationem error unde?',
  links: [
    { url: '#', name: 'github' },
    { url: '#', name: 'website' },
  ],
  media: [],
  tools: ['Next.js', 'Tailwind css', 'Firebase'],
};

const ProjectCard = ({ isSelected = false, isPrev, isNext }: Props) => {
  //  use swiper-slide-active class to change the broder to red
  return (
    <div
      className={`${isPrev ? '' : isNext ? 'border-2 border-light' : ''} ${
        isSelected && 'z-50 border-2 border-red'
      } bg-card-b max-w- relative max-w-[454px] overflow-hidden rounded-xl bg-card-bg pl-4 pb-4 text-violet shadow-lg`}
    >
      <div className="mb-2 flex justify-between">
        <h3 className="mt-4 text-lg font-bold">Project Name Here</h3>

        {/* links */}
        <div className="flex overflow-hidden rounded-bl-lg bg-project-link-bg">
          {sampleProject.links.map((link) => (
            <img
              className="cursor-pointer px-4 py-3 hover:bg-red hover:fill-red hover:text-red"
              key={link.name}
              src={icons[link.name]}
              alt={link.name}
            />
          ))}
        </div>
      </div>

      <div className="mb-10 max-w-sm text-sm line-clamp-2">
        {sampleProject.description}
      </div>

      {/* Bottom row */}
      <div className="flex items-center text-xs">
        <div className="flex-grow space-x-2">
          {sampleProject.tools.map((tool) => (
            <span key={tool} className="project-tool relative">
              {tool}
            </span>
          ))}
        </div>
        <button className="mr-4 bg-none text-base font-semibold text-red transition-all hover:scale-105 hover:[text-shadow:0_0_4px_#F60512]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

import githubIcon from '../assets/icons/github-proj-icon.svg';
import externalIcon from '../assets/icons/external-link-icon.svg';

type Props = {
  isSelected: boolean;
};

const links: Link[] = [
  { url: '#', name: 'github' },
  { url: '#', name: 'website' },
];

const icons: { [externalSite: string]: string } = {
  github: githubIcon,
  website: externalIcon,
};

type Link = {
  url: string;
  name: 'github' | 'website' | 'playstore' | 'appstore';
};

type Media = {
  name: string;
  src: string;
};

type Tool = string;

type Project = {
  title: string;
  description: string;
  links: Link[];
  media: Media[];
  tools: Tool[];
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

const ProjectCard = ({ isSelected = false }: Props) => {
  return (
    <div
      className={`${
        isSelected && 'ring-2 ring-red'
      } text-violet max-w-job-card rounded-xl shadow-lg bg-card-b max-w- pl-4 pb-4 overflow-hidden bg-card-bg`}
    >
      <div className="flex justify-between mb-2">
        <h3 className="font-bold text-lg mt-4">Project Name Here</h3>

        {/* links */}
        <div className="flex rounded-bl-lg bg-project-link-bg overflow-hidden">
          {sampleProject.links.map((link) => (
            <img
              className="px-4 py-3 cursor-pointer hover:bg-red"
              key={link.name}
              src={icons[link.name]}
              alt={link.name}
            />
          ))}
        </div>
      </div>

      <div className="line-clamp-2 max-w-sm mb-10">
        {sampleProject.description}
      </div>

      {/* Bottom row */}
      <div className="flex items-center">
        <div className="flex-grow space-x-2">
          {sampleProject.tools.map((tool) => (
            <span key={tool} className="relative project-tool">
              {tool}
            </span>
          ))}
        </div>
        <button className="text-red bg-none text-xl font-semibold mr-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

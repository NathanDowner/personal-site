import SectionTitle from '../layout/SectionTitle';
import flutter from '../../assets/logos/flutter.svg';
import angular from '../../assets/logos/angular.svg';
import python from '../../assets/logos/python.svg';
import react from '../../assets/logos/react.svg';
import tailwindcss from '../../assets/logos/tailwindcss.svg';
import firebase from '../../assets/logos/firebase.svg';
import nextjs from '../../assets/logos/nextjs.svg';
import ionic from '../../assets/logos/ionic.svg';
import typescript from '../../assets/logos/typescript.svg';
import FrameworkCard from './FrameworkCard';

const tools: { name: string; icon: string }[] = [
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Tailwindcss',
    icon: tailwindcss,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'Ionic',
    icon: ionic,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  // {
  //   name: 'Angular',
  //   icon: angular,
  // },
];

const FrameworksSection = () => {
  return (
    <div className="overflow-hidden bg-container-bg py-10">
      <SectionTitle title="What I Use" />

      <div className="flex space-x-8 md:space-x-24">
        <div className=" flex shrink-0 animate-ticker space-x-8 md:animate-ticker md:space-x-24">
          {tools.map((tool) => (
            <FrameworkCard {...tool} key={tool.name} />
          ))}
        </div>
        <div className="flex shrink-0 animate-ticker2-sm space-x-8 md:animate-ticker2 md:space-x-24">
          {tools.map((tool) => (
            <FrameworkCard {...tool} key={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameworksSection;

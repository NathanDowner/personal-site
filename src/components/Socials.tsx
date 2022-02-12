import github from '../assets/logos/github-icon.svg';
import instagram from '../assets/logos/instagram-icon.svg';
import twitter from '../assets/logos/twitter-icon.svg';
import linkedIn from '../assets/logos/linkedin-icon.svg';

const socials: { icon: string; alt: string }[] = [
  {
    icon: github,
    alt: 'Github Icon',
  },
  {
    icon: instagram,
    alt: 'Instagram Icon',
  },
  {
    icon: twitter,
    alt: 'Twitter Icon',
  },
  {
    icon: linkedIn,
    alt: 'LinkedIn Icon',
  },
];

const Socials = () => {
  return (
    <div className="flex space-x-2">
      {socials.map(({ alt, icon }) => (
        <img
          key={alt}
          src={icon}
          className="h-7 w-7 cursor-pointer transition-transform ease-in-out hover:-translate-y-1"
          alt={alt}
        />
      ))}
    </div>
  );
};

export default Socials;

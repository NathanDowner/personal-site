import github from '../assets/logos/github-icon.svg';
import instagram from '../assets/logos/instagram-icon.svg';
import twitter from '../assets/logos/twitter-icon.svg';
import linkedIn from '../assets/logos/linkedin-icon.svg';

type SocialAccount = {
  icon: string;
  name: string;
  link: string;
};

const socials: SocialAccount[] = [
  {
    icon: github,
    name: 'Github Icon',
    link: 'https://github.com/NathanDowner',
  },
  {
    icon: instagram,
    name: 'Instagram Icon',
    link: 'https://www.instagram.com/nathan_downer/',
  },
  {
    icon: twitter,
    name: 'Twitter Icon',
    link: 'https://twitter.com/Nathan_Downer',
  },
  {
    icon: linkedIn,
    name: 'LinkedIn Icon',
    link: 'https://www.linkedin.com/in/nathan-downer/',
  },
];

const Socials = () => {
  return (
    <div className="flex space-x-6 lg:space-x-2">
      {socials.map(({ name, icon, link }) => (
        <a href={link} key={name} target="_blank" rel="noreferrer">
          <img
            key={name}
            src={icon}
            className="h-7 w-7 cursor-pointer transition-transform ease-in-out hover:-translate-y-1"
            alt={name}
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;

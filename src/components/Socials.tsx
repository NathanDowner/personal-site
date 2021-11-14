import github from '../assets/icons/github-icon.svg';
import instagram from '../assets/icons/instagram-icon.svg';
import twitter from '../assets/icons/twitter-icon.svg';
import linkedIn from '../assets/icons/linkedin-icon.svg';

const Socials = () => {
  return (
    <div className="flex space-x-2">
      <img src={github} className="h-7 w-7" alt="Github Icon" />
      <img src={instagram} className="h-7 w-7" alt="Github Icon" />
      <img src={twitter} className="h-7 w-7" alt="Github Icon" />
      <img src={linkedIn} className="h-7 w-7" alt="Github Icon" />
    </div>
  );
};

export default Socials;

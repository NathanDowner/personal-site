import github from '../assets/icons/github-icon.svg';
import instagram from '../assets/icons/instagram-icon.svg';
import twitter from '../assets/icons/twitter-icon.svg';
import linkedIn from '../assets/icons/linkedin-icon.svg';

const Landing = () => {
  return (
    <section className="relative h-screen -mt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-landing-img background-clip bg-cover  bg-right-4 bg-no-repeat" />

      <div className="max-w-screen-xl mx-auto">
        <div className="absolute z-30 top-1/2 pl-5 transform -translate-y-1/2">
          <h3 className="font-mono text-xl">Hi there</h3>
          <h1 className="text-6xl font-bold">I'm Nathan Downer</h1>
          <h2 className="text-xl">
            A Software Engineer who loves{' '}
            <span className="font-bold">
              Frontend <br /> Development
            </span>
          </h2>

          {/* Buttons */}
          <div className="flex space-x-4 my-6">
            <a className="bg-red rounded-full px-3 py-2" href="/">
              Contact Me
            </a>
            <a
              className="border-light border-2 rounded-full px-3 py-2"
              href="/"
            >
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div className="flex space-x-2">
            <img src={github} className="h-7 w-7" alt="Github Icon" />
            <img src={instagram} className="h-7 w-7" alt="Github Icon" />
            <img src={twitter} className="h-7 w-7" alt="Github Icon" />
            <img src={linkedIn} className="h-7 w-7" alt="Github Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

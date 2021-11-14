import Socials from './Socials';

const Landing = () => {
  return (
    <section className="relative h-screen -mt-20">
      <div className="absolute right-0 w-2/3 h-full bg-landing-img background-clip bg-cover bg-right bg-no-repeat" />

      <div className="mx-auto max-w-screen-2xl">
        <div className="absolute z-30 top-1/2 pl-5 transform -translate-y-1/2">
          <h3 className="font-mono text-xl">Hi there</h3>
          <h1 className="text-6xl font-bold my-2">I'm Nathan Downer</h1>
          <h2 className="text-2xl">
            A Software Engineer who loves{' '}
            <span className="font-bold">
              Frontend <br /> Development
            </span>
          </h2>

          {/* Buttons */}
          <div className="flex items-center space-x-4 my-6">
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

          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Landing;

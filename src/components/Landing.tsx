import Socials from './Socials';

const Landing = () => {
  return (
    // Will generate a background-position utility
    <section className="relative -mt-20 h-screen overflow-hidden px-8">
      <div className="absolute right-0 -mr-5 h-2/3 w-full bg-landing-img bg-cover bg-[position:70%_50%] bg-no-repeat max-sm:left-0  md:bg-center lg:h-full lg:w-2/3 lg:[clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]" />

      <div className="max-w-screen-2x relative mx-auto h-full text-center lg:text-left">
        <div className="absolute bottom-0 flex h-[60%] w-full flex-col items-center justify-between border-2 border-light pb-6 lg:static lg:h-full lg:items-start lg:justify-center">
          {/* Text */}
          <div>
            <h3 className="small-tags font-mono text-base lg:text-xl">
              Hi there
            </h3>
            <h1 className="my-2 text-4xl font-bold lg:text-6xl">
              I'm Nathan Downer
            </h1>
            <h2 className="text-lg font-thin lg:text-2xl">
              A Software Engineer who loves{' '}
              <span className="font-bold">
                Frontend <br className="hidden lg:block" /> Development
              </span>
            </h2>
          </div>

          {/* Buttons */}
          <div className="my-6 flex flex-col items-center space-y-6 text-lg lg:flex-row lg:space-y-0 lg:space-x-4">
            <a
              className="red-btn-glow w-[min(300px,80vw)] rounded-lg bg-red px-3 py-2 lg:w-auto"
              href="/"
            >
              Contact Me
            </a>
            <a
              className=" relative w-[min(300px,80vw)] overflow-hidden rounded-lg border-2 border-light px-3 py-2 transition-colors ease-in-out before:absolute before:inset-0 before:z-[-1] before:origin-left before:bg-light before:transition-all before:duration-500 before:ease-in-out before:[clip-path:circle(0%_at_0%_50%)] hover:text-red before:hover:[clip-path:circle(200%)] lg:w-auto"
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

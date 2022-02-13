import Socials from './Socials';

const Landing = () => {
  return (
    <section className="relative -mt-20 h-screen overflow-hidden px-8">
      <div className="background-clip absolute right-0 -mr-5 h-full w-2/3 bg-landing-img bg-cover bg-right bg-no-repeat" />

      <div className="mx-auto max-w-screen-2xl">
        <div className="absolute top-1/2 z-30 -translate-y-1/2 transform">
          <h3 className="small-tags font-mono text-xl">Hi there</h3>
          <h1 className="my-2 text-6xl font-bold">I'm Nathan Downer</h1>
          <h2 className="text-2xl font-thin">
            A Software Engineer who loves{' '}
            <span className="font-bold">
              Frontend <br /> Development
            </span>
          </h2>

          {/* Buttons */}
          <div className="my-6 flex items-center space-x-4 text-lg">
            <a className="red-btn-glow rounded-lg bg-red px-3 py-2" href="/">
              Contact Me
            </a>
            <a
              className="relative overflow-hidden rounded-lg border-2 border-light px-3 py-2 transition-colors ease-in-out before:absolute before:inset-0 before:z-[-1] before:origin-left before:bg-light before:transition-all before:duration-500 before:ease-in-out before:[clip-path:circle(0%_at_0%_50%)] hover:text-red before:hover:[clip-path:circle(200%)]"
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

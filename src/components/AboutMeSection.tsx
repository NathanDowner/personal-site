import FullPageSection from './layout/FullPageSection';
import SectionTitle from './layout/SectionTitle';
import portrait from '../assets/portrait.jpeg';

const AboutMeSection = () => {
  return (
    <FullPageSection id="about" watermarkText="About Me">
      <SectionTitle title="Who Am I?" />
      <div className="grid items-center lg:grid-cols-2">
        <div className="relative mb-16 place-self-center before:absolute before:inset-0 before:-translate-x-3 before:translate-y-3 before:rounded-lg before:border-2 before:border-red before:transition-transform before:ease-in-out before:hover:-translate-x-1 before:hover:translate-y-1 md:mb-24">
          <img
            src={portrait}
            className="relative h-60 w-[auto] rounded-lg md:h-72 lg:h-[402px]"
            alt="portrait of Nathan Downer"
          />
        </div>
        <div className="max-w-prose space-y-3">
          <p className="indent-8">
            I'm Nathan, and I take pleasure in building things that both solve
            problems and that people want to use. I developed a knack for
            building at an early age. Thanks to the numerous lego sets that my
            parents and other relatives gave me, I had amassed containers worth
            of the little building blocks, and found myself building numerous
            things that weren't in the instruction books. That love for building
            transitioned into architecture for a time during high-school when I
            thought that's what I wanted to do, but it wasn't until right before
            university that I decided to give software development a try.
          </p>
          <p className="indent-8">
            In a talk at my high-school I was inspired by the story of a young
            lady who, changed her major to software engineering after her first
            year. Like myself, she figured a career in actuarial science
            might've been a good fit for her because of a love and inclination
            towards math and business. Her first year was enough to convince her
            otherwise and she ended up trying software engineering and falling
            in love with it. Her story was just enough to pique my curiosity and
            caused me to eventually make the switch to computer science two
            weeks before the semester was to start.
          </p>
          <p className="indent-8">
            I didn't take any IT classes past my 3rd year of high-school and
            didn't do Computer Science at the C.A.P.E level, so I dug in and
            gave it my all when I started, knowing I had a lot of ground to
            cover, but I quickly fell in love with the craft. From writing my
            first for loop to solving hackerrank problems in class and
            eventually and eventually working on a Progressive Web App for my
            university's "Research Days" event, it all felt so gratifying. It
            felt right, and I then realised that my long time desire to build
            was being satisfied, and even better, it was just like Lego! I saw
            programming languages and frameworks like the various lego pieces,
            in that once you had the right ones, you were only limited by your
            imagination in terms of what you create. So today I continue to
            learn new trends and "acquire new pieces" so that I can build, with
            excellence, software that will solve problems and make life easier.
          </p>
        </div>
      </div>
    </FullPageSection>
  );
};

export default AboutMeSection;

import Socials from './Socials';
import { motion } from 'framer-motion';
import { AnimationObject, AnimationProps } from '../models/motion.model';

const variants: AnimationProps['variants'] = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.5,
    },
  },
};

const textVariants: AnimationProps['variants'] = {
  hidden: { ...variants.hidden },
  visible: { ...variants.visible, transition: {} },
};

const motionAnim: AnimationObject = {
  image: {
    animate: { translateX: 0, opacity: 1 },
    initial: { translateX: '10%', opacity: 0 },
    transition: { delay: 0.5, duration: 1, ease: 'easeOut' },
  },
  cta: { variants, initial: 'hidden', animate: 'visible' },
  ctaText: { variants: textVariants },
};

const Landing = () => {
  return (
    <section
      id="home"
      className="relative -mt-[72px] h-screen overflow-hidden px-8"
    >
      <motion.div
        {...motionAnim.image}
        className="absolute right-0 -mr-5 h-2/3 w-full bg-landing-img bg-cover bg-[position:70%_50%] bg-no-repeat after:absolute after:inset-0 max-sm:left-0 after:max-sm:bg-gradient-to-t after:max-sm:from-bg-blue md:bg-center  lg:h-full lg:w-2/3 lg:[clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)] lg:after:hidden"
      />

      <div className="relative mx-auto h-full max-w-screen-2xl text-center lg:text-left">
        <motion.div
          {...motionAnim.cta}
          className="absolute  bottom-0 flex h-[60%] w-full flex-col items-center justify-between pb-6 lg:static lg:h-full lg:w-1/2 lg:items-start lg:justify-center"
        >
          {/* Text */}
          <div>
            <motion.h3
              {...motionAnim.ctaText}
              className="small-tags font-mono text-base lg:text-xl"
            >
              Hi there
            </motion.h3>
            <motion.h1
              {...motionAnim.ctaText}
              className="my-2 text-4xl font-bold lg:text-6xl"
            >
              I'm Nathan Downer
            </motion.h1>
            <motion.h2
              {...motionAnim.ctaText}
              className="text-lg font-thin lg:text-2xl"
            >
              A Software Engineer who loves{' '}
              <span className="font-bold">
                Frontend <br className="hidden lg:block" /> Development
              </span>
            </motion.h2>
          </div>

          {/* Buttons */}
          <motion.div
            {...motionAnim.ctaText}
            className="my-6 flex flex-col items-center space-y-6 text-lg lg:flex-row lg:space-y-0 lg:space-x-4"
          >
            <a
              className="red-btn-glow w-[min(300px,80vw)] rounded-lg bg-red px-3 py-2 lg:w-auto"
              href="#contact"
            >
              Contact Me
            </a>
            <a
              className=" relative w-[min(300px,80vw)] overflow-hidden rounded-lg border-2 border-light px-3 py-2 transition-colors ease-in-out before:absolute before:inset-0 before:z-[-1] before:origin-left before:bg-light before:transition-all before:duration-500 before:ease-in-out before:[clip-path:circle(0%_at_0%_50%)] hover:text-red before:hover:[clip-path:circle(200%)] lg:w-auto"
              href="#projects"
            >
              View Projects
            </a>
          </motion.div>

          <Socials />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

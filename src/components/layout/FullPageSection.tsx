import { motion } from 'framer-motion';
import { AnimationObject } from '../../models/motion.model';

type Props = {
  watermarkText: string;

  id?: string;
};

const animations: AnimationObject = {
  content: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
    },
    viewport: { once: true, amount: 0.2 },
  },
};

const FullPageSection: React.FC<Props> = ({
  watermarkText,
  id = '',
  children,
}) => {
  return (
    <section id={id} className="relative overflow-hidden py-20 px-8">
      <span className="absolute -left-12 z-0 select-none text-7xl font-extrabold leading-tight text-overlay opacity-20 md:text-[100px] lg:text-[180px]">
        {watermarkText}
      </span>
      <motion.div
        {...animations.content}
        className="z-10 flex min-h-screen flex-col items-center justify-center"
      >
        {children}
      </motion.div>
      <span className="absolute bottom-0 -right-12 z-0 select-none text-7xl font-extrabold leading-tight text-overlay opacity-20 md:text-[100px] lg:text-[180px]">
        {watermarkText}
      </span>
    </section>
  );
};

export default FullPageSection;

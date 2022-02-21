import { motion } from 'framer-motion';
import { AnimationObject } from '../../models/motion.model';

const animations: AnimationObject = {
  title: {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
    },
    viewport: { once: true, amount: 1 },
  },
};

type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <motion.h1
      {...animations.title}
      className="section-header relative z-10 mb-20 text-center font-mono text-xl md:text-3xl"
    >
      {title}
    </motion.h1>
  );
};

export default SectionTitle;

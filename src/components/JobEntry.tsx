import { motion } from 'framer-motion';
import { Job } from '../models/job.model';
import { AnimationObject } from '../models/motion.model';

const animations: AnimationObject = {
  content: {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
    viewport: { once: true, amount: 0.5 },
  },
};

type JobEntryProps = {
  job: Job;
};

const JobEntry = ({ job }: JobEntryProps) => {
  return (
    <motion.li
      {...animations.content}
      className="md:odd:reversed grid grid-cols-[auto_1fr] items-center gap-6 md:grid-cols-[1fr_auto_1fr]"
    >
      {/* Date */}
      <p className="hidden justify-self-end md:inline-block">{job.tenure}</p>

      {/* Blip */}
      <div className="work-blip relative h-4 w-4 rounded-full bg-red" />

      {/* Card */}
      <div>
        <p className="mb-2 mt-4 text-lg font-semibold md:hidden">
          {job.tenure}
        </p>
        <div className="not-reversed relative inline-block max-w-[500px] rounded-xl bg-card-bg p-6 shadow-md">
          <h3 className="text-xl font-bold text-red">{job.title}</h3>
          <h4 className="text-lg font-medium">{job.company}</h4>
          <ul className="ml-6 list-disc text-sm">
            {job.notes.map((note) => (
              <li key={note} className="mb-1">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.li>
  );
};

export default JobEntry;

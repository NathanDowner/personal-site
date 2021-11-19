type Props = {
  isReversed: boolean;
};

const JobEntry = ({ isReversed }: Props) => {
  return (
    <li
      className={`${
        isReversed && 'reversed'
      } grid grid-cols-job-entry gap-6 items-center`}
    >
      <p className="justify-self-end">Jan - Feb 2021</p>
      <div className="work-blip relative rounded-full h-4 w-4 bg-red" />
      <div className="relative not-reversed p-6 bg-card-bg inline-block rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-red">Software Engineer</h3>
        <h4 className="text-xl font-medium">Speur Professional Services</h4>
        <ul className="text-sm list-disc ml-6">
          <li>Web and Mobile App Development</li>
          <li>Backend API Development</li>
          <li>Backend API Development</li>
        </ul>
      </div>
    </li>
  );
};

export default JobEntry;
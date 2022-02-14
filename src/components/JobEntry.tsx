const JobEntry = () => {
  return (
    <li className="md:odd:reversed grid grid-cols-[auto_1fr] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
      {/* Date */}
      <p className="hidden justify-self-end md:inline-block">Jan - Feb 2021</p>

      {/* Blip */}
      <div className="work-blip relative h-4 w-4 rounded-full bg-red" />

      {/* Card */}
      <div>
        <p className="mb-2 mt-4 text-lg font-semibold md:hidden">
          Jan - Feb 2021
        </p>
        <div className="not-reversed relative inline-block rounded-xl bg-card-bg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-red">Software Engineer</h3>
          <h4 className="text-lg font-medium">Speur Professional Services</h4>
          <ul className="ml-6 list-disc text-sm">
            <li>Web and Mobile App Development</li>
            <li>Backend API Development</li>
            <li>Backend API Development</li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default JobEntry;

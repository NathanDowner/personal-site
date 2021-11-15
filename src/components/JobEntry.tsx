const JobEntry = () => {
  return (
    <div className="relative p-6 bg-card-bg inline-block rounded-lg shadow-md">
      <div className="work-blip absolute z-10 top-1/2 transform -translate-y-1/2 -left-8 rounded-full h-4 w-4 bg-red" />
      <h3 className="text-2xl font-bold text-red">Software Engineer</h3>
      <h4 className="text-xl font-medium">Speur Professional Services</h4>
      <ul className="text-sm list-disc ml-6">
        <li>Web and Mobile App Development</li>
        <li>Backend API Development</li>
        <li>Backend API Development</li>
      </ul>
    </div>
  );
};

export default JobEntry;

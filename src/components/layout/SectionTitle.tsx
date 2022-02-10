type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <h1 className=" z-10 relative mb-20 section-header font-mono text-3xl text-center">
      {title}
    </h1>
  );
};

export default SectionTitle;

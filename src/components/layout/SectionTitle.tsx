type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <h1 className=" section-header relative z-10 mb-20 text-center font-mono text-3xl">
      {title}
    </h1>
  );
};

export default SectionTitle;

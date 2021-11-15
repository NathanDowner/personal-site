type Props = {
  title: string;
  watermarkText: string;
};

const FullPageSection: React.FC<Props> = ({
  title,
  watermarkText,
  children,
}) => {
  return (
    <section className="min-h-screen py-20">
      <h1 className=" z-10 relative section-header font-mono text-3xl text-center">
        {title}
      </h1>
      <h2 className="absolute z-0 select-none leading-tight font-extrabold text-huge opacity-20 text-overlay">
        {watermarkText}
      </h2>
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
};

export default FullPageSection;

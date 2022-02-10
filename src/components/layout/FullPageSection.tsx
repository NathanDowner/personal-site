type Props = {
  watermarkText: string;
};

const FullPageSection: React.FC<Props> = ({ watermarkText, children }) => {
  return (
    <section className="min-h-screen relative border-2 border-red py-20">
      <h2 className="absolute z-0 select-none leading-tight font-extrabold text-[180px] opacity-20 text-overlay">
        {watermarkText}
      </h2>
      <div className="z-10 h-full grid place-content-center border-2 border-project-link-bg">
        {children}
      </div>
    </section>
  );
};

export default FullPageSection;

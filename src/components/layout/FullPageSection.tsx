type Props = {
  watermarkText: string;
};

const FullPageSection: React.FC<Props> = ({ watermarkText, children }) => {
  return (
    <section className="relative min-h-screen border-2 border-red py-20">
      <h2 className="absolute z-0 select-none text-[180px] font-extrabold leading-tight text-overlay opacity-20">
        {watermarkText}
      </h2>
      <div className="z-10 grid h-full place-content-center border-2 border-project-link-bg">
        {children}
      </div>
    </section>
  );
};

export default FullPageSection;

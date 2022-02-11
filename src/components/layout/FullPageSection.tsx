type Props = {
  watermarkText: string;
};

const FullPageSection: React.FC<Props> = ({ watermarkText, children }) => {
  return (
    <section className="relative py-20">
      <span className="absolute -left-12 z-0 select-none text-[180px] font-extrabold leading-tight text-overlay opacity-20">
        {watermarkText}
      </span>
      <div className="z-10 grid min-h-screen place-content-center">
        {children}
      </div>
      <span className="absolute bottom-0 -right-12 z-0 select-none text-[180px] font-extrabold leading-tight text-overlay opacity-20">
        {watermarkText}
      </span>
    </section>
  );
};

export default FullPageSection;

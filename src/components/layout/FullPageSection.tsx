type Props = {
  watermarkText: string;
  id?: string;
};

const FullPageSection: React.FC<Props> = ({
  watermarkText,
  id = '',
  children,
}) => {
  return (
    <section id={id} className="relative overflow-hidden py-20 px-8">
      <span className="absolute -left-12 z-0 select-none text-7xl font-extrabold leading-tight text-overlay opacity-20 md:text-[100px] lg:text-[180px]">
        {watermarkText}
      </span>
      <div className="z-10 grid min-h-screen place-content-center">
        {children}
      </div>
      <span className="absolute bottom-0 -right-12 z-0 select-none text-7xl font-extrabold leading-tight text-overlay opacity-20 md:text-[100px] lg:text-[180px]">
        {watermarkText}
      </span>
    </section>
  );
};

export default FullPageSection;

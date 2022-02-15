import React from 'react';

type FrameworkCardProps = {
  name: string;
  icon: string;
};

const FrameworkCard = ({ name, icon }: FrameworkCardProps) => {
  return (
    <div
      key={name}
      className="text-md flex shrink-0 items-center space-x-2 text-xl font-medium md:space-x-8 md:text-2xl"
    >
      <img src={icon} className="h-auto max-sm:w-12" alt={name + ' logo'} />{' '}
      <p>{name}</p>
    </div>
  );
};

export default FrameworkCard;

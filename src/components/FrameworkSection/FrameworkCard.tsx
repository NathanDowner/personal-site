import React from 'react';

type FrameworkCardProps = {
  name: string;
  icon: string;
};

const FrameworkCard = ({ name, icon }: FrameworkCardProps) => {
  return (
    <div
      key={name}
      className="flex shrink-0 items-center space-x-8 text-2xl font-medium"
    >
      <img src={icon} alt={name + ' logo'} /> <p>{name}</p>
    </div>
  );
};

export default FrameworkCard;

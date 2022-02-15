import React from 'react';

type CarouselButtonProps = {
  label: 'Prev' | 'Next';
  icon: string;
  onClick: () => void;
};

const CarouselButton = ({ label, icon, onClick }: CarouselButtonProps) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      onClick={onClick}
    >
      <img
        src={icon}
        alt={`${label === 'Prev' ? 'previous' : 'next'} button`}
      />
      <span>{label}</span>
    </div>
  );
};

export default CarouselButton;

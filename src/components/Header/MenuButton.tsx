import React from 'react';

type MenuButtonProps = {
  onClick: () => void;
};
const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <div
      className="group flex cursor-pointer flex-col space-y-1 xl:hidden"
      onClick={onClick}
    >
      <span className="relative h-[3px] w-4 self-end bg-light before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-red before:transition-transform before:ease-in-out group-hover:before:scale-x-100"></span>
      <span className="h-[3px] w-8 bg-light"></span>
      <span className="relative h-[3px] w-4 bg-light before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-red before:transition-transform before:ease-in-out group-hover:before:scale-x-100"></span>
    </div>
  );
};

export default MenuButton;

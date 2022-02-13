import { Transition } from '@headlessui/react';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

type SideMenuProps = {
  onClose: () => void;
  isOpen: boolean;
};
const SideMenu = ({ onClose, isOpen }: SideMenuProps) => {
  return (
    <Transition show={isOpen}>
      <Transition.Child
        enter="transition-opacity duration-300"
        leave="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={onClose}
          className={` absolute top-0 left-0 z-40 h-full w-full backdrop-blur-sm transition-transform duration-300 ease-in-out`}
        />
      </Transition.Child>
      <Transition.Child
        enter="transition-transform ease-in-out duration-500"
        leave="transition-transform ease-in-out duration-500"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <aside
          className={` fixed right-0 top-0 bottom-0 z-50 grid w-[min(75vw,400px)] place-items-center  bg-card-bg transition-transform duration-300 ease-in-out`}
        >
          <nav className="text-center text-lg">
            <ul className=" mb-12 space-y-4">
              {navLinks.map((link) => (
                <li className="rounded-md py-2 hover:bg-overlay/30" key={link}>
                  {link}
                </li>
              ))}
            </ul>
            <button className="red-btn-glow rounded-md bg-red px-10 py-3">
              Resume
            </button>
          </nav>
        </aside>
      </Transition.Child>
    </Transition>
  );
};

export default SideMenu;

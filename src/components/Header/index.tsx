import { useEffect, useState } from 'react';
import logo from '../../assets/Logo.svg';
import MenuButton from './MenuButton';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

type HeaderProps = {
  onToggleMenu: () => void;
};
const Header = ({ onToggleMenu }: HeaderProps) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setIsScrollingDown(false);
      } else {
        setIsScrollingDown(true);
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 ${
        isScrollingDown && '-translate-y-full'
      } z-[60] bg-bg-blue bg-opacity-70 py-5 px-8 shadow-xl backdrop-blur-md transition-transform duration-300`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center">
        <img src={logo} className="h-8" alt="Logo" />
        <nav className="hidden grow md:flex">
          <ul className="ml-auto mr-auto flex items-center space-x-8  lg:mr-8">
            <li>
              <a
                className="nav-link transition-all ease-in hover:text-red"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link transition-all ease-in hover:text-red"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link transition-all ease-in hover:text-red"
                href="#work"
              >
                Work
              </a>
            </li>
            <li>
              <a
                className="nav-link transition-all ease-in hover:text-red"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="nav-link transition-all ease-in hover:text-red"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href=" https://drive.google.com/drive/folders/1x4FdgIpcFmgmSKtRP9FndU1bokR3XZ2y?usp=sharing"
            target="_blank"
            className="red-btn-glow rounded-md bg-red px-2 py-1"
          >
            Resume
          </a>
        </nav>
        <MenuButton onClick={onToggleMenu} />
      </div>
    </header>
  );
};

export default Header;

import logo from '../../assets/Logo.svg';
import MenuButton from './MenuButton';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

type HeaderProps = {
  onToggleMenu: () => void;
};
const Header = ({ onToggleMenu }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-[60] bg-bg-blue bg-opacity-70 py-5 px-8 shadow-xl backdrop-blur-md">
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
          <button className="red-btn-glow rounded-md bg-red px-2 py-1">
            Resume
          </button>
        </nav>
        <MenuButton onClick={onToggleMenu} />
      </div>
    </header>
  );
};

export default Header;

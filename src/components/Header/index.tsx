import logo from '../../assets/Logo.svg';
import MenuButton from './MenuButton';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

type HeaderProps = {
  onToggleMenu: () => void;
};
const Header = ({ onToggleMenu }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-[60] bg-bg-blue bg-opacity-70 py-5 px-8 shadow-xl backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <img src={logo} className="h-8" alt="Logo" />
        <nav className="hidden xl:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  className="nav-link transition-all ease-in hover:text-red"
                  href={'#' + link.toLowerCase()}
                >
                  {link}
                </a>
              </li>
            ))}

            <li>
              <button className="red-btn-glow rounded-md bg-red px-2 py-1">
                Resume
              </button>
            </li>
          </ul>
        </nav>

        <MenuButton onClick={onToggleMenu} />
      </div>
    </header>
  );
};

export default Header;
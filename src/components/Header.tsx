import logo from '../assets/Logo.svg';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg-blue bg-opacity-70 py-5 px-5 shadow-xl backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <img src={logo} className="h-8" alt="Logo" />
        <nav>
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a className="nav-link" href={'/' + link.toLowerCase()}>
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
      </div>
    </header>
  );
};

export default Header;

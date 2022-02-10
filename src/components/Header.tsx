import logo from '../assets/Logo.svg';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

const Header = () => {
  return (
    <header className="sticky z-50 top-0 py-5 px-5 shadow-xl">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <img src={logo} className="h-8" alt="Logo" />
        <nav>
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a className="nav-link" href="/">
                  {link}
                </a>
              </li>
            ))}

            <li>
              <button className="px-2 py-1 rounded-md bg-red">Resume</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

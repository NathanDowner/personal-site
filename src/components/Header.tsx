import logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header className="sticky z-30 top-0 max-w-screen-2xl mx-auto flex items-center justify-between py-5 px-5 ">
      <img src={logo} className="h-8" alt="Logo" />
      <nav>
        <ul className="flex items-center space-x-8">
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Work
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Experience
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
          <li>
            <button className="px-2 py-1 rounded-md bg-red">Resume</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

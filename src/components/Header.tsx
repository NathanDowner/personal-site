import logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <header className="sticky z-10 top-0 max-w-screen-xl mx-auto flex items-center justify-between py-5 px-5 ">
      <img src={logo} alt="Logo" />
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Contact</a>
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

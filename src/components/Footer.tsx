import logo from '../assets/Logo.svg';
import mail from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import jaFlag from '../assets/icons/jamaica-flag.svg';
import Socials from './Socials';
const Footer = () => {
  return (
    <div className="bg-container-bg px-5 py-10">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-36">
          <div>
            <img src={logo} className="mb-2 h-8" alt="Logo" />
            <p className="mb-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              morbi elit enim nulla. Amet morbi elit enim nulla.
            </p>
            <Socials />
          </div>

          <section>
            <h2 className="footer-heading">Contact Info</h2>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center space-x-2">
                <img src={phone} className="h-4" alt="Phone icon" />
                <span>+1 (876) 770-5067</span>
              </li>
              <li>
                <a
                  href="mailto:nathandowner123@gmail.com"
                  className="inline-flex items-center space-x-2"
                >
                  <img src={mail} className="h-4" alt="Email icon" />
                  <span className="footer-link underline underline-offset-2">
                    nathandowner123@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <img src={jaFlag} className="h-4" alt="Jamaican Flag icon" />
                <span>Kingston, Jamaica</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="footer-heading">Links</h2>
            <ul className="mt-2 space-y-1 underline underline-offset-2">
              <li className="footer-link">
                <a href="#about">About</a>
              </li>
              <li className="footer-link">
                <a href="#work">Work</a>
              </li>
              <li className="footer-link">
                <a href="#projects">Projects</a>
              </li>
              <li className="footer-link">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </section>
        </div>

        <hr className="my-4" />
        <p className="">&copy; 2021 Nathan Downer</p>
      </div>
    </div>
  );
};

export default Footer;

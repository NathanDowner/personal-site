import logo from '../assets/Logo.svg';
import mail from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import jaFlag from '../assets/icons/jamaica-flag.svg';
import Socials from './Socials';
const Footer = () => {
  return (
    <div className="px-5 py-10 bg-container-bg">
      <div className="mx-auto max-w-screen-2xl">
        <img src={logo} className="h-8 mb-2" alt="Logo" />

        <div className="grid grid-cols-3 gap-36">
          <div>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              morbi elit enim nulla. Amet morbi elit enim nulla.
            </p>
            <Socials />
          </div>

          <section>
            <h2 className="footer-heading">Contact Info</h2>
            <ul className="text-xs space-y-1 mt-2">
              <li className="flex items-center space-x-2">
                <img src={phone} className="h-4" alt="Phone icon" />
                <span>+1 (876) 770-5067</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={mail} className="h-4" alt="Email icon" />
                <a href="mailto:nathandowner123@gmail.com">
                  nathandowner123@gmail.com
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
            <ul className="text-xs space-y-1 mt-2">
              <li>About</li>
              <li>Work</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
          </section>
        </div>

        <hr className="my-4" />
        <p className="text-xs">&copy; 2021 Nathan Downer</p>
      </div>
    </div>
  );
};

export default Footer;

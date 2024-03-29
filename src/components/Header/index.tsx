import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../../assets/Logo.svg';
import { AnimationObject, AnimationProps } from '../../models/motion.model';
import MenuButton from './MenuButton';

const navLinks: string[] = ['Home', 'About', 'Work', 'Projects', 'Contact'];

type HeaderProps = {
  onToggleMenu: () => void;
};

const variants: AnimationProps['variants'] = {
  hidden: { translateY: '-100%' },
  visible: {
    translateY: 0,
    transition: {
      delay: 0.5,
      ease: 'easeOut',
      delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
};

const links: AnimationProps['variants'] = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const motionAnim: AnimationObject = {
  nav: {
    initial: 'hidden',
    animate: 'visible',
    variants,
  },
  link: {
    variants: links,
  },
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
        isScrollingDown && '-top-[100%]'
      } z-[60] bg-bg-blue bg-opacity-70 py-5 px-8 shadow-xl backdrop-blur-md transition-all duration-500`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center">
        <img src={logo} className="h-8" alt="Logo" />
        <nav className="hidden grow md:flex">
          <motion.ul
            {...motionAnim.nav}
            className="ml-auto mr-auto flex items-center space-x-8  lg:mr-8"
          >
            {navLinks.map((link) => (
              <motion.li {...motionAnim.link} key={link}>
                <a
                  className="nav-link transition-all ease-in hover:text-red"
                  href={'#' + link.toLocaleLowerCase()}
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
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

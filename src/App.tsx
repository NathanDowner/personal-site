import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import './App.css';
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';
import FrameworksSection from './components/FrameworkSection';
import Header from './components/Header';
import SideMenu from './components/Header/SideMenu';
import Landing from './components/Landing';
import ProjectsSection from './components/ProjectSection';
import WorkSection from './components/WorkSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="bg-bg-blue text-light">
      <Header onToggleMenu={handleToggleMenu} />
      <SideMenu onClose={() => setIsMenuOpen(false)} isOpen={isMenuOpen} />
      <main>
        <Landing />
        <AboutMeSection />
        <WorkSection />
        <FrameworksSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

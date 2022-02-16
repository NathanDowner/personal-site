import { useEffect, useState } from 'react';
import './App.css';
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';
import FrameworksSection from './components/FrameworkSection';
import Header from './components/Header';
import SideMenu from './components/Header/SideMenu';
import Landing from './components/Landing';
import ProjectsSection from './components/ProjectSection';
import WorkSection from './components/WorkSection';
import { Job } from './models/job.model';
import { Project } from './models/project.model';

type ResumeData = {
  jobs: Job[];
  projects: Project[];
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>();
  useEffect(() => {
    (async () => {
      const data = await fetch('/resumeData.json');
      const json = await data.json();
      setResumeData(json);
    })();
  }, []);

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
        <WorkSection jobs={resumeData?.jobs} />
        <FrameworksSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

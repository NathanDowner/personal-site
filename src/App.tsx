import './App.css';
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';
import FrameworksSection from './components/FrameworkSection';
import Header from './components/Header';
import Landing from './components/Landing';
import ProjectsSection from './components/ProjectSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <div className="bg-bg-blue text-light">
      <Header />
      <main className="px-8">
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

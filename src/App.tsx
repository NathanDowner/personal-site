import './App.css';
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <div className="bg-bg-blue text-light">
      <Header />
      <main className="px-5">
        <Landing />
        <AboutMeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

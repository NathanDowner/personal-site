import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <div className="bg-bg-blue text-light">
      <Header />
      <Landing />
      <main className="pt-20 px-5"></main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Locations from './components/Locations';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Locations />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

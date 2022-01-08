import './App.css';
import Extensions from './components/Extensions/Extensions';
import FaqSection from './components/FaqSection/FaqSection';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Extensions />
      <FaqSection />
    </div>
  );
}

export default App;

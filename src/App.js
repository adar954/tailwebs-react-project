import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ImpactCounter from './Components/ImpactCounter';
import BoldApproaches from './Components/BoldApproaches';
import DigitSelection from './Components/DigitSelection';
import ProductGrid from './Components/ProductGrid';
import Supporters from './Components/Supporters';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImpactCounter />
      <BoldApproaches />
      <DigitSelection />
      <ProductGrid />
      <Supporters />
      <Footer />
    </>
  );
}

export default App;
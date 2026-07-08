import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Workflow from './components/Workflow';
import Capabilities from './components/Capabilities';
import UseCases from './components/UseCases';
import Delivery from './components/Delivery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans text-brand-black bg-white overflow-x-hidden selection:bg-brand-green/30 relative">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-blue origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <Products />
      <Workflow />
      <Capabilities />
      <Delivery />
      <About />
      <UseCases />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

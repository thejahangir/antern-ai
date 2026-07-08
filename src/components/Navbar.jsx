import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import LogoAnternAI from "../assets/antern-logo-ai.png";
import LiquidButton from "./LiquidButton";

const navLinks = ['Agents', 'Pipeline', 'Capabilities', 'Engagement', 'Expertise', 'Use Cases', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sectionIds = navLinks.map(link => link.replace(/\s+/g, '').toLowerCase());
      let current = '';
      
      // We look at all sections and find the one that is currently taking up the most relevant viewport space
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above the middle of the screen and bottom is below it
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = id;
          }
        }
      }
      
      // Fallback for top of page
      if (window.scrollY < 100) current = '';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'pt-4 md:pt-6 px-4' : 'pt-0 px-0'}`}
    >
      <div className={`w-full transition-all duration-500 flex justify-between items-center mx-auto ${
        isScrolled 
          ? 'max-w-6xl bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full py-3 px-6 md:px-8' 
          : 'max-w-7xl bg-transparent py-6 px-6'
      }`}>
        <div className="text-2xl font-bold tracking-tight text-brand-black shrink-0 flex items-center">
          <img 
            src={LogoAnternAI} 
            alt="AnternAI Logo"
            className={`transition-all duration-500 ${isScrolled ? 'w-10' : 'w-[60px]'}`} 
          />
        </div>
        
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const id = link.replace(/\s+/g, '').toLowerCase();
            const isActive = activeSection === id;
            
            return (
              <a 
                key={link} 
                href={`#${id}`}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-blue' : 'text-brand-black/70 hover:text-brand-black'
                }`}
              >
                {link}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-blue rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <LiquidButton liquidColor="bg-white/20" className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
          Book Demo
        </LiquidButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;

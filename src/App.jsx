import React, { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundBeams from "./components/BackgroundBeams";

// Preloader Component
const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-8xl font-black text-white tracking-tighter"
      >
        <Counter /> %
      </motion.div>
    </motion.div>
  );
};

// Simple Counter Logic
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20); // Speed of counter
    return () => clearInterval(interval);
  }, []);

  return <span>{count}</span>;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {loading ? (
           <Preloader key="preloader" />
        ) : (
          <>
            {/* New Vibrant Background */}
            <BackgroundBeams />

            {/* Main Wrapper - transparent to show beams */}
            <div className="bg-transparent min-h-screen w-full relative text-light selection:bg-cyan selection:text-black">
              <Navbar />
              <main className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 relative">
                <Hero />
                <About />
                <Experience />
                <Skills />
              </main>
              
              <div className="w-full z-20 relative">
                <Projects />
              </div>

              <main className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 relative">
                <Contact />
              </main>
            </div>
          </>
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const links = ["About", "Experience", "Skills", "Projects", "Contact"];
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // middle 20% of screen counts as "active"
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-6 md:px-12 backdrop-blur-md bg-primary/70 border-b border-white/5"
    >
      <a href="#" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
        PORTFOLIO<span className="text-accent">.</span>
      </a>

      <ul className="hidden md:flex gap-8">
        {links.map((link) => {
          const id = link.toLowerCase();
          const isActive = activeSection === id;

          return (
            <li key={link}>
              <a 
                href={`#${id}`}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? "text-accent" : "text-gray-400 hover:text-white"
                }`}
              >
                {link}

                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

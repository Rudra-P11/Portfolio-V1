import { motion } from "framer-motion";
import HeroGeometry from "./HeroGeometry";
import NeonHoverText from "./NeonHoverText"; 

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      
      {/* Left Side: Text Content */}
      <div className="z-10 w-full md:w-1/2 flex flex-col justify-center items-start">
        
        <NeonHoverText 
          text="Hi, I'm"
          delay={0}
          sizeClass="text-6xl md:text-9xl font-black tracking-tighter"
          fromColor="cyan"
          toColor="fuchsia"
          variant="glossy"
        />

        <NeonHoverText 
          text="RUDRA"
          delay={0.1}
          sizeClass="text-6xl md:text-9xl font-black tracking-tighter"
          fromColor="cyan"
          toColor="fuchsia"
          variant="glossy"
        />
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-lg border-l-2 border-accent pl-6"
        >
          Once an Engineer, Always an Engineer.
        </motion.p>
      </div>

      {/* Right Side: 3D Element */}
      <HeroGeometry />
      
    </section>
  );
};

export default Hero;
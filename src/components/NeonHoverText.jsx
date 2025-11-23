import { motion } from "framer-motion";

const NeonHoverText = ({ text, delay, sizeClass, fromColor, toColor, variant = "gradient" }) => {
  
  const fillTransition = {
    type: "spring",
    stiffness: 100,
    damping: 10,
    mass: 0.2
  };
  
  if (variant === "glossy") {
    return (
      <div className="overflow-visible">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: delay, ease: "circOut" }}
          whileHover="hovered"
          className={`relative inline-block cursor-pointer group leading-none ${sizeClass} glossy-text`}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.02 }}
          >
            {text}
          </motion.span>
        </motion.h1>
      </div>
    );
    
  }

  return (
    <div className="overflow-hidden">
      <motion.h1 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: delay, ease: "circOut" }}
        
        whileHover="hovered"
        className={`relative inline-block cursor-pointer group leading-none ${sizeClass}`}
      >
        <motion.div
          variants={{
            initial: { scaleY: 0.05, opacity: 0, y: "100%" },
            hovered: { scaleY: 1, opacity: 1, y: 0 },
          }}
          initial="initial"
          transition={fillTransition}
          
          className={`absolute inset-0 bg-gradient-to-r from-${fromColor} to-${toColor} origin-bottom z-10 
                      drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]`}
        />

        <motion.span
          variants={{
            initial: { color: 'transparent' },
            hovered: { 
            }
          }}
          initial="initial"
          className="relative z-20 neon-outline"
        >
          {text}
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default NeonHoverText;


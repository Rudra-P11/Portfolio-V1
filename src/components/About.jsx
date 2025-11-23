import { motion } from "framer-motion";

const RevealText = ({ text, className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
          >
            About Me
          </motion.h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
            <RevealText 
              text="Bachelors of Technology in Computer Science and Engineering,
              IIIT Dharwad."
            />
            <RevealText 
              text="A brain with a passion for Software Engineering and AI, I strive to blend my creativity with functionality in every project I undertake."
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[400px] bg-secondary rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative group"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <img 
            src="src\images\profilepic.png"
            //src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtqMnl0dWNkODNqMmVqYXFpM3Zmb2kxcjR1bnlja3dhd240aWxkdCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/Maslv9XBFXQMyFogjG/giphy.gif"
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl transform 
                    group-hover:scale-105 group-hover:brightness-110 
                    transition-all duration-700 ease-out"
            />
           
        </motion.div>
      </div>
    </section>
  );
};

export default About;
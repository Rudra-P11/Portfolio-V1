import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import MagneticButton from "./MagneticButton"; 
import NeonHoverText from "./NeonHoverText";

const links = [
  "https://github.com/Rudra-P11",
  "https://twitter.com",
  "https://www.linkedin.com/in/rudrap11",
  "mailto:pandyarudra2@gmail.com"
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 min-h-[60vh] flex items-center justify-center">
      <div className="w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          
          <NeonHoverText
            text="Reach out to me!"
            delay={0}
            sizeClass="text-6xl md:text-9xl font-black tracking-tighter"
            fromColor="fuchsia"
            toColor="cyan"
            variant="glossy"
          />
        </motion.div>


        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 text-xl mb-12 max-w-lg mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and ideas.
          </p>

          <a href="mailto:pandyarudra2@gmail.com">
            <MagneticButton className="inline-flex items-center gap-3 px-8 py-4 bg-gray-600 text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
              Send me an email <FiArrowUpRight />
            </MagneticButton>
          </a>
        </motion.div>

        <div className="flex gap-8 mt-20">
            {[FiGithub, FiTwitter, FiLinkedin, FiMail].map((Icon, i) => (
              <a key={i} href={links[i]} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-accent hover:scale-110 transition-all">
                <Icon />
              </a>
            ))}
        </div>
        
        <footer className="mt-20 text-gray-600 text-sm">
            © Rudra Pandya.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
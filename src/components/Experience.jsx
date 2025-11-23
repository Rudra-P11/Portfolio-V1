import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "ICONIC AI",
    role: "Software Intern - AI",
    period: "June 2025 - Aug 2025",
    description: "Worked on the development of a real-time Machine Learning based productivity tool to enhance user efficiency and workflow.",
    img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzVlYjlpeGpqZXVnaGdnNTUxOWQ2b3R1N2V0M3U2Y2RlYnU4MzZleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4FkC2VqpeNRHjTDQ5/giphy.gif"
  },
  {
    id: 2,
    company: "Creative Lead",
    role: "Google Developers Group, IIIT Dharwad",
    period: "Jul 2024 - May 2025",
    description: "Worked with various Google technologies to create engaging content and workshops for the developer community at IIIT Dharwad.",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY201M3pzZjk1aTdjZjhweWRlN3VlNnNxaXZ3OWl4ZW9hZW9sOG5nbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5NPhdqmyRxn8I/giphy.gif"
  },
  {
    id: 3,
    company: "Creative Lead",
    role: "Microsoft Student Ambassador, IIIT Dharwad",
    period: "2024 - 2025",
    description: "Leaded the creative team at MSA club to organize events and workshops related to Microsoft products and services.",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXpjZ2V2enpvMnk4bHNvOWhldjFsanZxZzhzdzIzZXg3eXVqcjB6bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YnexM9LwlwGu4Z1QnS/giphy.gif"
  }
];

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="py-20 relative min-h-[80vh]">
      
      {/* Background Image Container - Fixed position relative to section */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20 md:opacity-30">
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="w-[80%] h-[60%] rounded-3xl overflow-hidden"
            >
              <img 
                src={experiences[hoveredIndex].img} 
                alt="Experience context" 
                className="w-full h-full object-cover hover:grayscale-0 transition-all"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
        >
          Experience
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 border-b border-white/10 hover:border-white/30 transition-colors cursor-pointer bg-primary/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-400 mt-1">{exp.role}</p>
                </div>
                <span className="text-sm font-mono text-gray-500">{exp.period}</span>
              </div>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredIndex === index ? "auto" : 0,
                  opacity: hoveredIndex === index ? 1 : 0 
                }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
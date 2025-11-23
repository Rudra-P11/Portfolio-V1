import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import GlowingCard from "./GlowingCard"; // Import the new wrapper

const projects = [
  {
    id: 1,
    title: "AI Code Editor– AI-Powered Web IDE",
    tech: "React, Next.js, TailwindCSS, OpenAI API, GenAI, WebContainers, MongoDB",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjdyeGhweW51aThwaGE1ZWExdjJhbTMwZjE4dDV6MHZ6OWdxanhodiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JQpH25Y6TrRQwtF0KY/giphy.gif",
    description: "A full-stack browser-based IDE with real-time execution integrated with LLM suggestions.",
    github: "https://github.com/Rudra-P11/AI-Code-Editor",
  },
  {
    id: 2,
    title: "DSA Problem Search Engine",
    tech: "Node.js, Express, Puppeteer, TF–IDF, MongoDB",
    img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXg3NGQ0ZHA3ZW56aXdhZzgzd3N4NmpoaDM2eGg1NDg5NXQ1YWdvdSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/l0Iyh4c6WsOudrs7C/giphy.gif",
    description: "A search engine that uses TF-IDF and Puppeteer to scrape DSA problems from LeetCode & Codeforces.",
    github: "https://github.com/Rudra-P11/DSA-Search-Engine",
  },
  {
    id: 3,
    title: "NetSense",
    tech: "Python, Scapy, Npcap, Tkinter",
    img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dHlsbW5oYnIydWVzMmJhM3d6MDZuZ3JndTJ0NHdvY3R3MWN6dWQ0eiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/eHR6vXt6p7Wcj840fD/giphy.gif",
    description: "A smart ML-based network monitoring tool that classifies visited websites in real time.",
    github: "https://github.com/Rudra-P11/NetSense",
  },
  {
    id: 4,
    title: "Full-Stack Social Media Web App",
    tech: " Node.js, GraphQL, Prisma, PostgreSQL, Next.js, AWS",
    img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dHlsbW5oYnIydWVzMmJhM3d6MDZuZ3JndTJ0NHdvY3R3MWN6dWQ0eiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/3o85xGqq83InmXKjqE/giphy.gif",
    description: "A full-stack social media platform where users can post tweets, follow others, like posts, and manage profiles.",
    github: "https://github.com/yourusername/social-media-app",
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]" id="projects">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-10 left-40 z-10">
           <h2 className="text-5xl font-bold text-white opacity-80 drop-shadow-lg">Projects</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 pl-10 md:pl-24">
          {projects.map((project) => (
            // Wrapped in GlowingCard
            <GlowingCard key={project.id} className="h-[450px] w-[350px] md:h-[500px] md:w-[450px]">
                <CardContent project={project} />
            </GlowingCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CardContent = ({ project }) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-3xl">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${project.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-colors duration-500" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
        <div className="w-fit rounded-full bg-cyan/20 px-3 py-1 text-xs font-bold text-cyan border border-cyan/30">
          {project.tech}
        </div>
        
        <div className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-4xl font-black text-white uppercase leading-none mb-2 drop-shadow-lg">{project.title}</h3>
          <p className="text-gray-200 font-medium mb-4">{project.description}</p>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-cyan/20 border border-cyan/50 text-cyan font-semibold rounded-lg hover:bg-cyan/40 transition-all duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, Bot, Database, Cpu } from 'lucide-react';

const skillCategories = [
    {
        title: "AI & ML",
        icon: Bot,
        gradientFrom: "#8b5cf6",
        gradientTo: "#06b6d4",
        skills: [
            "Deep Learning", "NLP", "LLMs", "LangChain/LangGraph" , "RAG", "Core ML"
        ]
    },
    {
        title: "Web",
        icon: Code,
        gradientFrom: "#06b6d4",
        gradientTo: "#3b82f6",
        skills: [
            "React", "Next", "Node", "Express",
            "REST APIs", "tailwindCSS"
        ]
    },
    {
        title: "Data & Infrastructure",
        icon: Database,
        gradientFrom: "#d946ef",
        gradientTo: "#06b6d4",
        skills: [
            "SQL/MySQL", "Cloud Deployment", "Git",
            "GitHub", "Postman", "MongoDB"
        ]
    },
    {
        title: "Core Computer Science",
        icon: Cpu,
        gradientFrom: "#f97316",
        gradientTo: "#ec4899",
        skills: [
            "Problem Solving", "DBMS", "Operating Systems", "Networks", "OOPs"
        ]
    }
];

const SkillTag = ({ skill, delay }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay, type: "spring", stiffness: 120, damping: 14 }}
            whileHover={{ scale: 1.25, y: -2, color: "#06b6d4" }}
            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/8 border border-white/15 text-gray-300 backdrop-blur-sm transition-all"
        >
            {skill}
        </motion.span>
    );
};

const SkillCard = ({ category, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const normalizedX = (x - centerX) / centerX;
        const normalizedY = (y - centerY) / centerY;
      
        mouseX.set(normalizedX * 12);
        mouseY.set(normalizedY * 12);
    };

    const rotateX = useTransform(mouseY, [-12, 12], [6, -6]); 
    const rotateY = useTransform(mouseX, [-12, 12], [-6, 6]);

    const Icon = category.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0);
                mouseY.set(0);
            }}
            style={{ 
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
                perspective: 1200
            }}
            whileHover={{ scale: 1.03 }}
            className={`group relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
                        ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
                        `}
        >
            {/* Animated Spinning Gradient Border */}
            <div 
                className="absolute inset-[-1000%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_5s_linear_infinite]"
                style={{
                    background: `conic-gradient(from_90deg_at_50%_50%,${category.gradientFrom}00_0%,${category.gradientFrom}_50%,${category.gradientFrom}00_100%)`,
                }}
            />

            {/* Content Background */}
            <div className="relative h-full w-full rounded-2xl bg-black/5 backdrop-blur-xl p-8 md:p-10 flex flex-col">
                {/* Gradient overlay on hover */}
                <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})`
                    }}
                />

                {/* Icon */}
                <motion.div
                    animate={{ 
                        scale: isHovered ? 1.15 : 1,
                        y: isHovered ? -5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative z-10 mb-6 inline-flex p-4 rounded-xl border border-white/15 group-hover:border-white/40 transition-all duration-500 w-fit"
                    style={{
                        boxShadow: isHovered ? `0 0 30px ${category.gradientFrom}60` : 'none'
                    }}
                >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <motion.h3
                    animate={{ 
                        opacity: isHovered ? 1 : 0.9
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 text-xl md:text-2xl font-bold text-white mb-6 tracking-tight"
                >
                    {category.title}
                </motion.h3>

                {/* Skills Container */}
                <div className="relative z-10 flex-1 flex flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0.6 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2"
                    >
                        {category.skills.slice(0, isHovered ? undefined : 3).map((skill, idx) => (
                            <SkillTag 
                                key={skill} 
                                skill={skill} 
                                delay={idx * 0.04}
                            />
                        ))}
                    </motion.div>

                    {/* More skills indicator */}
                    {!isHovered && category.skills.length > 3 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs text-gray-500 mt-auto pt-4 font-medium"
                        >
                            +{category.skills.length - 3} more skills
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Glow effect - appears on hover */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.5 : 0,
                    scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.4 }}
                className="absolute -inset-12 rounded-3xl pointer-events-none -z-10"
                style={{
                    background: `radial-gradient(circle, ${category.gradientFrom}40 0%, transparent 70%)`,
                    filter: 'blur(40px)'
                }}
            />
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="relative py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Matching other sections */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
                >
                    Technical Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard 
                            key={category.title} 
                            category={category} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
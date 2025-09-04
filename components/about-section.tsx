"use client";

import { motion } from 'framer-motion';
import { skills } from '@/data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutSection() {
  return (
    <motion.section 
      id="about"
      className="py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi there! I’m Hoang Duy, a fresh graduate and enthusiastic web developer. My interest in web development started with a curiosity about how websites are built, and over time, it has grown into a genuine passion for designing and coding interactive digital experiences.            </p>
            <p className="text-muted-foreground leading-relaxed">
              I may not have years of experience yet, but I make up for it with dedication, continuous learning, and a strong desire to contribute to real-world projects.            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">My Skills</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary w-28"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <skill.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

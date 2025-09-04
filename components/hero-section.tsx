"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { heroInfo, socialLinks } from '@/data';
import { Button } from './ui/button';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-background -z-10">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-20"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-20"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-6"
          >
            <Image 
                src={heroInfo.avatar} 
                alt={heroInfo.name} 
                width={120} 
                height={120} 
                className="w-[120px] h-[120px] object-cover rounded-full border-4 border-primary shadow-lg"
                priority
              />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm {heroInfo.name}
          </h1>

          <TypeAnimation
            sequence={[
              'I am a Software Developer',
              1500,
              'I am a Problem Solver',
              1500,
              'I am a Lifelong Learner',
              1500,
            ]} 
            wrapper="h2"
            speed={50}
            className="text-xl md:text-3xl text-primary mb-6 font-semibold"
            repeat={Infinity}
          />

          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            {heroInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <div className="flex items-center gap-4">
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

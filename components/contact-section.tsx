"use client";

import { motion } from 'framer-motion';
import { socialLinks } from '@/data';
import { Button } from './ui/button';
import { Input } from './ui/input'; // Will create this
import { Textarea } from './ui/textarea'; // Will create this
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., using Formspree, Netlify Forms, or a custom backend)
    alert('Form submission is not implemented in this demo.');
  };

  return (
    <motion.section 
      id="contact"
      className="py-24 sm:py-32 bg-secondary/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on social media. Let's build something amazing together!
            </p>
            <div className="flex items-center gap-4 mb-8">
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
              <Link href={socialLinks.email}>
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={socialLinks.phone}>
                <Button variant="outline" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required rows={5} />
            <Button type="submit" className="w-full">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

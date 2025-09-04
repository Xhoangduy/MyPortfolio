import { Github, Linkedin, Mail, Twitter, Code, Pencil, Briefcase, Award, GitBranch, MonitorPlay, Gamepad2, AppWindow } from 'lucide-react';
import { Project, Experience, Skill, NavLink } from '@/lib/types';

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/hoang-duy-nguyen-a20337297/',
  github: 'https://github.com/Xhoangduy',
  email: 'mailto:duynguyen2454@gmail.com',
  phone: 'tel:0942322454',
};

export const heroInfo = {
  name: 'Nguyen Hoang Duy',
  title: 'Software Developer',
  description: 'For me, coding is not just about writing lines of code—it’s about crafting experiences people enjoy.',
  avatar: '/IMG_3641_jpg.jpg', // Đảm bảo bạn đã thêm avatar.png vào thư mục public
};

export const skills: Skill[] = [
  // { name: 'React', icon: Code },
  // // { name: 'Next.js', icon: Code },
  // { name: 'TypeScript', icon: Code },
  // { name: 'JavaScript', icon: Code },
  // { name: 'Python', icon: Code },
  // { name: 'Java', icon: Code },
  // { name: 'C++', icon: Code },
  // { name: 'C#', icon: Code },
  // { name: 'Tailwind CSS', icon: Pencil },
  // { name: 'Node.js', icon: Code },
  // { name: 'Git', icon: GitBranch },
  // Frontend Development
  { name: 'JavaScript', icon: Code },
  { name: 'HTML5/CSS3', icon: Code },
  { name: 'React', icon: Code },
  // { name: 'Tailwind CSS', icon: Pencil },
  
  // Programming Languages
  { name: 'Java', icon: Code },
  
  // Currently Learning
  { name: 'Node.js', icon: Code },
  // Development Tools
  { name: 'VS Code', icon: Code },
  { name: 'Git & GitHub', icon: GitBranch },
  
  
  // Operating Systems
  { name: 'macOS', icon: AppWindow },
  { name: 'Windows', icon: AppWindow },
  // Soft Skills
  { name: 'Problem Solving', icon: Briefcase },
  { name: 'Team Collaboration', icon: Briefcase },
];

export const projects: Project[] = [
  {
    title: 'Travel',
    description: 'The application provides users with the ability to search, register, manage, and book hotel rooms/accommodations via an interactive map, while also enabling administrators to efficiently control the system.',
    image: '/project1.png', // Add your project image to the public folder
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mapbox'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Xhoangduy/MERN_TRAVEL',
  },
  {
    title: 'Hotel Management System',
    description: 'Hotel Management is a hotel management system that allows customers to book rooms online and helps staff/managers easily track and handle operations related to rooms, customers, payments, and revenue reports. The system aims to automate and optimize hotel operations.',
    image: '/project2.png', // Add your project image to the public folder
    tags: ['Javascript', 'Python (Flask)', 'MySQL'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Xhoangduy/Hotel_Management',
  },
  {
    title: 'Music Player',
    description: 'Music Player is a lightweight and user-friendly application built with JavaScript that allows users to play, pause, and manage their favorite songs with ease.',
    image: '/project3.png', // Add your project image to the public folder
    tags: ['HTML', 'CSS', 'Javascript'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Xhoangduy/MusicPlayer'
  },
];

export const experiences: Experience[] = [
  {
    company: 'Ho Chi Minh Television (HTV)',
    role: 'IT Support Intern',
    period: 'September 2024 - December 2024',
    description: 'As an IT Support Intern at HTV, I assisted the technical team in maintaining and troubleshooting computer systems, networks, and office equipment. My responsibilities included providing first-level support to staff, installing and configuring software, and ensuring smooth day-to-day IT operations.'+ ' This role helped me develop practical problem-solving skills, strengthen my understanding of system administration, and improve my communication when assisting non-technical users.',
  }
];

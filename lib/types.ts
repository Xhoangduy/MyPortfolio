import { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

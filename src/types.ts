export type Language = 'en' | 'es';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
  image: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  gallery?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface ClientReview {
  id: string;
  client: string;
  company: string;
  logo: string;
  text: string;
  stars: number;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  website_hp?: string; // Honeypot anti-spam
}

export type ContactSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

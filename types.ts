import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  // Detailed view fields
  longDescription?: string;
  features?: string[];
  imageUrl?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
  // New fields for Detail View
  description?: string;
  client?: string;
  completionYear?: string;
  area?: string;
  gallery?: string[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  id?: number;
  username: string;
  name: string;
  role: 'admin' | 'editor';
  email?: string;
  lastActive?: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  status: 'new' | 'contacted' | 'converted';
  date: string;
}

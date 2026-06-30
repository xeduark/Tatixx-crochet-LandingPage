export interface Product {
  id: string;
  name: string;
  category: 'amigurumi' | 'flores' | 'accesorios' | 'decoracion';
  price: string;
  color: 'yarn-ball' | 'yarn-ball-2' | 'yarn-ball-3' | 'yarn-ball-4';
  icon: string;
  description: string;
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  initial: string;
  year: string;
  color: 'yarn-ball' | 'yarn-ball-2' | 'yarn-ball-3' | 'yarn-ball-4';
  borderColor: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  className: string;
}

export interface FilterOption {
  value: string;
  label: string;
  color: string;
}
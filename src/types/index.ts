export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string[];
}

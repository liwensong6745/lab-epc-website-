export interface SiteSettings {
  companyName: string;
  companyNameEn: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  wechatQr: string;
  icpLicense: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  order: number;
  body?: string;
  bodyHtml?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  industry: string;
  client: string;
  location: string;
  area: string;
  duration: string;
  thumbnail: string;
  images: string[];
  challenge: string;
  challengeHtml?: string;
  solution: string;
  solutionHtml?: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  featured: boolean;
  order: number;
}

export interface Qualification {
  id: string;
  name: string;
  category: string;
  image: string;
  issuer: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  order: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface PageContent {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  sections: any[];
}

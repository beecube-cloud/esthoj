export interface Division {
    id: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    link: string;
  }
  
  export interface DivisionsSectionProps {
    divisions: Division[];
    title?: string;
    subtitle?: string;
    className?: string;
  }
  
  export interface DivisionsSectionAnimatedProps extends DivisionsSectionProps {
    autoPlay?: boolean;
    autoPlayInterval?: number;
  }
  
  export interface DivisionCardProps {
    division: Division;
    className?: string;
  }

  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
    email?: string;
    linkedin?: string;
  }
  
  export interface TeamSectionAnimatedProps {
    members: TeamMember[];
    title?: string;
    subtitle?: string;
    cardsPerView?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
  }

  export interface FAQItem {
    id: string;
    question: string;
    answer: string;
  }
  
  export interface FAQSectionAnimatedProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
    contactText?: string;
    contactLink?: string;
    contactLinkText?: string;
    phone?: string;
    supportText?: string;
    allowMultipleOpen?: boolean;
    animationDuration?: number;
    className?: string;
  }
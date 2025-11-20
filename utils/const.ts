import { Division, FAQItem, TeamMember } from "./types";

export const sampleDivisions: Division[] = [
    {
      id: 'engineering-construction',
      title: 'Engineering & Construction',
      tagline: 'If you can imagine it, we can build it.',
      description:
        'We deliver end-to-end construction and engineering services across residential, commercial, industrial, and infrastructure projects. Our team transforms ideas into physical realities—safely, responsibly, and within budget.',
      image: '/assets/divisions/image1.webp',
      link: '/divisions/engineering-construction',
    },
    {
      id: 'consultancy',
      title: 'Consultancy & Project Management',
      tagline: 'Strategic guidance for successful projects.',
      description:
        'Our consultancy services provide expert guidance throughout the project lifecycle, from feasibility studies to project completion. We help clients make informed decisions and optimize project outcomes.',
      image: '/assets/divisions/image2.webp',
      link: '/divisions/consultancy',
    },
    {
      id: 'training',
      title: 'Training & Development',
      tagline: 'Building skills, building futures.',
      description:
        'We offer comprehensive training programs for construction professionals, covering safety, technical skills, and project management. Our courses are designed to enhance capabilities and ensure industry best practices.',
      image: '/assets/divisions/image3.webp',
      link: '/divisions/training',
    },
  ];


  export const sampleTeamMembers: TeamMember[] = [
    {
      id: 'Dr-Joshua',
      name: 'Dr Joshua Olorunkiya (PhD.)',
      role: 'CEO',
      image: '/assets/team/DrJoshua.jpeg',
      bio: 'Expert in sustainable development with 10+ years of experience in green energy solutions.',
      email: 'jenny.wilson@esthoj.com',
      linkedin: 'https://linkedin.com/in/jennywilson',
    },
  ];

  export const sampleFAQs: FAQItem[] = [
    {
      id: 'bills-of-quantities',
      question: 'What is a Bill of Quantities (BOQ)?',
      answer:
        'A Bill of Quantities is a structured document that itemizes materials, labor, and work sections required for a construction project. It enables accurate pricing by contractors and helps in tender evaluation and cost control.',
    },
    {
      id: 'contract-types',
      question: 'What types of construction contracts do you work with?',
      answer:
        'We work with various contract forms including Lump Sum, Measure & Pay, Design and Build, EPC, and FIDIC-based contracts. The appropriate contract type is selected based on project scope, client objectives, and risk allocation.',
    },
    {
      id: 'consulting-services',
      question: 'What consulting services do you provide in the construction industry?',
      answer:
        'We offer consulting services such as feasibility studies, cost planning, value engineering, contract advisory, claims & dispute resolution, procurement planning, and financial reporting for construction projects.',
    },
    {
      id: 'tendering-support',
      question: 'Do you assist companies with tendering and bid preparation?',
      answer:
        'Yes. We support clients in preparing competitive bids, developing BOQs, conducting rate analysis, reviewing tender documents, and ensuring compliance with client specifications.',
    },
    {
      id: 'site-visits',
      question: 'Do you conduct site inspections and progress valuations?',
      answer:
        'Yes. We perform routine site visits to assess work progress, verify completed activities, prepare interim valuations, and ensure quality and contract compliance.',
    },
  ];
  
  
  
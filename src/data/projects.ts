export type ProjectCategory =
  | 'Websites'
  | 'Web Applications'
  | 'Automation'
  | 'E-commerce'
  | 'EdTech'
  | 'Digital Platforms';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  categories: ProjectCategory[];
  categoryLabel: string; // display label, e.g. "EdTech / SaaS / School Automation"
  description: string;
  features: string[];
  tech: string[];
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  url?: string;
  hasCaseStudy: boolean;
  // Path to a screenshot under /public/projects/. Left undefined where no
  // real asset was supplied — the UI renders a tasteful placeholder instead.
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: 'ictresults',
    name: 'ICTRESULTS',
    tagline: 'A smarter way for schools to process and deliver results.',
    categories: ['EdTech', 'Web Applications', 'Automation'],
    categoryLabel: 'EdTech / SaaS / School Automation',
    description:
      'A digital school management and automated result-processing platform designed to help schools manage student records, process academic results and securely deliver approved results.',
    features: [
      'Student & staff management',
      'Class and subject management',
      'Automated result processing & grading',
      'Result approval workflow',
      'PDF report generation',
      'Secure result publication',
      'Parent email delivery',
      'Student result access portal',
      'Multi-school architecture',
      'School dashboards',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Automation', 'PDF Generation', 'Email Delivery'],
    role: 'End-to-end design and development — data model, result-processing logic, approval workflow, dashboards and delivery pipeline.',
    problem:
      'Schools were processing and distributing academic results manually, which made grading slow, approval untracked and delivery to parents inconsistent.',
    solution:
      'A multi-school platform that centralizes student and staff records, automates grading and result computation, routes results through an approval step, then generates PDF reports and delivers them by email once approved.',
    outcome:
      'Streamlined result processing, centralized school record-keeping, and automated delivery of approved results to parents.',
    url: 'https://ictresult.com',
    hasCaseStudy: true,
  },
  {
    slug: 'wealthsystems-academy',
    name: 'WealthSystems Academy',
    tagline: 'A structured platform for financial education and digital products.',
    categories: ['EdTech', 'Digital Platforms', 'E-commerce'],
    categoryLabel: 'EdTech / Digital Platform / E-commerce',
    description:
      'A structured financial education and digital wealth-building platform combining a learning management system with a digital marketplace.',
    features: [
      'Learning management system',
      'Digital marketplace',
      'Student and user accounts',
      'Course delivery',
      'Digital product sales',
      'Custom dashboard systems',
    ],
    tech: ['WordPress', 'LearnDash', 'WooCommerce', 'Automation'],
    role: 'Platform build, LMS configuration and marketplace integration.',
    problem:
      'The business needed one platform where students could learn through structured courses and also purchase related digital products, without juggling separate systems.',
    solution:
      'A combined learning and commerce platform: courses live in the LMS, digital products sell through an integrated marketplace, and both sit behind a single student account.',
    outcome: 'A unified learning and digital-product experience for students in one platform.',
    url: 'https://wealthsystemsacademy.com',
    hasCaseStudy: true,
  },
  {
    slug: 'jobmatch-connect',
    name: 'JobMatch Connect',
    tagline: 'Connecting job seekers with employers through intelligent matching.',
    categories: ['Web Applications'],
    categoryLabel: 'Web Application / Recruitment Technology',
    description:
      'A web and mobile-oriented platform designed to connect job seekers with employers through profiles, applications and intelligent matching.',
    features: [
      'Job seeker profiles',
      'CV uploads',
      'Job applications',
      'Employer profiles',
      'Vacancy posting',
      'Applicant management',
      'Intelligent job matching by skills, experience, qualifications, location and preferences',
    ],
    tech: ['React', 'Node.js', 'Database Design', 'API Integrations'],
    role: 'Application architecture, matching logic and full-stack development.',
    problem:
      'Job seekers and employers needed a focused platform where matching goes beyond keyword search into actual fit.',
    solution:
      'A two-sided platform where seekers build profiles and upload CVs, employers post vacancies and manage applicants, and a matching engine weighs skills, experience, qualifications, location and preferences.',
    outcome: 'A working two-sided recruitment platform with structured applicant management.',
    url: 'https://jobmatch-connect.vercel.app',
    hasCaseStudy: true,
  },
  {
    slug: 'the-black-genesis',
    name: 'The Black Genesis',
    tagline: 'A premium fashion e-commerce experience.',
    categories: ['E-commerce'],
    categoryLabel: 'E-commerce / Fashion',
    description:
      'A premium fashion e-commerce platform designed around a modern digital shopping experience.',
    features: [
      'Product store & categories',
      'Product and price filtering',
      'Brand filtering',
      'Multiple payment methods',
      'Cryptocurrency payment support',
    ],
    tech: ['WordPress', 'WooCommerce', 'Payment Integrations'],
    role: 'Store build, catalog structure and payment integration, including crypto payment support.',
    problem: 'A fashion brand needed a storefront that felt premium and supported flexible ways to pay.',
    solution:
      'A structured product catalog with brand and price filtering, backed by multiple payment options including cryptocurrency.',
    outcome: 'A functioning premium storefront with flexible payment options for customers.',
    url: 'https://theblackgenesis.com',
    hasCaseStudy: true,
  },
  {
    slug: 'jedroc-skills-resources',
    name: 'Jedroc Skills Resources',
    tagline: 'A digital-skills marketplace with a dedicated student portal.',
    categories: ['EdTech', 'E-commerce', 'Digital Platforms'],
    categoryLabel: 'EdTech / Digital Products / E-commerce',
    description:
      'A premium digital-skills education platform selling courses, ebooks, software and templates, with a student portal for accessing paid learning content.',
    features: [
      'Course marketplace',
      'Digital product sales',
      'Student login & learning portal',
      'Digital downloads',
      'E-commerce checkout',
    ],
    tech: ['WordPress', 'WooCommerce', 'LearnDash'],
    role: 'Platform build connecting the storefront to a gated student learning area.',
    problem: 'Digital products and paid courses needed to sell through one store and unlock into one portal.',
    solution:
      'A commerce layer for courses, ebooks, software and templates, wired to a student portal that unlocks content on purchase.',
    outcome: 'A single platform for selling and delivering digital skills content.',
    url: 'https://jedrocskills.com.ng',
    hasCaseStudy: true,
  },
  {
    slug: 'chiralfx-academy',
    name: 'ChiralFX Academy',
    tagline: 'Forex education, mentorship and digital products in one platform.',
    categories: ['EdTech', 'Digital Platforms'],
    categoryLabel: 'Education / Trading Platform / Digital Products',
    description:
      'An online forex education platform combining educational content, mentorship and trading-related services.',
    features: [
      'Forex education content',
      'Mentorship access',
      'Online courses',
      'Signal services',
      'Student access management',
      'Digital product sales',
    ],
    tech: ['WordPress', 'LearnDash', 'WooCommerce'],
    role: 'Platform build and content/course structuring.',
    problem: 'Traders needed one place for structured education, mentorship and paid trading resources.',
    solution: 'A learning platform that bundles courses, mentorship access and signal services behind student accounts.',
    outcome: 'A consolidated education and mentorship platform for trading students.',
    url: 'https://chiralfx.com.ng',
    hasCaseStudy: true,
  },
  {
    slug: 'pinnacle-global',
    name: 'Pinnacle Global',
    tagline: 'A marketplace platform with dashboards, wallets and referrals.',
    categories: ['Web Applications', 'E-commerce', 'Digital Platforms'],
    categoryLabel: 'Web Application / E-commerce / Business Platform',
    description:
      'A complex digital platform combining an online marketplace with user dashboards, transaction management, referral functionality and automated business workflows.',
    features: [
      'Product marketplace',
      'User dashboard',
      'Wallet functionality',
      'Transaction history',
      'Referral system',
      'Admin management & reporting',
      'Support functionality',
    ],
    tech: ['PHP', 'MySQL', 'Automation', 'Dashboard Systems'],
    role: 'Architecture and development of the dashboard, wallet logic and admin systems.',
    problem:
      'The business needed a single platform to run a marketplace alongside user wallets, referrals and admin oversight — with real business logic behind each part.',
    solution:
      'A dashboard-driven platform where users manage products, wallets and referrals, while admins manage listings, users and reporting from a separate control layer.',
    outcome: 'Centralized management of a marketplace with wallet, referral and reporting functionality in one system.',
    hasCaseStudy: true,
  },
];

export const categoryFilters: ('All' | ProjectCategory)[] = [
  'All',
  'Websites',
  'Web Applications',
  'Automation',
  'E-commerce',
  'EdTech',
  'Digital Platforms',
];

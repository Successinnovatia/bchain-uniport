export const SITE = {
  name: "Blockchain Uniport",
  tagline: "University of Port Harcourt",
  description:
    "Bridging the gap between young people and blockchain knowledge through education, community, and hands-on opportunities.",
} as const;

/** Edit brand colors here — derived from logo (#0022FF / royal blue) */
export const BRAND_COLORS = {
  primary: "#0047FF",
  secondary: "#FFFFFF",
  accent: "#3B7FFF",
} as const;

export const MISSION_STATEMENT = `Blockchain Uniport is committed to bridging the gap between young people and their knowledge of Cryptocurrencies and Blockchain Technology in general.

We are determined to build a community of well-informed young people who are equipped for the future of technology.`;

export const VISION_STATEMENT = `To become the leading blockchain community for young people at the University of Port Harcourt — empowering every young person with practical knowledge, confidence, and opportunities in cryptocurrencies and blockchain technology.`;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/workshops", label: "Workshops" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "X (Twitter)",
    href: "https://x.com/BchainUniport",
    handle: "@BchainUniport",
  },
  {
    label: "Telegram",
    href: "https://t.me/BlockchainUniportCommunity",
    handle: "BlockchainUniportCommunity",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/Blockchainuniport",
    handle: "@Blockchainuniport",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    handle: "Blockchain Uniport",
  },
  {
    label: "Email",
    href: "mailto:blockchainuniport@gmail.com",
    handle: "blockchainuniport@gmail.com",
  },
] as const;

export type Leader = {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  social: {
    twitter: string;
    linkedin: string;
    email: string;
  };
};

export const FOUNDER: Leader = {
  name: "Victor Aluka",
  role: "Founder, Blockchain Uniport",
  bio: `Victor Aluka founded Blockchain Uniport with a vision to make blockchain and cryptocurrency education accessible to young people in and around the University of Port Harcourt.

With a passion for technology and community building, he leads workshops, mentors members, and connects young people to real opportunities in the Web3 ecosystem.`,
  quote:
    "Our goal is simple: every young person should have the confidence to understand and participate in the future of technology.",
  image: "/images/founder/founder.png",
  social: {
    twitter: "https://x.com/BchainUniport",
    linkedin: "https://linkedin.com/",
    email: "mailto:blockchainuniport@gmail.com",
  },
};

export const COFOUNDER: Leader = {
  name: "Tosin Ademakin",
  role: "Co-Founder, Blockchain Uniport",
  bio: `Tosin Ademakin co-founded Blockchain Uniport to help young people understand blockchain, cybersecurity, and the technologies shaping the digital economy.

He brings hands-on experience delivering technical workshops and presentations, guiding young people through complex topics in a clear and practical way.`,
  quote:
    "Education is the bridge — when young people understand the technology, they can build the future with confidence.",
  image: "/images/founder/cofounder.png",
  social: {
    twitter: "https://x.com/BchainUniport",
    linkedin: "https://linkedin.com/",
    email: "mailto:blockchainuniport@gmail.com",
  },
};

export const COMMUNITY = {
  story: `Blockchain Uniport started as a small group of curious young people who wanted to learn about cryptocurrencies and blockchain beyond the headlines. What began as informal study sessions has grown into a vibrant community — hosting workshops, meetups, and mentorship programs that welcome young people from all walks of life.

We believe blockchain education should be practical, collaborative, and open to everyone. Whether you're completely new or already building, there's a place for you here.`,
  foundedYear: "2023",
  stats: [
    { label: "Active Members", value: "100+" },
    { label: "Workshops Held", value: "15+" },
    { label: "Campus Events", value: "10+" },
    { label: "Partner Projects", value: "5+" },
  ],
  values: [
    {
      title: "Education First",
      description:
        "We break down complex blockchain concepts into clear, practical lessons anyone can follow.",
    },
    {
      title: "Inclusive Community",
      description:
        "No prior experience needed. Beginners and builders learn side by side.",
    },
    {
      title: "Hands-On Learning",
      description:
        "Workshops, hackathons, and real projects — not just theory.",
    },
    {
      title: "Future-Ready",
      description:
        "Equip young people with skills and networks for careers in Web3 and beyond.",
    },
  ],
} as const;

export type WorkshopItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: "workshop" | "event";
  status: "upcoming" | "past";
};

export const WORKSHOPS: WorkshopItem[] = [
  {
    slug: "intro-to-blockchain",
    title: "Intro to Blockchain Workshop",
    date: "Sep 14, 2026",
    location: "University of Port Harcourt",
    description:
      "A beginner-friendly session covering blockchain fundamentals, wallets, and how to get started safely.",
    image: "/images/workshops/intro-to-blockchain.jpg",
    type: "workshop",
    status: "upcoming",
  },
  {
    slug: "web3-career-panel",
    title: "Web3 Career Panel",
    date: "Oct 24, 2026",
    location: "Campus Auditorium",
    description:
      "Industry speakers share career paths, internship tips, and how to break into the blockchain space.",
    image: "/images/workshops/web3-career-panel.jpg",
    type: "event",
    status: "upcoming",
  },
  {
    slug: "campus-hackathon-kickoff",
    title: "Campus Hackathon Kickoff",
    date: "Dec 06, 2026",
    location: "Innovation Hub",
    description:
      "Launch event for our campus hackathon — form teams, pick challenges, and start building.",
    image: "/images/workshops/campus-hackathon.jpg",
    type: "event",
    status: "upcoming",
  },
  {
    slug: "smart-contracts-101",
    title: "Smart Contracts 101",
    date: "Nov 12, 2025",
    location: "CS Department Lab",
    description:
      "Hands-on introduction to writing and deploying your first smart contract.",
    image: "/images/workshops/smart-contracts.jpg",
    type: "workshop",
    status: "past",
  },
  {
    slug: "defi-deep-dive",
    title: "DeFi Deep Dive",
    date: "Oct 05, 2025",
    location: "Student Union Building",
    description:
      "Explored decentralized finance protocols, yield farming basics, and risk management.",
    image: "/images/workshops/defi-deep-dive.jpg",
    type: "workshop",
    status: "past",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Blockchain Uniport made complex topics easy to understand. I finally feel confident exploring Web3.",
    author: "Ada O.",
    role: "Computer Science",
    image: "/images/testimonials/testimonial-img-1.jpg",
  },
  {
    quote:
      "The workshops and community support helped me land my first blockchain internship.",
    author: "Chidi M.",
    role: "Electrical Engineering",
    image: "/images/testimonials/testimonial-img-2.jpg",
  },
  {
    quote:
      "A welcoming space for beginners and builders alike. Highly recommend joining.",
    author: "Blessing A.",
    role: "Business Administration",
    image: "/images/testimonials/testimonial-img-3.jpg",
  },
] as const;

export const GALLERY = [
  {
    src: "/images/gallery/intro-workshop.jpg",
    alt: "Young people at a blockchain workshop",
    caption: "Intro to Blockchain Workshop",
  },
  {
    src: "/images/gallery/community-meetup.jpg",
    alt: "Community meetup group photo",
    caption: "Community Meetup",
  },
  {
    src: "/images/gallery/campus-hackathon.jpg",
    alt: "Hackathon team collaborating",
    caption: "Campus Hackathon",
  },
  {
    src: "/images/gallery/web3-career-panel.jpg",
    alt: "Speaker session on Web3 careers",
    caption: "Web3 Career Panel",
  },
] as const;

export const PARTNERS = [
  {
    name: "Google",
    logo: "/images/partners/google.svg",
    href: "https://google.com",
  },
  {
    name: "Microsoft",
    logo: "/images/partners/microsoft.svg",
    href: "https://microsoft.com",
  },
  {
    name: "Ethereum",
    logo: "/images/partners/ethereum.svg",
    href: "https://ethereum.org",
  },
  {
    name: "Binance",
    logo: "/images/partners/binance.svg",
    href: "https://binance.com",
  },
] as const;

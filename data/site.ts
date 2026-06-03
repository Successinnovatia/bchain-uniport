export const SITE = {
  name: "Blockchain Uniport",
  tagline: "University of Port Harcourt",
  description:
    "Bridging the gap between students and blockchain knowledge through education, community, and hands-on opportunities.",
} as const;

/** Edit brand colors here — derived from logo (#0022FF / royal blue) */
export const BRAND_COLORS = {
  primary: "#0047FF",
  secondary: "#FFFFFF",
  accent: "#3B7FFF",
} as const;

export const MISSION_STATEMENT = `Blockchain Uniport is committed to bridging the gap between the student community and their knowledge of Cryptocurrencies and Blockchain Technology in general.

We are determined to build a community force of well informed students who are equipped for the future of technology.`;

export const VISION_STATEMENT = `To become the leading student blockchain community at the University of Port Harcourt — empowering every student with practical knowledge, confidence, and opportunities in cryptocurrencies and blockchain technology.`;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#vision-mission", label: "Vision & Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#resources", label: "Resources" },
  { href: "#events", label: "Events" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
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

export const PROGRAMS = [
  {
    title: "Workshops",
    description:
      "Hands-on sessions covering blockchain fundamentals, wallets, smart contracts, and real-world use cases.",
    icon: "workshop" as const,
  },
  {
    title: "Campus Events",
    description:
      "Meetups, hackathons, and speaker sessions that connect students with industry builders and innovators.",
    icon: "events" as const,
  },
  {
    title: "Mentorship",
    description:
      "Guidance from experienced members to help you grow from beginner to confident blockchain contributor.",
    icon: "mentorship" as const,
  },
  {
    title: "Developer & Community",
    description:
      "Collaborate on projects, join study groups, and access opportunities in the wider Web3 ecosystem.",
    icon: "community" as const,
  },
] as const;

export const RESOURCES = [
  {
    title: "Blockchain 101 Guide",
    description: "Core concepts: blocks, consensus, wallets, and security basics.",
    tag: "Beginner",
  },
  {
    title: "Crypto Fundamentals Track",
    description: "Understand tokens, DeFi basics, and responsible participation.",
    tag: "Learning Track",
  },
  {
    title: "Developer Starter Path",
    description: "Introduction to smart contracts and building on-chain apps.",
    tag: "Learning Track",
  },
  {
    title: "Curated Links Hub",
    description: "Trusted docs, tools, and community resources — updated regularly.",
    tag: "Curated",
  },
] as const;

export const EVENTS = [
  {
    date: "Mar 15, 2026",
    title: "Intro to Blockchain Workshop",
    location: "University of Port Harcourt",
  },
  {
    date: "Apr 02, 2026",
    title: "Web3 Career Panel",
    location: "Campus Auditorium",
  },
  {
    date: "Apr 20, 2026",
    title: "Campus Hackathon Kickoff",
    location: "Innovation Hub",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Blockchain Uniport made complex topics easy to understand. I finally feel confident exploring Web3.",
    author: "Student Member",
    role: "Computer Science",
  },
  {
    quote:
      "The workshops and community support helped me land my first blockchain internship.",
    author: "Community Member",
    role: "Engineering",
  },
  {
    quote:
      "A welcoming space for beginners and builders alike. Highly recommend joining.",
    author: "Workshop Participant",
    role: "Business Administration",
  },
] as const;

export const PARTNERS = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
] as const;

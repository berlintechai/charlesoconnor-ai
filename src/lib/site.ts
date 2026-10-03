// Everything you are likely to edit lives in this file: names, links,
// copy for each section. Components read from here.

export const site = {
  name: "Charles O'Connor",
  domain: "charlesoconnor.ai",
  url: "https://charlesoconnor.ai",
  email: "info@charlesoconnor.ai",
  title: "Charles O'Connor | AI Systems, Marketing & Business Development",
  description:
    "Charles O'Connor helps business owners with business development, AI-native business systems, agentic AI implementation, custom software and AI marketing, including SEO, AEO and GEO.",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#ventures", label: "Ventures" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  {
    tag: "Business development",
    title: "Find the next customers and the next offer",
    body: "Positioning, pricing, outreach and partnerships. We decide where growth will come from and put a plan behind it that one person can run.",
    skills: [] as string[],
  },
  {
    tag: "AI-native systems",
    title: "Business systems designed around AI from the start",
    body: "I design and build business systems where AI does real work inside the process, including agentic AI that carries out multi-step tasks on its own. It can be a new build or a fit into the operations you already run.",
    skills: ["Agentic AI implementation", "AI-native workflows", "AI integration"],
  },
  {
    tag: "Marketing with AI",
    title: "Content and campaigns that keep pace",
    body: "Be found in search, in AI answers and on social without paying for every click. Research, copy, email and lead follow-up run on AI workflows, with your voice and your review on everything that goes out.",
    skills: [
      "SEO",
      "Answer engine optimization (AEO)",
      "Generative engine optimization (GEO)",
      "AI search visibility",
      "Organic social",
    ],
  },
  {
    tag: "Custom software",
    title: "Software and apps built around your situation",
    body: "I build software and apps designed for each business's own situation, its clients, its process and its constraints, instead of bending the business to fit an off-the-shelf tool.",
    skills: [] as string[],
  },
];

export const steps = [
  {
    title: "Map what you run",
    body: "Your offers, your sales path, your tools, and who does what each week.",
  },
  {
    title: "Place AI where it pays",
    body: "Add it to the steps that save hours or win customers, inside the tools you already own.",
  },
  {
    title: "Measure and adjust",
    body: "Track leads, revenue and hours saved. Keep what works and drop what does not.",
  },
];

export const venture = {
  name: "Berlin Technologies",
  body: "AI consulting and business development, working in two industries right now.",
};

export const industries = [
  {
    title: "Tax management and resolution",
    body: "Systems and client workflows for firms that manage tax work and resolve tax debt.",
  },
  {
    title: "Marketing with AI for business",
    body: "AI-driven content, outreach and follow-up for businesses that want more customers.",
  },
];

export const software = [
  {
    title: "Tax preparation and resolution genie",
    body: "An AI assistant that guides tax preparation and tax resolution cases.",
  },
  {
    title: "Client management portal",
    body: "One place to manage clients, their documents and their cases.",
  },
];

// "Work with me" inquiry form. Netlify Forms collects the submissions.
// The form name here must match the hidden form Netlify scans at build time
// (see src/components/site/inquiry-form-stub.tsx).
export const inquiry = {
  formName: "work-with-me",
  subject: "New inquiry from charlesoconnor.ai",
  interests: [
    "Business development",
    "AI-native systems and agentic AI",
    "Marketing with AI (SEO, AEO, GEO)",
    "Custom software",
    "Not sure yet",
  ],
};

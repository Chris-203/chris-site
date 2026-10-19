/** Everything the site shows lives here. */

/** Year and month, e.g. "2025-12". */
export type YM = `${number}-${string}`;

export interface Project {
  name: string;
  year: number;
  text: string;
  stack: string[];
  live?: string;
  source: string;
  /** Listed under "More projects" instead of on the main list. */
  more?: boolean;
}

export interface Role {
  title: string;
  org: string;
  location: string;
  start: YM;
  /** Leave out for a current role. */
  end?: YM;
  /** Shown instead of the month range, e.g. "Summer 2019". */
  dates?: string;
  bullets: string[];
}

export const profile = {
  name: 'Christopher Cortazo Rosas',
  headline: 'I build and fix software and data systems.',
  intro:
    'Computer Science graduate (Vassar, 2024) from Yonkers, NY. I’ve built full-stack apps with real logins and payments, cleaned up a company’s CRM, and kept a campus makerspace running. These days I’m building things like a webtoon reader and an app for running a live auction.',
  email: 'cortazo.christopher@gmail.com',
  /** A PDF in public/. The Resume buttons only show once the file is there. */
  resume: 'resume.pdf',
  github: 'https://github.com/Chris-203',
  linkedin: 'https://www.linkedin.com/in/christopher-cortazo',
  /**
   * Where the contact form sends messages. FormSubmit needs no account: the first message
   * sends a one-time confirmation email to this address. For Formspree, use 'https://formspree.io/f/<your id>'.
   */
  form: 'https://formsubmit.co/cortazo.christopher@gmail.com',
};

export const projects: Project[] = [
  {
    name: 'InkNexus',
    year: 2026,
    text: 'A mobile-friendly tracker and reader for webtoons and manhwa. It keeps your last-read chapter across several sources, flags new chapters, and has a built-in reader with zoom. I wrote serverless relays for the MangaDex API and its images that only answer requests from the app’s own pages, and covered the core logic with unit tests.',
    stack: ['TypeScript', 'React', 'Vite', 'Vercel Functions', 'Vitest', 'REST and GraphQL APIs'],
    source: 'https://github.com/Chris-203/inknexus',
  },
  {
    name: 'Gala Auction Clerk',
    year: 2026,
    text: 'A web app for the clerk at a live auction. It listens to the auctioneer, turns speech like “six hundred, paddle 42” into suggested bids for the clerk to confirm, and switches to a Whisper model running in the browser if the connection drops. After the event it totals what each bidder owes and exports results as CSV.',
    stack: ['JavaScript', 'Web Speech API', 'Whisper (Transformers.js)', 'whisper.cpp', 'Bash'],
    source: 'https://github.com/Chris-203/gala-auction',
  },
  {
    name: 'RateMyProfessorAI',
    year: 2024,
    text: 'A chat assistant that answers questions about professors using retrieval-augmented generation. I wrote the Python scraper that gathers professor reviews and loads them into a Pinecone vector database as OpenAI embeddings.',
    stack: ['Python', 'Next.js', 'Pinecone', 'OpenAI', 'Clerk'],
    live: 'https://rate-my-professor-nu.vercel.app',
    source: 'https://github.com/Chris-203/rate-my-professor',
  },
  {
    name: 'StudifyAI',
    year: 2024,
    text: 'A flashcard app that uses AI to turn notes into study cards. It has user login, paid subscriptions, and usage analytics. I built the authentication and the saved-flashcard storage.',
    stack: ['React', 'Next.js', 'Firebase', 'OpenAI', 'Stripe', 'Clerk'],
    live: 'https://ai-studify.vercel.app',
    source: 'https://github.com/Chris-203/flashcard',
  },
  {
    name: 'Toxiscan',
    year: 2024,
    text: 'Scan a product barcode and see its health and environmental risk, using the Open Food Facts database. I built the barcode scanner and tested it on three devices, plus the reusable components and the live-updating results table.',
    stack: ['React', 'Next.js', 'Material-UI', 'Clerk'],
    live: 'https://toxiscan-app.vercel.app/',
    source: 'https://github.com/Chris-203/toxiscan',
  },
  {
    name: 'Machine Translation Comparative Analysis',
    year: 2024,
    text: 'A study with two partners comparing direct Spanish-to-Chinese translation with going through English first. I cleaned multilingual datasets, fine-tuned transformer models, and scored them with BLEU and ROUGE.',
    stack: ['Python', 'HuggingFace', 'Pandas', 'BLEU', 'ROUGE'],
    source: 'https://github.com/Chris-203/Machine-Translation-Comparative-Analysis',
  },
  {
    name: 'Watch Party Sync',
    year: 2026,
    text: 'Browser tools for watching videos in sync with someone on another device. Video streams peer-to-peer over WebRTC, clock pings estimate the offset between devices, and small drift is fixed by nudging playback speed instead of jumping. Includes a Chrome extension for streaming sites, packaged by a GitHub Action.',
    stack: ['JavaScript', 'WebRTC', 'PeerJS', 'Chrome extensions', 'GitHub Actions'],
    live: 'https://chris-203.github.io/screenshare/party.html',
    source: 'https://github.com/Chris-203/screenshare',
    more: true,
  },
  {
    name: 'ToxiGuide',
    year: 2024,
    text: 'Toxiscan’s AI chat assistant. It answers in real time, remembers earlier messages, and saves conversations so a user can pick up where they left off.',
    stack: ['React', 'Next.js', 'Firebase', 'OpenAI'],
    live: 'https://chatbot-self-delta.vercel.app/',
    source: 'https://github.com/Chris-203/chatbot',
    more: true,
  },
  {
    name: 'Carpool App',
    year: 2024,
    text: 'An Android app for Vassar students to post carpool listings and filter them by date, route, seats, or role, built with a partner over a year-long software design course.',
    stack: ['Android Studio', 'Java', 'XML', 'JUnit'],
    source: 'https://github.com/Chris-203/Carpool-VC',
    more: true,
  },
];

export const roles: Role[] = [
  {
    title: 'CRM & Data Management Associate',
    org: 'Mid-Hudson Energy Transition',
    location: 'Remote',
    start: '2025-12',
    bullets: [
      'Built and configured HubSpot custom objects, workflows, and properties based on what teams needed.',
      'Audited CRM data and built an Excel audit that ranks data-quality problems and cleanup priorities.',
      'Refined workflows and pipelines that automate data cleanup, reporting, and documentation.',
      'Answer staff questions and requests, and document system decisions and edge cases for future updates.',
    ],
  },
  {
    title: 'AI Evaluation Contractor',
    org: 'Outlier AI',
    location: 'Remote',
    start: '2024-06',
    end: '2025-03',
    bullets: [
      'Benchmarked AI responses for accuracy, clarity, and reliability through qualitative analysis.',
      'Found edge cases and documented repeatable findings and suggested fixes.',
    ],
  },
  {
    title: 'Software Engineering Fellow',
    org: 'Headstarter',
    location: 'New York, NY',
    start: '2024-06',
    end: '2024-08',
    bullets: [
      'Built and deployed full-stack web apps with React, Next.js, Firebase, and Clerk in weekly sprints with a four-person team.',
      'Took part in code reviews and check-ins, and helped teammates debug authentication, layout, and architecture problems.',
      'Used Git, CI/CD, and testing practices to ship reliable updates.',
    ],
  },
  {
    title: 'MakerSpace Intern',
    org: 'Vassar Innovation Lab',
    location: 'Poughkeepsie, NY',
    start: '2023-09',
    end: '2024-05',
    bullets: [
      'Kept 3D printers, laser cutters, and vinyl cutters running, and helped students and faculty fix technical problems.',
      'Wrote standard operating procedures that sped up onboarding and troubleshooting.',
      'Trained new users to use lab tools safely and managed the project queue.',
    ],
  },
  {
    title: 'Engineering Intern',
    org: 'Con Edison',
    location: 'New York, NY',
    start: '2019-06',
    dates: 'Summer 2019',
    bullets: ['Updated CAD models and project documentation in Autodesk Inventor.'],
  },
];

export const skills = [
  { group: 'Languages', list: 'Python, Java, JavaScript, TypeScript, SQL, HTML/CSS, Kotlin, OCaml' },
  { group: 'Web and apps', list: 'React, Next.js, Vite, Node.js, Firebase, REST APIs, WebRTC, Material-UI, Android Studio' },
  { group: 'Data and AI', list: 'Pandas, Jupyter, HuggingFace, Pinecone, RAG, Whisper, BLEU and ROUGE, data cleaning' },
  { group: 'Systems and IT', list: 'HubSpot CRM, Windows, Microsoft 365, Excel, troubleshooting, technical documentation' },
  { group: 'Practices', list: 'Git, GitHub, CI/CD, unit testing, Agile sprints, code review' },
];

export const education = { school: 'Vassar College', degree: 'Computer Science', year: 2024, location: 'Poughkeepsie, NY' };

/* Dates */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parts = (ym: YM) => ym.split('-').map(Number) as [number, number];

/** "Jun to Aug 2024", "Jun 2024 to Mar 2025", or "Dec 2025 to present". */
export const dateRange = ({ start, end, dates }: Pick<Role, 'start' | 'end' | 'dates'>): string => {
  if (dates) return dates;
  const [sy, sm] = parts(start);
  if (!end) return `${MONTHS[sm - 1]} ${sy} to present`;
  const [ey, em] = parts(end);
  const from = sy === ey ? MONTHS[sm - 1] : `${MONTHS[sm - 1]} ${sy}`;
  return `${from} to ${MONTHS[em - 1]} ${ey}`;
};

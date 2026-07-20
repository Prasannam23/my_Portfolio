export const socials = {
  email: "prasannamtiwari23@gmail.com",
  phone: "+916394185099",
  phoneDisplay: "+91 63941 85099",
  github: "https://github.com/Prasannam23",
  linkedin: "https://linkedin.com/in/prasannam-tiwari-623a9a269",
};

export const navItems = [
  { href: "#top", label: "Top" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#lowlevel", label: "Low-Level" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#verify", label: "Verify" },
];

export const liveLinks = [
   { label: "Resume", href: "/resume.pdf" },
  { label: "QualityVeda", href: "https://qualityveda.co/" },
  { label: "TBI Portal", href: "https://www.tbi-kiet.in/" },
  { label: "Scribble", href: "https://scribble-frontend-six.vercel.app/" },
  { label: "Webhook Relay", href: "https://webhookrelay-frontend.vercel.app/" },
];

export const jobs = [
  {
    tag: "CURRENT",
    range: "Feb 2026 – Jun 2026",
    location: "Remote",
    role: "Backend Developer Intern",
    org: "Volopay — fintech payments platform",
    bullets: [
      "Worked across APIs, databases, and the webhook relay infrastructure powering Volopay's core fintech services.",
      "Designed and maintained REST APIs consumed by internal and partner services, following schema validation and versioning practices used across the platform.",
      "Optimized PostgreSQL queries and schema design to improve response times and support growing transaction volume.",
      "Contributed to the webhook delivery system notifying downstream services of events like payments and approvals, including retry and failure-handling logic.",
      "Improved pipeline reliability by refining retry logic and monitoring, reducing failed and delayed event deliveries.",
    ],
  },
  {
    tag: "REV. 1",
    range: "Sep 2024 – Dec 2025",
    location: "Ghaziabad, India",
    role: "Full Stack Developer Intern",
    roleSuffix: "(backend-focused)",
    org: "Technology Business Incubator — Govt. of India",
    bullets: [
      "Developed an enterprise-grade LMS portal supporting 100+ startups with automated onboarding, funding, and mentoring workflows using Node.js, Express.js, Prisma ORM, and PostgreSQL.",
      "Optimized database queries using Prisma extensions, improving API response time by 50%.",
      "Built the React.js/Redux frontend for real-time application tracking.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  date: string;
  kicker: string;
  desc: string; // may include **bold** markers
  tags: string[];
  links: { label: string; href: string; kind: "live" | "repo" }[];
  spec: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "webhook-relay",
    title: "Webhook Relay",
    date: "Jun 2025",
    kicker: "Reliable event delivery system",
    desc:
      "A Svix/Hookdeck-style delivery platform guaranteeing **at-least-once delivery** through a decoupled ingestion-and-queue architecture. Failed deliveries get exponential backoff retries and land in a dead-letter queue for manual replay. Every payload is signed with **HMAC-SHA256**, and a real-time dashboard tracks per-subscriber status — queued, retrying, delivered, dead — down to response code and latency.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ", "Socket.IO"],
    links: [
      { label: "Live site ↗", href: "https://webhookrelay-frontend.vercel.app/", kind: "live" },
      { label: "Backend repo ↗", href: "https://github.com/Prasannam23/Webhookrelay", kind: "repo" },
      { label: "Dashboard repo ↗", href: "https://github.com/Prasannam23/webhookrelay-frontend", kind: "repo" },
    ],
    spec: [
      { label: "Delivery guarantee", value: "At-least-once, with exponential backoff retries" },
      { label: "Failure path", value: "Dead-letter queue, manual replay" },
      { label: "Payload integrity", value: "HMAC-SHA256 signing on every payload" },
      { label: "Observability", value: "Real-time dashboard — queued / retrying / delivered / dead, per subscriber, with response code and latency" },
      { label: "Queue engine", value: "BullMQ over Redis, decoupled from ingestion" },
      { label: "Live sync", value: "Socket.IO pushes status changes to the dashboard as they happen" },
    ],
  },
  {
    id: "scribble",
    title: "Scribble",
    date: "Oct 2024",
    kicker: "Multiplayer drawing & voting platform",
    desc:
      "Two players draw on opposite halves of a shared canvas while unlimited viewers watch and vote live. A service-oriented backend (Room, Canvas, Score, Prompt services) drives a strict room lifecycle — **waiting → drawing → voting → finished** — with a 60-second timer, ping/pong heartbeats for connection health, and Redis handling scores and session persistence across reconnects.",
    tags: ["Node.js", "Express", "ws", "Redis", "React"],
    links: [
      { label: "Live site ↗", href: "https://scribble-frontend-six.vercel.app/", kind: "live" },
      { label: "Repo ↗", href: "https://github.com/Prasannam23/sribble-backend", kind: "repo" },
    ],
    spec: [
      { label: "Room lifecycle", value: "waiting → drawing → voting → finished, enforced server-side" },
      { label: "Round timer", value: "60-second drawing window" },
      { label: "Connection health", value: "ping/pong heartbeats detect drops mid-round" },
      { label: "Service split", value: "Room, Canvas, Score, and Prompt run as separate services" },
      { label: "State store", value: "Redis for live scores and session persistence across reconnects" },
      { label: "Transport", value: "Raw ws (WebSocket) — every stroke and vote streamed in real time" },
    ],
  },
  {
    id: "qualityveda",
    title: "QualityVeda",
    date: "Dec 2024 · Freelance",
    kicker: "Live production platform",
    desc:
      "A production LMS built for India's medical-lab quality space — NABL/ISO 15189 certification training for pathology lab technicians. **20+ REST APIs** handle auth, courses, certificates, and progress tracking on a relational PostgreSQL schema with optimized indexing. Ships automated certificate generation, multi-role dashboards, and AWS deployment — live and serving real users today.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redux Toolkit"],
    links: [
      { label: "Live site ↗", href: "https://qualityveda.co/", kind: "live" },
      { label: "Repo ↗", href: "https://github.com/Prasannam23/qualityveda2", kind: "repo" },
    ],
    spec: [
      { label: "API surface", value: "20+ REST endpoints — auth, courses, certificates, progress" },
      { label: "Domain", value: "NABL / ISO 15189 certification training for pathology lab technicians" },
      { label: "Schema", value: "Relational PostgreSQL, indexed for the platform's read patterns" },
      { label: "Automation", value: "Certificate generation runs automatically on course completion" },
      { label: "Access model", value: "Multi-role dashboards (learner, admin, certifier)" },
      { label: "Deployment", value: "Live on AWS, serving real users" },
    ],
  },
  {
    id: "tbi",
    title: "TBI Proof of Work",
    date: "Sep 2024 – Dec 2025",
    kicker: "Frontend directory — Technology Business Incubator",
    desc:
      "The React/Redux frontend built alongside the TBI LMS backend — real-time application tracking across onboarding, funding, and mentoring workflows that carried 100+ startups through the incubator's pipeline. Live and in active use by the incubator today.",
    tags: ["React.js", "Redux", "Node.js", "Prisma"],
    links: [
      { label: "Live site ↗", href: "https://www.tbi-kiet.in/", kind: "live" },
      { label: "Repo ↗", href: "https://github.com/Prasannam23/Tbi-frontend-repo-proof-of-work-", kind: "repo" },
    ],
    spec: [
      { label: "Workflows tracked", value: "Onboarding, funding, and mentoring — real time" },
      { label: "Scale", value: "100+ startups carried through the incubator pipeline" },
      { label: "State management", value: "Redux for cross-role dashboard views and permissions" },
      { label: "Backend pairing", value: "Consumes the TBI LMS Node.js / Prisma / PostgreSQL API" },
      { label: "Status", value: "Live and in active use by the incubator" },
    ],
  },
];

export const lowLevelProjects: Project[] = [
  {
    id: "http-proxy",
    title: "HTTP Proxy Server",
    date: "Systems / C",
    kicker: "Multi-threaded proxy with an LRU cache",
    desc:
      "A proxy server built from raw Berkeley sockets — no framework to hide the hard parts. Handles up to **400 concurrent connections** via semaphore-controlled pooling, with a thread-safe LRU cache (200MB total, 10MB/item) protected by mutexes, and RFC-compliant HTTP/1.0 & 1.1 error handling. The closest I've come to fighting the OS directly.",
    tags: ["C", "pthreads", "Berkeley Sockets", "LRU Cache"],
    links: [{ label: "Browse repos ↗", href: "https://github.com/Prasannam23", kind: "repo" }],
    spec: [
      { label: "Concurrency", value: "Up to 400 concurrent connections, semaphore-controlled pooling" },
      { label: "Threading", value: "pthreads, one worker thread per accepted connection" },
      { label: "Cache", value: "200MB total / 10MB per item, mutex-protected LRU eviction" },
      { label: "Protocol", value: "RFC-compliant HTTP/1.0 and HTTP/1.1 error handling" },
      { label: "Transport layer", value: "Raw Berkeley sockets, no networking framework" },
    ],
  },
  {
    id: "tokkenizer",
    title: "Tokkenizer",
    date: "Systems / C++",
    kicker: "Byte-level tokenizer, built from scratch",
    desc:
      "A detour from web backends into language processing fundamentals — a from-scratch C++ tokenizer exploring how raw text gets broken into tokens before it ever reaches a model.",
    tags: ["C++"],
    links: [{ label: "Repo ↗", href: "https://github.com/Prasannam23/Tokkenizer", kind: "repo" }],
    spec: [
      { label: "Approach", value: "Byte-level token splitting, implemented from scratch" },
      { label: "Purpose", value: "Understanding tokenization mechanics ahead of model input" },
      { label: "Language", value: "C++, no external tokenizer library" },
    ],
  },
];

export const stack: Record<string, Record<string, [string, string, string?]>> = {
  Languages: {
    JavaScript: [
      "The backbone of every service I've built.",
      "From Express APIs and Socket.IO dashboards to BullMQ workers — JavaScript runs the full backend surface of Webhook Relay, Scribble, and the TBI LMS.",
      "Webhook Relay · Scribble · TBI LMS",
    ],
    TypeScript: [
      "Kept a growing API surface predictable.",
      "QualityVeda's Next.js + Node codebase is typed end-to-end — with 20+ integrated endpoints, static types caught contract mismatches before they hit production.",
      "QualityVeda",
    ],
    C: [
      "No framework to hide the hard parts.",
      "Built a multi-threaded HTTP proxy from raw Berkeley sockets — pthreads, a hand-rolled LRU cache with mutex-protected eviction, and semaphore-controlled pooling for 400 concurrent connections.",
      "HTTP Proxy Server",
    ],
    SQL: [
      "Every schema starts on paper before Prisma touches it.",
      "TBI's LMS, QualityVeda's certification platform, and Webhook Relay's ingestion API all began as hand-designed relational schemas, optimized for the query patterns each product actually needed.",
      "TBI LMS · QualityVeda · Webhook Relay",
    ],
    Java: [
      "Coursework and DSA problem-solving.",
      "Used alongside C++ for algorithm-heavy academic work at KIET — the theory backing the systems thinking that shows up in the C proxy server.",
    ],
    Python: [
      "Scripting and FastAPI experiments.",
      "Used for automation scripts and quick API prototypes outside the core Node.js stack.",
    ],
  },
  Backend: {
    "Node.js": [
      "Non-blocking I/O is the whole point.",
      "It's why Webhook Relay can ingest and fan out thousands of concurrent events without paying a thread-per-connection cost — the event loop does the heavy lifting.",
      "Webhook Relay",
    ],
    "Express.js": [
      "The REST layer under three production systems.",
      "Powers the ingestion API in Webhook Relay, the 20+ endpoint surface in QualityVeda, and the onboarding/funding workflows in TBI's LMS.",
      "Webhook Relay · QualityVeda · TBI LMS",
    ],
    WebSockets: [
      "Sub-second sync for a two-player canvas.",
      "Scribble broadcasts every pixel stroke to all connected clients in real time — the entire game (drawing, timers, voting) runs over a single persistent connection per client.",
      "Scribble",
    ],
    Redis: [
      "One store, two very different jobs.",
      "Session state, persistence, and live voting in Scribble; job queues and rate-limiting in Webhook Relay. Same engine, opposite access patterns.",
      "Scribble · Webhook Relay",
    ],
    "Pub/Sub": [
      "Decouples ingestion from delivery.",
      "In Webhook Relay, a slow or failing subscriber never blocks a fast one — events fan out independently once they hit the queue.",
      "Webhook Relay",
    ],
    Microservices: [
      "Split by workflow, not by convenience.",
      "TBI's onboarding, funding, and mentoring flows are independently deployable services, so a change to one doesn't risk the others.",
      "TBI LMS",
    ],
    FastAPI: ["Python-side API prototyping.", "Used outside the core Node stack for quick service experiments."],
    BullMQ: [
      "Retries that actually recover.",
      "Drives Webhook Relay's exponential-backoff retry logic and dead-letter queue — failed deliveries get replayed instead of silently disappearing.",
      "Webhook Relay",
    ],
  },
  Frontend: {
    "Next.js": [
      "Server-rendered for a live production audience.",
      "QualityVeda (qualityveda.co) runs on Next.js — a real product serving pathology lab technicians pursuing NABL/ISO 15189 certification, not a demo.",
      "QualityVeda",
    ],
    "React.js": [
      "Real-time dashboards, not static pages.",
      "Built the live application-tracking UI for TBI's LMS and the delivery-status dashboard for Webhook Relay.",
      "TBI LMS · Webhook Relay",
    ],
    "Redux Toolkit": [
      "State for multi-role dashboards.",
      "Manages the different views and permissions across TBI's onboarding dashboards and QualityVeda's course/progress tracking.",
      "TBI LMS · QualityVeda",
    ],
    Zustand: [
      "Lighter state where Redux was overkill.",
      "Used for smaller, self-contained UI slices that didn't need a full store.",
    ],
    "Tailwind CSS": [
      "Fast, consistent styling across every dashboard.",
      "Kept design consistent across QualityVeda, Webhook Relay's dashboard, and TBI's frontend without a custom design system.",
    ],
    "Web Workers": [
      "Kept real-time UIs from freezing.",
      "Offloaded heavier client-side work off the main thread so live updates in dashboards stayed smooth under load.",
    ],
  },
  "Databases & ORM": {
    PostgreSQL: [
      "The relational core of everything serious.",
      "TBI's LMS, QualityVeda's certification platform, and Webhook Relay's ingestion API all sit on PostgreSQL, chosen for the strict relational guarantees each product needed.",
      "TBI LMS · QualityVeda · Webhook Relay",
    ],
    "Prisma ORM": [
      "A 50% response-time cut, measured.",
      "Prisma query extensions were the single biggest performance win on the TBI LMS — cutting API response time in half without a schema rewrite.",
      "TBI LMS",
    ],
    MongoDB: [
      "Used where relations weren't the point.",
      "Reached for when schema flexibility mattered more than strict relational integrity.",
    ],
    MySQL: [
      "Early projects and coursework.",
      "Used before standardizing on PostgreSQL for production work.",
    ],
  },
  "Tools & Platforms": {
    AWS: [
      "Where QualityVeda actually runs.",
      "Deployed and hosts the production QualityVeda platform — real infrastructure, real uptime requirements.",
      "QualityVeda",
    ],
    Docker: [
      "Consistent environments, no 'works on my machine.'",
      "Containerized services to keep dev and deployment environments identical across projects.",
    ],
    "Redis Clusters": [
      "Scaling past a single node.",
      "Explored clustering to keep Webhook Relay's queue throughput from becoming a bottleneck as event volume grows.",
      "Webhook Relay",
    ],
    "Socket.IO": [
      "The dashboard that shows delivery status live.",
      "Powers Webhook Relay's real-time dashboard — every queued, retrying, delivered, and dead-lettered event, visible the moment it changes.",
      "Webhook Relay",
    ],
    Linux: [
      "Home turf, especially in C.",
      "Built and debugged the HTTP proxy server directly against Linux sockets and pthreads — no abstraction layer to hide behind.",
      "HTTP Proxy Server",
    ],
    "Git / GitHub": [
      "40+ repos, version-controlled from day one.",
      "Every project in this portfolio — and plenty that aren't — tracked from the first commit.",
    ],
  },
};

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "KIET Group of Institutions — Ghaziabad, India",
    range: "Oct 2022 – Present",
    metric: "CGPA 8.0 / 10",
  },
  {
    degree: "Intermediate (12th Grade)",
    school: "Aatmadeep Vidyalaya — Gorakhpur, India",
    range: "2022",
    metric: "78.9%",
  },
];

export const repos = [
  { label: "Webhook Relay", full: "Prasannam23/Webhookrelay" },
  { label: "Scribble", full: "Prasannam23/sribble-backend" },
  { label: "QualityVeda", full: "Prasannam23/qualityveda2" },
  { label: "TBI Frontend", full: "Prasannam23/Tbi-frontend-repo-proof-of-work-" },
];

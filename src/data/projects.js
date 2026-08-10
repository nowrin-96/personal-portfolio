export const projects = [
  {
    id: "bench-rotation",
    title: "BENCH ROTATION",
    subtitle: "Automated Classroom Seating & Pair-Rotation System",
    category: "Full Stack",
    isFlagship: true,
    liveUrl: "https://seating-arrangement-lqcw.onrender.com",
    status: "Live Production System",
    year: "2026",
    summary: "A full-stack classroom seating and automated rotation engine engineered to intelligently schedule student seating arrangements, prevent repeated pairings, and streamline classroom management.",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "SQLite",
      "better-sqlite3",
      "JWT",
      "bcrypt",
      "express-rate-limit"
    ],
    stats: {
      students: "55 Students",
      benches: "20 Benches",
      columns: "4 Columns",
      status: "Live Hosted"
    },
    problem: "Manual classroom seating management in large batches often leads to fixed, unequal learning positions, repetitive benchmate pairings, and tedious administrative overhead when updating daily arrangements.",
    solution: "An automated algorithmic web system that executes daily position shifts across classroom columns while running a weekly zero-repeat student shuffle engine using a Mulberry32 PRNG greedy pair-tracking algorithm.",
    features: [
      "Daily Bench Shift: Column seats automatically shift down by 1 position daily, wrapping cleanly from last to first bench.",
      "Weekly Zero-Repeat Shuffle: Generates seating layouts that actively minimize duplicate student pairings using candidate evaluation algorithms.",
      "Classroom Data Model: Configured for 55 students across 20 benches (C1: 5 female benches / 13 seats; C2-C4: 15 male benches / 42 seats).",
      "Student Portal: Personalized seat, column, row, bench, roll number, and benchmate views with date navigation.",
      "Admin Dashboard: Complete classroom chart control, student CRUD, bench configuration, printable notice-board sheets, and JSON backup/restore."
    ],
    architecture: {
      frontend: "React + Vite + Tailwind CSS with dark responsive interface",
      backend: "Node.js + Express with rate-limiting & JWT session security",
      database: "SQLite via better-sqlite3 for high-throughput synchronous queries",
      fallback: "Client-side localStorage synchronization engine for offline resilience"
    }
  },
  {
    id: "aid4palestine",
    title: "AID4PALESTINE",
    subtitle: "Humanitarian Donation & M-Commerce Web Platform",
    category: "Full Stack",
    isFlagship: false,
    liveUrl: "http://16.171.200.192/",
    githubUrl: "https://github.com/nowrin-96/aid4palestine",
    status: "AWS Deployed",
    year: "2025",
    summary: "A compassionate donation and product support platform enabling transparent contributions and humanitarian product browsing for Palestine aid efforts.",
    techStack: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "AWS EC2",
      "AWS S3"
    ],
    stats: {
      type: "M-Commerce Platform",
      backend: "PHP & MySQL",
      hosting: "AWS EC2 / S3",
      status: "Deployed"
    },
    problem: "Direct, transparent digital donation tracking requires structured user authentication, transaction logging, and reliable cloud infrastructure.",
    solution: "Developed a full-stack PHP/MySQL web application hosted on AWS EC2 instances, providing session authentication, product support listings, and personal donation history dashboards.",
    features: [
      "User Registration & Session Authentication: Password hashing and protected user dashboards.",
      "Support Product Catalog: Interactive aid packages (Food packs, Clean Water, Medical Kits) with transparent pricing.",
      "Donation History Dashboard: Real-time user logs tracking past contributions and personal impact.",
      "AWS Cloud Infrastructure: EC2 instance execution and S3 asset delivery."
    ]
  },
  {
    id: "lms-system",
    title: "LEARNING MANAGEMENT SYSTEM",
    subtitle: "Frontend Academic Course & Student Portal",
    category: "Academic App",
    isFlagship: false,
    status: "Completed",
    year: "2025",
    summary: "An academic web application designed to demonstrate structured frontend component layout, client-side data persistence, and multi-role user flows.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage API"
    ],
    stats: {
      type: "Academic Project",
      storage: "LocalStorage",
      roles: "Admin & Student",
      status: "Completed"
    },
    problem: "Demonstrating dynamic application state and multi-user interactions purely on the client-side without relying on complex external backend setups.",
    solution: "Built a sleek, modular JavaScript single-page dashboard utilizing local storage engine abstractions to manage course catalogues, student registrations, and administrative approval queues.",
    features: [
      "Dual Role Dashboards: Dedicated interfaces for Administrators and Enrolled Students.",
      "Course Catalog & Management: Add, list, filter, and modify academic course modules.",
      "Enrollment Request Workflows: Client-side registration, pending queues, and approval state tracking.",
      "LocalStorage Data Handling: Robust JSON state persistence across browser reloads."
    ]
  },
  {
    id: "ajce-4ps",
    title: "AJCE MARKETING MIX (4Ps)",
    subtitle: "Interactive Higher Education Case Study Website",
    category: "Web / UX",
    isFlagship: false,
    liveUrl: "https://nowrin-96.github.io/4ps-case-study/",
    githubUrl: "https://github.com/nowrin-96/4ps-case-study",
    status: "Live Web Project",
    year: "2025",
    summary: "A responsive single-page web application analyzing Amal Jyothi College of Engineering's 4Ps Marketing Mix strategy through semantic HTML5 and clean CSS styling.",
    techStack: [
      "HTML5",
      "CSS3",
      "Responsive Layouts",
      "Data Visualization Tables"
    ],
    stats: {
      type: "Case Study Web",
      layout: "Single-Page Nav",
      focus: "4Ps Analysis",
      status: "Published"
    },
    problem: "Presenting multi-dimensional institutional marketing data (Product, Price, Place, Promotion) in a readable, responsive, and visually engaging web format.",
    solution: "Designed a clean single-page site with fixed navigation, structured data tables, embedded media highlights, and responsive media queries.",
    features: [
      "Semantic HTML5 Architecture: Clean document structure with navigation, section anchors, and accessible tables.",
      "Fee & Academic Data Visuals: Structured pricing comparison tables across engineering and computer application degrees.",
      "Mobile-Optimized Navigation: Smooth-scrolling sidebar and adaptive collapsible layouts for smaller viewports."
    ]
  }
];

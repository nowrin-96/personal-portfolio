export const notes = [
  {
    id: "seating-engine-algo",
    title: "Building a Zero-Repeat Seating Engine with SQLite & Mulberry32",
    date: "August 2026",
    category: "Algorithm & Architecture",
    readTime: "4 min read",
    snippet: "How we structured deterministic candidate generation to prevent repeated student pair assignments across weekly classroom rotations.",
    content: `When building the Bench Rotation platform, the primary algorithmic challenge was generating weekly classroom seating arrangements that strictly avoid repeating benchmate pairings across consecutive weeks.

### The Algorithm Design
1. **Daily Column Shift**: Seats shift down by 1 position daily in a circular buffer sequence.
2. **Weekly Shuffle**: Using a Mulberry32 Pseudo-Random Number Generator (PRNG) seeded by the configured start date, the system generates candidate arrangements.
3. **Greedy Pair Evaluation**: Candidate layouts are evaluated against historical seating matrices. Arrangements that introduce previously paired students are discarded or penalized, yielding an optimal arrangement.`
  },
  {
    id: "aws-ec2-s3-php",
    title: "Deploying PHP & MySQL Applications on AWS EC2 with S3 Storage",
    date: "July 2026",
    category: "Cloud Engineering",
    readTime: "5 min read",
    snippet: "A practical guide on setting up LAMP stack instances on AWS EC2, configuring security groups, and offloading asset media to S3 buckets.",
    content: `In the Aid4Palestine donation platform project, we deployed a traditional PHP/MySQL architecture onto AWS EC2 cloud instances.

### Key Deployment Insights
- **Security Groups**: Restricting database ports while exposing HTTP/HTTPS endpoints safely.
- **S3 Bucket Integration**: Decoupling file attachments and product imagery from the compute instance filesystem to guarantee persistence.
- **Session Management**: Ensuring PHP session cookies remain secure across client requests.`
  },
  {
    id: "dark-ui-design-system",
    title: "Designing High-Contrast Dark UIs with Precision Spacing",
    date: "June 2026",
    category: "UI/UX & Design",
    readTime: "3 min read",
    snippet: "Lessons learned while building modern dark developer interfaces using subtle contrast ratios, neutral color palettes, and deliberate whitespace.",
    content: `A truly premium dark user interface is built on restraint. Avoid pure #000000 black where subtle near-black shades (#050505, #0A0A0A) allow for layer depth and soft glass surfaces.

### Core Principles
- **Visual Hierarchy**: Use typography scale (Inter / Manrope) and muted secondary grays (#A1A1AA) instead of harsh white everywhere.
- **Subtle Accents**: Reserve vibrant cool indigo (#6366F1) for interactive focal points, buttons, and active indicators.
- **Micro-Interactions**: Hover glows and soft borders bring life without overwhelming the user.`
  }
];

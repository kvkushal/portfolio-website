/**
 * Portfolio Data - Kushal KV
 * Final curated content from resume
 */

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
    name: 'Kushal KV',
    initials: 'KV',
    role: 'Data Scientist & Machine Learning Engineer',
    tagline: 'I build ML systems that work on real-world data — monitoring, prediction, and pipelines that run reliably.',
    email: 'kushalkv2004@gmail.com',

    bio: `I'm a Computer Science (Data Science) undergraduate at BMS College of Engineering, graduating in 2027, with a strong interest in building machine learning systems that work reliably on real-world data.

I'm most drawn to problems where models meet production constraints, where data is messy, signals are delayed, and systems need to handle failure gracefully. My work often sits at the intersection of applied machine learning and backend infrastructure, focusing on monitoring, prediction, and decision-making pipelines rather than isolated notebooks.

I enjoy working end to end, from feature engineering and rigorous model validation to serving models through APIs and building scoring pipelines or dashboards that people can actually use. I care about clarity in both code and reasoning, and I prefer practical systems that hold up under real usage.

As President of DSync, the Data Science Club at BMSCE, I've helped build a hands-on learning culture by organizing technical workshops, mentoring peers, and encouraging experimentation beyond coursework.`,

    location: 'Bengaluru, India',
    institution: 'BMS College of Engineering',
    degree: 'B.E. Computer Science (Data Science)',
    duration: 'October 2023 - Present',
    cgpa: '9.27',
    resumeUrl: '/Kushal KV.pdf',
};

// ============================================
// EDUCATION
// ============================================
export const education = [
    {
        institution: 'BMS College of Engineering',
        degree: 'B.E. Computer Science (Data Science)',
        duration: 'October 2023 - Present',
        score: 'CGPA: 9.27',
    },
];

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
    github: 'https://github.com/kvkushal',
    linkedin: 'https://www.linkedin.com/in/kushal-kv/',
};

// ============================================
// FEATURED PROJECTS (homepage - 3 projects)
// Order: Aadhaar NEXUS, DetectAI, HLS Monitoring Dashboard
// ============================================
export const featuredProjects = [
    {
        id: 1,
        slug: 'aadhaar-nexus',
        title: 'Aadhaar N.E.X.U.S',
        shortDescription: 'Governance analytics and early-warning system for UIDAI operational metadata across 36 States/UTs and 645+ districts.',
        thumbnail: '/thumbnails/aadhaar-nexus.png',
        techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
        githubUrl: 'https://github.com/kvkushal/UIDAI-Hackathon',
        liveUrl: 'https://aadhaar-nexus.streamlit.app/',

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'A governance analytics and early-warning system that transforms UIDAI operational metadata into actionable district-level service equity signals across 36 States/UTs and 645+ districts.',
        quickFacts: {
            type: 'Governance Analytics & Policy Intelligence',
        },

        // Problem statement
        problemStatement: [
            'Operational stress and access barriers in Aadhaar services emerge unevenly across regions.',
            'Raw transaction counts fail to capture quality, equity, and system strain.',
            'No structured early-warning framework exists to prioritize intervention at district level.',
            'Metadata only — no citizen-level data, no ground truth labels.',
        ],

        // System overview
        systemOverview: {
            diagram: '/projects/aadhaar-nexus/system-diagram.png',
            description: 'Data Ingestion → Cleaning & Standardization → Aggregation → Metric Computation → Risk Classification → Dashboard',
            points: [
                'UIDAI Enrollment, Demographic Updates, and Biometric Updates data ingestion',
                'District normalization with zero-data-loss mapping',
                'Aggregation from pincode → district → state level',
                '4 composite governance indicators: DEI, AHS, UBS, SRS',
                'Rule-based risk classification engine',
                'Interactive Streamlit dashboard with Plotly visualizations',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Zero-loss district normalization across 36 states',
                'Legacy district name mapping dictionary',
                'Time-series alignment and missing-month handling',
                'Aggregation logic from pincode inputs to macro trends',
            ],
            models: [
                'Digital Equity Index (DEI) — measures service fairness',
                'Access Health Score (AHS) — measures infrastructure strain',
                'Update Burden Score (UBS) — captures administrative overload',
                'Stability Risk Score (SRS) — measures operational volatility',
            ],
            pipelines: [
                'Statistical scoring with within-state normalization',
                'Composite index formulation',
                'Rule-based early-warning classification',
                'Threshold-driven district categorization',
            ],
            apisUi: [
                'Streamlit dashboard with interactive choropleth maps',
                'District drill-down analysis',
                'PDF-ready district diagnostic reports',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/aadhaar-nexus/screenshot-1.png', caption: 'State-level equity overview' },
            { src: '/projects/aadhaar-nexus/screenshot-2.png', caption: 'District risk classification' },
            { src: '/projects/aadhaar-nexus/screenshot-3.png', caption: 'Choropleth map visualization' },
            { src: '/projects/aadhaar-nexus/screenshot-4.png', caption: 'District diagnostic report' },
        ],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/demo_qy1rc4.mp4', caption: 'Demo: State selection → District analysis → Risk classification' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Chose rule-driven scoring over predictive ML for explainability',
            'Avoided black-box models to maintain policy transparency',
            'Focused on operational metadata only to preserve privacy',
            'Used within-state normalization to avoid unfair inter-state comparisons',
            'Prioritized interpretability over model complexity',
        ],

        // Future improvements
        futureImprovements: [
            'Add temporal drift tracking across quarters',
            'Integrate live API ingestion if available',
            'Add automated anomaly detection',
            'Introduce intervention outcome tracking loop',
            'Expand to multi-year trend analysis',
        ],

        whyItMatters: 'Demonstrates how structured governance metadata can be transformed into explainable, policy-ready intelligence systems without relying on black-box machine learning. It bridges the gap between raw operational data and actionable public service insights.',
    },
    {
        id: 2,
        slug: 'detectai-app',
        title: 'DetectAI App',
        shortDescription: 'Android app to detect AI-generated text and images.',
        thumbnail: '/thumbnails/detectai.png',
        techStack: ['Python', 'Flask', 'Hugging Face', 'Kotlin'],
        githubUrl: 'https://github.com/kvkushal/DetectAI-App',
        apkUrl: 'https://github.com/kvkushal/detectai-app/releases',
        liveUrl: null,

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'Helps users identify whether text or images are AI-generated.',
        quickFacts: {
            type: 'Mobile App + ML Backend',
        },

        // Problem statement
        problemStatement: [
            'AI-generated content is becoming harder to distinguish from human-written material.',
            'Most detection tools are either unreliable or too technical for everyday users.',
            'This project focuses on making AI detection accessible through a simple mobile interface.',
        ],

        // System overview with diagram
        systemOverview: {
            diagram: '/projects/detectai/system-diagram.png',
            points: [
                'Android app as primary user interface',
                'Flask backend handling inference requests',
                'Multiple ML models for text and image analysis',
                'Probability-based output for clarity',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Mixed datasets of human-written and AI-generated text',
                'AI-generated and real image samples',
            ],
            models: [
                'Text classification models using linguistic and statistical features',
                'Image-based AI detection models via Hugging Face',
            ],
            pipelines: [
                'Input preprocessing and normalization',
                'Confidence score aggregation',
            ],
            apisUi: [
                'Flask REST API for inference',
                'Android UI displaying prediction probabilities and explanations',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/detectai/text-detection.png', caption: 'Text detection result screen' },
            { src: '/projects/detectai/image-detection.png', caption: 'Image detection result' },
        ],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/v1767200263/demo_qctole.mp4', caption: 'App demo: input → result' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Focused on probability scores instead of binary labels',
            'Avoided heavy on-device ML to keep app lightweight',
            'Prioritized usability over model complexity',
        ],

        // Future improvements
        futureImprovements: [
            'Add support for audio and video detection',
            'Improve overall detection accuracy',
            'Support batch analysis',
        ],

        whyItMatters: 'Gives everyday users a simple way to judge content authenticity without technical expertise.',
    },
    {
        id: 3,
        slug: 'hls-monitor-dashboard',
        title: 'HLS Monitoring Dashboard',
        shortDescription: 'A real-time HLS monitoring system built to track stream reliability, analyze media health, and surface actionable diagnostics across multiple live channels.',
        thumbnail: '/thumbnails/hls-monitor.png',
        techStack: ['Node.js', 'MongoDB', 'Express', 'Socket.io', 'FFmpeg', 'React', 'Tailwind'],
        githubUrl: 'https://github.com/kvkushal/HLS-Monitoring-Dashboard',
        liveUrl: 'https://hls-monitor.onrender.com/',

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'Production-Grade Real-Time Streaming Health Platform. A comprehensive HLS monitoring system designed for enterprise-scale stream reliability tracking, deep media analysis, and actionable operational diagnostics.',
        quickFacts: {
            type: 'Production Streaming Infrastructure',
        },

        // Problem statement
        problemStatement: [
            'Large-scale streaming platforms require continuous visibility into stream health.',
            'Basic uptime checks do not capture media-level failures such as sequence discontinuities, segment download failures, audio/video corruption, stale manifests, and latency spikes.',
            'Operators need structured health scoring and real-time diagnostics rather than raw logs.',
        ],

        // System overview
        systemOverview: {
            diagram: '/projects/hls-monitor/system-diagram.png',
            description: 'Three-layer production architecture for scalable stream monitoring:',
            points: [
                'Monitoring Layer — Polls HLS manifests at fixed intervals, tracks media sequence progression, detects discontinuities and stale updates',
                'Processing Layer — FFmpeg/FFprobe for media inspection, extracts codec, resolution, bitrate, measures audio levels, generates thumbnails',
                'Data & Realtime Layer — MongoDB for metrics storage with TTL indexes for automatic cleanup, Socket.io for live dashboard updates',
            ],
        },

        // Core features (custom section for this project)
        coreFeatures: {
            realTimeDashboard: [
                'Live stream cards with health score',
                'Media sequence tracking',
                'Segment and error counters',
                'Instant visual status indicators',
            ],
            healthScoring: [
                'Sliding window evaluation',
                'Error-weighted scoring model',
                'Recovery decay logic',
                'Sequence jump penalties',
            ],
            mediaAnalysis: [
                'Video codec detection',
                'Resolution and FPS extraction',
                'Audio channel inspection',
                'Bitrate measurement',
                'Silence detection',
            ],
            diagnostics: [
                'Downloadable daily logs',
                'Error classification display',
                'Timeline of recent failures',
                'Stream-specific investigation view',
            ],
            security: [
                'Rate limiting',
                'Input validation',
                'Helmet security headers',
                'Safe stream deletion flow',
                'Controlled FFmpeg concurrency',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'HLS polling engine with rolling metrics window',
                'Media inspection pipeline using FFprobe',
                'Health scoring algorithm',
                'MongoDB schema with TTL indexes',
                'Real-time event broadcasting with Socket.io',
            ],
            models: [
                'Sliding window health evaluation',
                'Error-weighted scoring model',
                'Recovery decay logic',
            ],
            pipelines: [
                'HLS manifest polling at 7-second intervals',
                'Media sequence progression tracking',
                'FFmpeg concurrency control',
            ],
            apisUi: [
                'Multi-stream monitoring dashboard',
                'Stream-level analytics view',
                'Live signal strength visualization',
                'Error history and metrics charts',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/hls-monitor/stream-analysis-1.png', caption: 'Stream analysis with live signal strength' },
            { src: '/projects/hls-monitor/stream-analysis-2.png', caption: 'Signal history and media diagnostics' },
        ],

        videos: [
            { src: 'https://player.cloudinary.com/embed/?cloud_name=dywnxdmgf&public_id=demo_k96uee', caption: 'Demo: Real-time stream monitoring and analysis' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            '7-second polling interval to balance load and detection speed',
            'Sliding window metrics instead of cumulative counters',
            'TTL-based cleanup to prevent database growth',
            'Concurrency control for FFmpeg execution',
            'Real-time push updates instead of client polling',
        ],

        // Future improvements
        futureImprovements: [
            'Alert integrations (Slack, PagerDuty)',
            'Multi-tenant authentication',
            'Multi-CDN comparison view',
            'Horizontal scaling with Redis',
            'Kubernetes deployment setup',
        ],

        whyItMatters: 'Transforms raw streaming metrics into structured operational intelligence that operators can act on in real time.',
    },
];

// ============================================
// ALL PROJECTS (for /projects page)
// Order: Aadhaar NEXUS, DetectAI, HLS Monitoring Dashboard, ScamShield, StreamProbeX, F1, PlantasticCare
// ============================================
export const allProjects = [
    // Featured projects come first via spread
    ...featuredProjects,
    // Then remaining projects in order: ScamShield, F1, PlantasticCare
    // Note: We need to move F1 out of featured and add non-featured projects here
    {
        id: 4,
        slug: 'scamshield-ai',
        title: 'ScamShield AI',
        shortDescription: 'Hybrid scam detection for job offer verification.',
        thumbnail: '/thumbnails/scamshield.png',
        techStack: ['Python', 'Langflow', 'FastAPI'],
        githubUrl: 'https://github.com/kvkushal/scamshield',
        liveUrl: null,

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'Detects job scams by analyzing messages, URLs, and recruiter behavior.',
        quickFacts: {
            type: 'ML-Assisted Decision System',
        },

        // Problem statement
        problemStatement: [
            'Job scams often look legitimate and target vulnerable job seekers.',
            'Manual verification is slow and inconsistent.',
            'This project aims to provide quick, explainable scam risk assessment.',
        ],

        // System overview
        systemOverview: {
            diagram: '/projects/scamshield/langflow-architecture.png',
            points: [
                'Message and URL analysis pipeline',
                'Domain validation and heuristic checks',
                'LLM-based reasoning for context understanding',
                'Final risk score aggregation',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Scam and legitimate job message samples',
                'Known malicious domain patterns',
            ],
            models: [
                'Rule-based heuristics',
                'LLM-based reasoning via Langflow',
            ],
            pipelines: [
                'URL and text feature extraction',
                'Confidence scoring and normalization',
            ],
            apisUi: [
                'FastAPI endpoint for analysis',
                'JSON-based structured output',
            ],
        },

        // Screenshots (none for this project)
        screenshots: [],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/v1767200326/demo_sso1we.mp4', caption: 'Demo: analyzing a suspicious message' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Chose hybrid approach over pure ML for explainability',
            'Avoided end-to-end deep learning to reduce false confidence',
            'Optimized for clarity rather than accuracy alone',
        ],

        // Future improvements
        futureImprovements: [
            'Add feedback loop for user corrections',
            'Expand domain reputation sources',
            'Add browser extension',
        ],

        whyItMatters: 'Helps job seekers quickly judge suspicious offers before they lose money or personal data.',
    },
    {
        id: 5,
        slug: 'hls-stream-ops',
        title: 'StreamProbeX',
        shortDescription: 'Real-time HLS reliability intelligence for fast incident diagnosis and operator clarity.',
        thumbnail: '/thumbnails/streamprobex.png',
        techStack: ['Video Streaming', 'System Reliability', 'FastAPI', 'React', 'Observability'],
        githubUrl: 'https://github.com/kvkushal/hls-stream-ops',
        liveUrl: 'https://hls-stream-ops.onrender.com/',

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'StreamProbeX is an operator-focused reliability platform for HLS video streams. It transforms low-level streaming metrics into actionable health signals, structured incidents, and explainable root cause classification. This project focuses on practical stream reliability engineering, not raw analytics dashboards.',
        quickFacts: {
            type: 'Stream Reliability Platform',
        },

        // Problem statement
        problemStatement: [
            'Live video failures are difficult to diagnose during ongoing broadcasts.',
            'Raw metrics overwhelm engineers without clearly explaining what failed.',
            'Operators need fast, structured answers instead of scattered telemetry.',
            'StreamProbeX solves this by turning stream behavior into health states, incidents, and explainable diagnostics.',
        ],

        // System overview
        systemOverview: {
            diagram: '/projects/streamprobex/system-diagram.png',
            description: 'StreamProbeX follows a three-layer reliability architecture:',
            points: [
                'Monitoring Layer — Continuous HLS ingestion and metric extraction',
                'Investigation Layer — Health evaluation, incident lifecycle management, and rule-based root cause classification',
                'Analysis Layer — Historical trend inspection using rolling in-memory windows',
            ],
            coreCapabilities: [
                'HLS manifest and segment monitoring',
                'Rolling window health evaluation',
                'Incident state transitions (Open → Acknowledged → Resolved)',
                'Root cause classification with evidence',
                'Operator-first dashboard design',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Live and simulated HLS stream inputs',
                'Segment-level latency, error rate, and availability metrics',
            ],
            models: [
                'Deterministic rule-based incident detection',
                'Health state evaluation engine',
                'Root cause classification with confidence scoring',
            ],
            pipelines: [
                'Rolling 2-minute health windows',
                'Short-term historical buffers for trend inspection',
                'State-driven incident lifecycle management',
            ],
            apisUi: [
                'FastAPI backend for stream monitoring and incident control',
                'REST endpoints for metrics, health, and incident management',
                'React + TypeScript dashboard optimized for clarity and speed',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/streamprobex/dashboard-overview.png', caption: 'Stream health dashboard' },
            { src: '/projects/streamprobex/incident-timeline.png', caption: 'Incident timeline view' },
        ],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/v1767200388/demo_nff6av.mp4', caption: 'Demo: healthy → incident → diagnosis' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Chose rule-based logic over ML for transparency and operator trust',
            'Prioritized speed and clarity over deep statistical analytics',
            'Used in-memory storage to simplify operational workflow',
            'Structured the UI into Monitoring → Investigation → Analysis modes',
        ],

        // Future improvements
        futureImprovements: [
            'Persistent storage for long-term trend analysis',
            'Multi-CDN comparison support',
            'Alert integrations (Slack / Webhooks)',
            'Adaptive thresholds instead of fixed rules',
        ],

        whyItMatters: 'Stream reliability is a systems engineering problem, not just a monitoring problem. StreamProbeX demonstrates how to design explainable, production-oriented diagnostics instead of building dashboards filled with raw telemetry. It reflects real-world thinking about reliability, incident response, and operator usability.',
    },
    {
        id: 6,
        slug: 'f1-race-predictor',
        title: 'Formula 1 Race Predictor',
        shortDescription: 'ML-powered race outcome predictions using real-time conditions.',
        thumbnail: '/thumbnails/f1-predictor.png',
        techStack: ['Python', 'LightGBM', 'FastAPI'],
        githubUrl: 'https://github.com/kvkushal/F1-Race-Predictor',
        liveUrl: 'https://f1raceprediction.netlify.app/',

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'Predicts race outcomes using historical data and real-time race conditions.',
        quickFacts: {
            type: 'ML System + Web Dashboard',
            tech: 'Python, LightGBM, FastAPI, React',
        },

        // Problem statement
        problemStatement: [
            'Formula 1 race outcomes depend on many changing factors like weather, track type, and recent team performance.',
            'Fans and analysts often rely on intuition instead of data-backed predictions.',
            'This project explores whether structured historical data can produce reliable race predictions.',
        ],

        // System overview with diagram
        systemOverview: {
            diagram: '/projects/f1/system-diagram.png',
            points: [
                'Historical race, qualifying, and championship data ingestion',
                'Time-aware feature engineering for drivers and constructors',
                'ML inference exposed via FastAPI',
                'React frontend for user interaction and predictions',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Historical F1 race and qualifying datasets',
                'Weather and track metadata',
            ],
            models: [
                'LightGBM for structured tabular prediction',
                'Separate targets for qualifying position and race outcome',
            ],
            pipelines: [
                'Rolling window features for recent form',
                'Feature normalization and validation',
            ],
            apisUi: [
                'FastAPI endpoint for predictions',
                'React UI for selecting race conditions and viewing outputs',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/f1/prediction-results.png', caption: 'Race prediction results' },
            { src: '/projects/f1/race-selection.png', caption: 'Input selection form for race conditions' },
        ],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/v1767200174/demo_a3z5yx.mp4', caption: 'Demo: selecting race → prediction result' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Chose LightGBM over deep learning for interpretability and faster iteration',
            'Used rolling features to reflect real-world season dynamics',
            'Avoided live telemetry to keep system simple and reproducible',
        ],

        // Future improvements
        futureImprovements: [
            'Add driver retirement probability modeling',
            'Track prediction confidence over the season',
            'Improve UI explanations for non-technical users',
        ],

        whyItMatters: 'Demonstrates how ML systems can adapt to evolving time-series data and real-world uncertainty in competitive sports analytics.',
    },
    {
        id: 7,
        slug: 'plantasticcare',
        title: 'PlantasticCare',
        shortDescription: 'Community platform for indoor plant care guides.',
        thumbnail: '/thumbnails/plantastic.png',
        techStack: ['HTML', 'CSS', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/kvkushal/PlantasticCare',
        liveUrl: 'https://plantasticcare.onrender.com/',

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'A community-driven platform for indoor plant care guidance.',
        quickFacts: {
            type: 'Full-Stack Web Application',
        },

        // Problem statement
        problemStatement: [
            'Plant care information is scattered and often inconsistent.',
            'Beginners struggle to find reliable guidance and community help.',
            'This project centralizes plant care knowledge with user interaction.',
        ],

        // System overview
        systemOverview: {
            diagram: '/projects/plantastic/system-diagram.png',
            points: [
                'Static frontend with dynamic interactions',
                'Node.js backend with REST APIs',
                'MongoDB for users, posts, and favorites',
                'JWT-based authentication',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Structured plant care dataset',
                'User-generated forum content',
            ],
            models: [
                'MongoDB schemas for users, posts, comments',
            ],
            pipelines: [
                'Authentication and authorization flow',
                'Forum post and voting logic',
            ],
            apisUi: [
                'REST APIs for plants, forum, and user data',
                'Responsive frontend with PWA support',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/plantastic/plant-library.png', caption: 'Plant library page' },
            { src: '/projects/plantastic/forum.png', caption: 'Community forum' },
            { src: '/projects/plantastic/care.png', caption: 'Plant Care' },
        ],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/v1767200997/demo_wol0l0.mp4', caption: 'Demo: browse → forum → favorite' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Used vanilla JS instead of frameworks to understand fundamentals',
            'Focused on usability over advanced personalization',
            'Chose PWA for offline access without native app complexity',
        ],

        // Future improvements
        futureImprovements: [
            'Add personalized care reminders',
            'Increase Plant library',
            'Introduce moderation tools',
        ],

        whyItMatters: 'Turns scattered plant care advice into a structured, beginner-friendly platform with real user interaction.',
    },
];

// ============================================
// SKILLS (4-column grid)
// ============================================
export const capabilities = [
    {
        name: 'Languages',
        items: [
            'Python',
            'Java',
            'SQL',
            'R',
            'HTML/CSS',
            'Kotlin',
        ],
    },
    {
        name: 'Data Science & ML',
        items: [
            'Pandas, NumPy & scikit-learn',
            'TensorFlow',
            'Feature Engineering',
            'Exploratory Data Analysis',
            'Model Evaluation',
            'Data Visualization',
        ],
    },
    {
        name: 'Backend & APIs',
        items: [
            'FastAPI',
            'Flask',
            'REST API Design',
            'API Deployment & Integration',
            'Docker',
        ],
    },
    {
        name: 'Databases & Tools',
        items: [
            'PostgreSQL & SQL',
            'NoSQL (MongoDB)',
            'Firebase',
            'Android Studio',
            'Power BI',
            'Render & Vercel',
            'Git',
        ],
    },
];


// ============================================
// CONTACT CONFIGURATION
// ============================================
export const contactConfig = {
    apiEndpoint: 'https://formspree.io/f/mwvpekvg',
    intentCopy: {
        heading: "Let's talk",
        subtext: "Looking for data science internships and ML engineering roles where I can work on real problems. If you're building something where data matters, I'd like to hear about it.",
    },
};

// ============================================
// NAVIGATION
// ============================================
export const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

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

I'm most drawn to problems where models meet production constraints, situations where data is messy, signals are delayed, and systems need to handle failure gracefully. My work often sits at the intersection of applied machine learning and backend infrastructure, focusing on monitoring, prediction, and decision-making pipelines rather than isolated notebooks.

I enjoy working end-to-end, from feature engineering and model evaluation to serving models through APIs and designing systems that are maintainable and reproducible. I care about clarity in both code and reasoning, and I prefer practical solutions that hold up under real usage.

I'm currently looking for data science and machine learning roles where I can work on meaningful problems, learn from strong engineering teams, and contribute to systems that actually ship.`,

    location: 'Bengaluru, India',
    institution: 'BMS College of Engineering',
    degree: 'B.E. Computer Science (Data Science)',
    graduation: '2027',
    resumeUrl: '/Kushal KV (Resume).pdf',
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
    github: 'https://github.com/kvkushal',
    linkedin: 'https://www.linkedin.com/in/kushal-kv/',
};

// ============================================
// FEATURED PROJECTS (homepage - 3 projects)
// ============================================
export const featuredProjects = [
    {
        id: 1,
        slug: 'f1-race-predictor',
        title: 'Formula 1 Race Predictor',
        shortDescription: 'ML-powered race outcome predictions using real-time conditions.',
        thumbnail: '/thumbnails/f1-predictor.png',
        techStack: ['Python', 'LightGBM', 'FastAPI', 'React'],
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
        slug: 'hls-stream-ops',
        title: 'HLS Stream Operations',
        shortDescription: 'Real-time monitoring dashboard for HLS video streams.',
        thumbnail: '/thumbnails/hls-dashboard.png',
        techStack: ['Python', 'FastAPI', 'React', 'TypeScript'],
        githubUrl: 'https://github.com/kvkushal/hls-stream-ops',
        liveUrl: 'https://hls-stream-ops.onrender.com/',

        // --- DETAIL PAGE CONTENT ---

        // Hero section
        fullDescription: 'Real-time monitoring and diagnosis for video streaming systems.',
        quickFacts: {
            type: 'Monitoring Dashboard',
        },

        // Problem statement
        problemStatement: [
            'Video stream failures are hard to diagnose quickly during live events.',
            'Raw metrics overwhelm operators without explaining what went wrong.',
            'This project focuses on fast, actionable stream diagnosis.',
        ],

        // System overview
        systemOverview: {
            diagram: '/projects/hls/system-diagram.png',
            points: [
                'HLS stream ingestion',
                'Metric extraction and rolling windows',
                'Incident detection and root cause classification',
                'Operator-facing dashboard',
            ],
        },

        // What I built - detailed breakdown
        whatIBuilt: {
            data: [
                'Live and simulated HLS stream metrics',
            ],
            models: [
                'Rule-based incident detection',
                'Root cause classification logic',
            ],
            pipelines: [
                'Rolling window health evaluation',
                'Incident state transitions',
            ],
            apisUi: [
                'FastAPI backend for stream health',
                'React dashboard with timelines and alerts',
            ],
        },

        // Screenshots
        screenshots: [
            { src: '/projects/hls/dashboard-overview.png', caption: 'Stream health dashboard' },
            { src: '/projects/hls/incident-timeline.png', caption: 'Incident timeline view' },
        ],

        // Demo video
        videos: [
            { src: 'https://res.cloudinary.com/dywnxdmgf/video/upload/v1767200388/demo_nff6av.mp4', caption: 'Demo: healthy → incident → diagnosis' },
        ],

        // Key decisions & tradeoffs
        keyDecisions: [
            'Hid charts by default to reduce cognitive load',
            'Used rules instead of ML for predictable behavior',
            'Optimized for operator speed, not analytics depth',
        ],

        // Future improvements
        futureImprovements: [
            'Add historical trend analysis',
            'Integrate alerting systems',
            'Support multi-CDN comparison',
        ],

        whyItMatters: 'Focuses on fast, explainable diagnosis instead of overwhelming operators with raw metrics.',
    },
];

// ============================================
// ALL PROJECTS (for /projects page)
// ============================================
export const allProjects = [
    ...featuredProjects,
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
// CAPABILITIES (text-based, no logos)
// ============================================
export const capabilities = [
    {
        name: 'Modeling & Evaluation',
        description:
            'Feature engineering, classical machine learning, model validation, and error analysis with an emphasis on generalization.',
        tools: 'Pandas · NumPy · scikit-learn · LightGBM · Time Series',
    },
    {
        name: 'Data Pipelines & Decision Logic',
        description:
            'Working with messy, real-world data and building time-aware pipelines and decision logic for prediction and scoring systems.',
        tools: 'Python · SQL · Pandas',
    },
    {
        name: 'Applied ML & Inference Systems',
        description:
            'Building ML inference services and APIs, focusing on reliability, clarity, and predictable behavior.',
        tools: 'FastAPI · Flask · Docker · REST APIs',
    },
    {
        name: 'Experimentation & Analysis',
        description:
            'Iterating on models through structured experiments, exploratory analysis, and result interpretation.',
        tools: 'Git · Jupyter · Power BI',
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
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

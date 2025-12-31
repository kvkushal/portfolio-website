import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProjects, personalInfo } from '../data/portfolioData';
import { fadeInUp } from '../utils/animations';

/**
 * Icons
 */
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

/**
 * Section Heading Component
 */
const SectionHeading = ({ children }) => (
    <h2 className="text-xl font-semibold text-text-primary mb-4 pb-2 border-b border-border">
        {children}
    </h2>
);

/**
 * Bullet List Component
 */
const BulletList = ({ items }) => (
    <ul className="space-y-2">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1.5 text-xs">●</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

/**
 * What I Built Sub-Section
 */
const WhatIBuiltSection = ({ title, items }) => (
    <div className="mb-6">
        <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{title}</h4>
        <BulletList items={items} />
    </div>
);

/**
 * Project Detail Page
 * Shows full project information with all sections
 */
const ProjectDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = allProjects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-text-primary mb-4">Project Not Found</h1>
                    <Link to="/projects" className="text-accent hover:text-accent-hover">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    // Check if project has rich content
    const hasRichContent = project.problemStatement || project.systemOverview || project.keyDecisions;

    return (
        <div className="min-h-screen bg-cream">
            {/* Header */}
            <header className="w-full py-4 px-6 bg-dark">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link to="/" className="text-text-light font-semibold text-lg link-underline">
                        {personalInfo.name}
                    </Link>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm text-text-light-muted hover:text-text-light transition-colors duration-200"
                    >
                        <ArrowLeftIcon />
                        <span>Back</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12">
                <article className="max-w-4xl mx-auto px-6">

                    {/* ===== HERO SECTION ===== */}
                    <motion.section
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            {project.title}
                        </h1>

                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                            {project.fullDescription}
                        </p>

                        {/* Type + Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.quickFacts && (
                                <span className="text-sm px-3 py-1 bg-accent text-white rounded-full font-medium">
                                    {project.quickFacts.type}
                                </span>
                            )}
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-sm px-3 py-1 bg-offwhite text-text-secondary rounded-full border border-border"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 btn-fill rounded-md text-sm font-medium"
                                >
                                    <GitHubIcon />
                                    <span>View Code</span>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 btn-solid rounded-md text-sm font-medium"
                                >
                                    <ExternalLinkIcon />
                                    <span>Live Demo</span>
                                </a>
                            )}
                            {project.apkUrl && (
                                <a
                                    href={project.apkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 btn-solid rounded-md text-sm font-medium"
                                >
                                    <ExternalLinkIcon />
                                    <span>Download APK</span>
                                </a>
                            )}
                        </div>
                    </motion.section>

                    {/* Main Thumbnail */}
                    {project.thumbnail && (
                        <motion.div
                            className="mb-12 rounded-xl overflow-hidden bg-offwhite border border-border"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.title + " preview"}
                                className="w-full h-auto"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </motion.div>
                    )}

                    {/* ===== PROBLEM STATEMENT ===== */}
                    {project.problemStatement && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>Problem Statement</SectionHeading>
                            <BulletList items={project.problemStatement.map(item => item.replace(/^-\s*/, ''))} />
                        </motion.section>
                    )}

                    {/* ===== SYSTEM OVERVIEW ===== */}
                    {project.systemOverview && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>System Overview</SectionHeading>

                            {/* Flow description - only show if exists */}
                            {project.systemOverview.description && (
                                <p className="text-text-secondary mb-6 font-mono text-sm bg-offwhite px-4 py-3 rounded-lg border border-border">
                                    {project.systemOverview.description}
                                </p>
                            )}

                            {/* Diagram */}
                            {project.systemOverview.diagram && (
                                <div className="mb-6 rounded-xl overflow-hidden bg-offwhite border border-border">
                                    <img
                                        src={project.systemOverview.diagram}
                                        alt="System architecture diagram"
                                        className="w-full h-auto"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            )}

                            {/* Points */}
                            {project.systemOverview.points && (
                                <BulletList items={project.systemOverview.points} />
                            )}
                        </motion.section>
                    )}

                    {/* ===== WHAT I BUILT ===== */}
                    {project.whatIBuilt && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>What I Built</SectionHeading>

                            {/* Check if it's the new structured format or old array format */}
                            {Array.isArray(project.whatIBuilt) ? (
                                <BulletList items={project.whatIBuilt} />
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.whatIBuilt.data && (
                                        <WhatIBuiltSection title="Data" items={project.whatIBuilt.data} />
                                    )}
                                    {project.whatIBuilt.models && (
                                        <WhatIBuiltSection title="Models" items={project.whatIBuilt.models} />
                                    )}
                                    {project.whatIBuilt.pipelines && (
                                        <WhatIBuiltSection title="Pipelines" items={project.whatIBuilt.pipelines} />
                                    )}
                                    {project.whatIBuilt.apisUi && (
                                        <WhatIBuiltSection title="APIs / UI" items={project.whatIBuilt.apisUi} />
                                    )}
                                </div>
                            )}
                        </motion.section>
                    )}

                    {/* ===== SCREENSHOTS ===== */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>Screenshots</SectionHeading>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.screenshots.map((screenshot, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden bg-offwhite border border-border">
                                        <img
                                            src={screenshot.src}
                                            alt={screenshot.caption}
                                            className="w-full h-auto"
                                            onError={(e) => e.target.parentElement.style.display = 'none'}
                                        />
                                        {screenshot.caption && (
                                            <p className="text-sm text-text-muted p-3 border-t border-border">
                                                {screenshot.caption}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* ===== DEMO VIDEO ===== */}
                    {project.videos && project.videos.length > 0 && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>Demo Video</SectionHeading>
                            <div className="space-y-6">
                                {project.videos.map((video, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden bg-offwhite border border-border">
                                        <video controls className="w-full">
                                            <source src={video.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        {video.caption && (
                                            <p className="text-sm text-text-muted p-3 border-t border-border">
                                                {video.caption}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* ===== KEY DECISIONS ===== */}
                    {project.keyDecisions && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>Key Decisions & Tradeoffs</SectionHeading>
                            <BulletList items={project.keyDecisions} />
                        </motion.section>
                    )}

                    {/* ===== WHY IT MATTERS ===== */}
                    {project.whyItMatters && (
                        <motion.section
                            className="mb-12 p-6 bg-offwhite rounded-xl border border-border"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-text-primary mb-3">Why It Matters</h3>
                            <p className="text-text-secondary italic leading-relaxed">
                                {project.whyItMatters}
                            </p>
                        </motion.section>
                    )}

                    {/* ===== FUTURE IMPROVEMENTS ===== */}
                    {project.futureImprovements && (
                        <motion.section
                            className="mb-12"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SectionHeading>What I'd Improve Next</SectionHeading>
                            <BulletList items={project.futureImprovements} />
                        </motion.section>
                    )}

                </article>
            </main>

            {/* Footer */}
            <footer className="py-6 px-6 bg-dark border-t border-dark-border">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-text-light-muted text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ProjectDetailPage;

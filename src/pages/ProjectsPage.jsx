import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allProjects, personalInfo } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

/**
 * GitHub Icon
 */
const GitHubSmallIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

/**
 * External Link Icon
 */
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

/**
 * Arrow Icons
 */
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

/**
 * Placeholder for missing thumbnails
 */
const PlaceholderThumbnail = () => (
    <div className="w-full h-40 bg-cream-dark flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-text-muted opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>
);

/**
 * Simplified Project Card
 */
const ProjectCard = ({ project }) => {
    const detailUrl = "/project/" + project.slug;

    return (
        <motion.article
            className="bg-offwhite border border-border rounded-xl overflow-hidden flex flex-col h-full card-lift group"
            variants={fadeInUp}
        >
            {/* Thumbnail - clickable */}
            <Link to={detailUrl} className="block">
                <div className="project-image-container">
                    {project.thumbnail ? (
                        <img
                            src={project.thumbnail}
                            alt={project.title + " preview"}
                            className="project-image w-full h-40 object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <PlaceholderThumbnail />
                    )}
                </div>
            </Link>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Title - clickable */}
                <Link to={detailUrl}>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                        {project.title}
                    </h3>
                </Link>

                {/* Short description */}
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                    {project.shortDescription}
                </p>

                <div className="flex-grow" />

                {/* Quick links */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200 text-xs font-medium"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <GitHubSmallIcon />
                                <span>Code</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200 text-xs font-medium"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLinkIcon />
                                <span>Live</span>
                            </a>
                        )}
                        {project.apkUrl && (
                            <a
                                href={project.apkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200 text-xs font-medium"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLinkIcon />
                                <span>APK</span>
                            </a>
                        )}
                    </div>

                    {/* View details link */}
                    <Link
                        to={detailUrl}
                        className="text-xs text-accent hover:text-accent-hover font-medium flex items-center gap-1 transition-colors duration-200"
                    >
                        <span>Details</span>
                        <ArrowRightIcon />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

/**
 * All Projects Page
 */
const ProjectsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header - Dark theme */}
            <header className="w-full py-4 px-6 bg-dark">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-text-light font-semibold text-lg link-underline"
                    >
                        {personalInfo.name}
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-text-light-muted hover:text-text-light transition-colors duration-200"
                    >
                        <ArrowLeftIcon />
                        <span>Back</span>
                    </Link>
                </div>
            </header>

            {/* Main Content - Cream background */}
            <main className="flex-grow py-16 bg-cream">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h1
                        className="text-3xl font-bold text-text-primary mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        All Projects
                    </motion.h1>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {allProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </div>
            </main>

            {/* Footer - Dark theme */}
            <footer className="py-6 px-6 bg-dark border-t border-dark-border">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-text-light-muted text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ProjectsPage;

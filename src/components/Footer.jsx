import { personalInfo, socialLinks } from '../data/portfolioData';
import { GitHubIcon } from './SocialLinks';

/**
 * Footer Component - Dark theme
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 bg-dark border-t border-dark-border">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <p className="text-text-light-muted text-sm">
                    © {currentYear} {personalInfo.name}
                </p>
                <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-light-muted hover:text-text-light transition-colors duration-200 text-sm"
                >
                    <GitHubIcon />
                    <span className="hidden sm:inline">GitHub</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

import { personalInfo } from '../data/portfolioData';

/**
 * Footer Component - Dark theme
 */
const Footer = () => {
    return (
        <footer className="py-8 px-6 bg-dark border-t border-dark-border">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
                {/* Personal tagline */}
                <p className="text-text-light-muted text-xs">
                    Models are easy. Reliable systems are hard.
                </p>

                {/* Copyright */}
                <p className="text-text-light-muted text-xs">
                    © 2026 {personalInfo.name} · Bengaluru, India
                </p>
            </div>
        </footer>
    );
};

export default Footer;

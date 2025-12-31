import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo, navItems } from '../data/portfolioData';

/**
 * Navbar Component
 * Warm charcoal header with subtle interactions
 */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
                ? 'bg-dark shadow-lg'
                : 'bg-dark/95 backdrop-blur-sm'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {/* Full-width dark background, constrained content */}
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Name with underline effect */}
                <Link
                    to="/"
                    className="text-text-light font-semibold text-lg link-underline"
                >
                    {personalInfo.name}
                </Link>

                {/* Nav Links + Resume */}
                <div className="flex items-center gap-6">
                    {isHomePage && (
                        <ul className="hidden sm:flex items-center gap-5">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-text-light-secondary text-sm link-underline hover:text-text-light transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Resume button with fill effect */}
                    <a
                        href={personalInfo.resumeUrl}
                        download
                        className="px-4 py-2 text-sm font-medium btn-fill rounded-md"
                    >
                        Resume
                    </a>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;

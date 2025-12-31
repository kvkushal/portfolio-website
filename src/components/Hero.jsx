import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import { fadeInUp, staggerContainer } from '../utils/animations';

/**
 * Hero Section
 * Dark theme with reduced height, clear role positioning
 */
const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-dark min-h-[70vh] flex items-center pt-20 pb-16 relative overflow-hidden"
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-surface opacity-80" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <motion.div
                className="max-w-6xl mx-auto px-6 relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Role */}
                <motion.p
                    className="text-accent-light font-medium mb-4 text-sm tracking-wide"
                    variants={fadeInUp}
                >
                    {personalInfo.role}
                </motion.p>

                {/* Name */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-5 tracking-tight"
                    variants={fadeInUp}
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-lg md:text-xl text-text-light-secondary mb-8 max-w-2xl leading-relaxed"
                    variants={fadeInUp}
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* Social + Location */}
                <motion.div
                    className="flex items-center gap-6"
                    variants={fadeInUp}
                >
                    <SocialLinks darkMode={true} />
                    <span className="text-text-light-muted text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {personalInfo.location}
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

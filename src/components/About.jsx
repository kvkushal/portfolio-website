import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp, viewportSettings } from '../utils/animations';

/**
 * About Section
 * Light background for contrast with dark capabilities section
 */
const About = () => {
    return (
        <section id="about" className="py-20 bg-light">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    className="text-2xl font-semibold text-text-primary mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    About
                </motion.h2>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    className="space-y-5"
                >
                    {/* Bio - split into paragraphs for readability */}
                    {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-text-secondary leading-relaxed text-base">
                            {paragraph}
                        </p>
                    ))}

                    {/* Education info */}
                    <div className="pt-6 border-t border-border">
                        <p className="text-text-muted text-sm flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            {personalInfo.degree} · {personalInfo.institution} · Graduating {personalInfo.graduation}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

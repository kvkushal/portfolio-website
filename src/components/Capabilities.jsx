import { motion } from 'framer-motion';
import { capabilities } from '../data/portfolioData';
import { fadeInUp, staggerContainer, viewportSettings } from '../utils/animations';

/**
 * What I Work With Section
 * Dark background for visual contrast
 */
const Capabilities = () => {
    return (
        <section id="capabilities" className="py-20 bg-dark">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    className="text-2xl font-semibold text-text-light mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    What I Work With
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-dark-surface rounded-xl border border-dark-border card-lift"
                            variants={fadeInUp}
                        >
                            {/* Capability name */}
                            <h3 className="text-lg font-medium text-text-light mb-3">
                                {capability.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-text-light-secondary mb-4 leading-relaxed">
                                {capability.description}
                            </p>

                            {/* Tools as styled text */}
                            <p className="text-sm text-accent-light font-medium">
                                {capability.tools}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Capabilities;

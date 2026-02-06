import { motion } from 'framer-motion';
import { capabilities } from '../data/portfolioData';
import { fadeInUp, staggerContainer, viewportSettings } from '../utils/animations';

/**
 * Skills Section
 * 4-column grid of skill categories
 */
const Capabilities = () => {
    return (
        <section id="capabilities" className="py-20 bg-dark">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <motion.h2
                    className="text-2xl font-semibold text-text-light mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    What I Work With
                </motion.h2>

                {/* 4-Column Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                            {/* Category name */}
                            <h3 className="text-lg font-medium text-text-light mb-4">
                                {capability.name}
                            </h3>

                            {/* Skills list */}
                            <ul className="space-y-2">
                                {capability.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-sm text-accent-light font-medium"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Capabilities;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, contactConfig } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './SocialLinks';
import { fadeInUp, staggerContainer, viewportSettings } from '../utils/animations';

/**
 * Download Icon
 */
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

/**
 * Contact Section - Dark background
 */
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch(contactConfig.apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send. Please try again.');

            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
        } catch (error) {
            setStatus({ loading: false, success: false, error: error.message });
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    className="text-2xl font-semibold text-text-light mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    Contact
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    {/* Info */}
                    <motion.div variants={fadeInUp} className="space-y-5">
                        <h3 className="text-xl font-medium text-text-light">
                            {contactConfig.intentCopy.heading}
                        </h3>
                        <p className="text-text-light-secondary text-sm leading-relaxed">
                            {contactConfig.intentCopy.subtext}
                        </p>

                        {/* Links */}
                        <div className="space-y-3 pt-4">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-3 text-text-light-muted hover:text-text-light transition-colors duration-200 text-sm"
                            >
                                <EmailIcon />
                                <span>{personalInfo.email}</span>
                            </a>
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-text-light-muted hover:text-text-light transition-colors duration-200 text-sm"
                            >
                                <GitHubIcon />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-text-light-muted hover:text-text-light transition-colors duration-200 text-sm"
                            >
                                <LinkedInIcon />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href={personalInfo.resumeUrl}
                                download
                                className="flex items-center gap-3 text-accent-light hover:text-accent transition-colors duration-200 text-sm font-medium"
                            >
                                <DownloadIcon />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form onSubmit={handleSubmit} variants={fadeInUp} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm text-text-light-muted mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-light text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-text-light-muted mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-light text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-text-light-muted mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-light text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status.loading}
                            className="w-full px-6 py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {status.success && (
                            <p className="text-green-400 text-sm text-center font-medium">Sent! I'll get back to you soon.</p>
                        )}
                        {status.error && (
                            <p className="text-red-400 text-sm text-center">{status.error}</p>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

/**
 * Reusable Framer Motion animation variants
 * 
 * Guidelines:
 * - Scroll-based only (whileInView, once: true)
 * - Opacity + translateY transitions
 * - Duration 0.4–0.6s
 * - Ease-in-out timing
 * - No looping or decorative animations
 */

// Standard fade in from below - main entrance animation
export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Faster variant for hero elements
export const fadeInUpFast = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Container for staggered children
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// Subtle hover lift for cards
export const cardHover = {
    rest: {
        y: 0,
        transition: {
            duration: 0.25,
            ease: 'easeOut',
        },
    },
    hover: {
        y: -4,
        transition: {
            duration: 0.25,
            ease: 'easeOut',
        },
    },
};

// Standard viewport settings for scroll animations
export const viewportSettings = {
    once: true,
    amount: 0.15,
    margin: '-50px',
};

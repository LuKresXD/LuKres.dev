import { motion } from "framer-motion";

const LoadingScreen = () => (
    <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onAnimationComplete={() => document.body.style.overflow = 'unset'}
    >
        <motion.div
            className="text-4xl font-bold text-text"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            Loading...
        </motion.div>
    </motion.div>
);

export default LoadingScreen;
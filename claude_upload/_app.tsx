import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={Component.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}
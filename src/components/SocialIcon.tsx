import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialIconProps {
    url: string;
    icon: ReactNode;
    delay: number;
    title: string;
}

export default function SocialIcon({ url, icon, delay, title }: SocialIconProps) {
    return (
        <>
            <motion.li
                className="flex flex-col"
                initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
            >
                <a
                    draggable={false}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${title} profile`}
                    className="p-2 bg-secondary hover:bg-accent border-1 border-accent rounded-lg transition-colors duration-300"
                >
                    {icon}
                </a>
            </motion.li>
        </>
    );
}
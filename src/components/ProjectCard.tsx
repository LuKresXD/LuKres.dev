import { motion } from "framer-motion";
import Image from 'next/image';

export default function ProjectCard({ url, title, description, image, delay, gradient }: { url: string, title: string, description: string, image: string, delay: number, gradient: string}) {
    return (
        <>
            <motion.li
                className="group flex"
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
                    className={`p-4 flex flex-col ${gradient} from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background transition-transform duration-300 hover:scale-105 w-full`}
                >
                    <div className="relative w-full pt-[56.25%] mb-4"> {/* 16:9 aspect ratio */}
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg border-1 border-accent grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text mt-2">
                        {title}
                    </h2>
                    <p className="font-leaguespartan text-center text-xl text-text mt-2">
                        {description}
                    </p>
                </a>
            </motion.li>
        </>
    );
}
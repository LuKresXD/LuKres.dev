import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{transform: 'translateY(-30px)', opacity: 0}}
                    whileInView={{transform: 'translateY(0px)', opacity: 100}}
                    transition={{duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96],}}
                    viewport={{amount: 0.1, once: true}}
                >
                    Job Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://jsa-group.ru/en/"
                        title="JSA Group"
                        fullDescription={[
                            "During my internship at JSA, I contributed across multiple domains, including data science, information security, VR development, and industrial safety systems. I gained practical experience in data processing, statistical analysis, and machine learning, where I provided in-depth analyses to solve complex problems.",
                            "I also explored information security, focusing on protocols, vulnerability assessments, and data protection best practices. In VR development, I quickly adapted to create innovative solutions. A major highlight was working on a safety module for an industrial platform, where I developed safety mechanisms to enhance miner and machine operator security, identifying improvement areas and ensuring adherence to high-security standards.",
                        ]}
                        cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/fxowqw9e.png"
                        cardDescription="Contributed to data science, cybersecurity, VR, and industrial safety projects at JSA, demonstrating analytical skills and innovative thinking."
                        media={["https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/pg0pmfvm.mp4"]}
                        myRole="Intern"
                        timeline="June 2024 - August 2024"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
// src/components/EducationCard.tsx
import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import LinkButton from "@/components/LinkButton";

export default function EducationCard({
                                          school,
                                          period,
                                          description,
                                          imageSrc,
                                          status,
                                          direction,
                                          span,
                                          gradient,
                                          delay,
                                          websiteUrl
                                      }: {
    school: string,
    period: string,
    description: string,
    imageSrc: string,
    status: string,
    direction: 'top' | 'bottom' | 'left' | 'right',
    span: 1 | 2,
    gradient: string,
    delay: number,
    websiteUrl: string
}) {
    return (
        <>
            <motion.li
                className={`${span === 1 ? 'min-[940px]:col-span-1 col-span-2' : 'col-span-2'} group`}
                initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(${direction === 'top' || direction === 'left' ? '-' : ''}30px)`, opacity: 0 }}
                whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
            >
                <div className={`${gradient} from-primary to-secondary p-5 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background transition-all duration-300 h-full hover:shadow-accent/20 hover:shadow-xl`}>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <img
                                src={imageSrc}
                                alt={`${school} logo`}
                                className="w-24 h-24 object-contain rounded-lg border border-accent/30 p-1 bg-secondary/80 group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className="flex-grow">
                            <h2 className="md:text-left text-center font-semibold text-3xl">
                                {school}
                            </h2>
                            <div className="flex flex-wrap gap-2 mt-1 md:justify-start justify-center">
                                <span className="text-lg font-medium">{period}</span>
                                <span className="px-2 py-0.5 bg-accent/20 text-white rounded-full text-sm font-semibold inline-flex items-center">
                                    {status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="my-1"></div>
                    <Divider />

                    <p className="md:text-left text-center text-lg mt-3 mb-4 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex row gap-4 mt-2">
                        <LinkButton label="Visit Website" link={websiteUrl} width="w-full h-10"/>
                    </div>
                </div>
            </motion.li>
        </>
    );
}
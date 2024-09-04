import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CASProject() {
    return (
        <>
            <Head>
                <title>CAS Project - Microfluidics Droplet-based Reactor</title>
                <meta name="description" content="Luka's CAS project: Microfluidics droplet-based reactor for precision control and computer vision analysis." />
                <link href="https://unpkg.com/pattern.css@1.0.0/dist/pattern.min.css" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex min-h-screen flex-col justify-center pattern-grid-lg text-primary overflow-x-hidden'>
                <div className='max-w-5xl w-full mx-auto px-4 py-8'>
                    <motion.h1
                        className="text-white font-bold text-4xl sm:text-6xl font-leaguespartan text-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        CAS Project: Microfluidics Droplet-based Reactor
                    </motion.h1>

                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-white text-center text-lg">
                            This project represents the pinnacle of my academic endeavors. As the lead programmer, I not only developed precise control algorithms for the peristaltic pump system but also implemented computer vision to analyze droplets.
                        </p>
                        <p className="text-white text-center text-lg">
                            My primary responsibility was crafting algorithms that allowed us to regulate speeds via code rather than manual adjustments, significantly enhancing the system's precision.
                        </p>
                        <p className="text-white text-center text-lg">
                            I introduced and integrated computer vision technology to monitor and analyze droplet formation within the microfluidic chips. This involved designing image processing algorithms capable of detecting and characterizing droplets in real-time, providing crucial data for optimizing reaction conditions.
                        </p>
                        <p className="text-white text-center text-lg">
                            One major challenge was the unavailability of traditional chip materials. We adapted by using diagonally placed needles instead of vertical inlets and outlets. Through close collaboration with the engineering team, we ensured the system's functionality and efficiency despite these constraints.
                        </p>
                        <p className="text-white text-center text-lg">
                            My work significantly enhanced the precision and functionality of our microfluidics system, contributing to the overall success of the project.
                        </p>
                    </motion.section>

                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Image
                            src="https://i.postimg.cc/zXyjPTkj/photo-2024-05-14-22-38-01-1.jpg"
                            alt="Microfluidics Droplet-based Reactor"
                            width={800}
                            height={600}
                            layout="responsive"
                            className="rounded-lg border-1 border-accent"
                        />
                    </motion.div>
                </div>
            </main>
        </>
    );
}
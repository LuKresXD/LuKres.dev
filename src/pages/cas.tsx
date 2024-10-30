import { motion } from 'framer-motion';
import { GridPattern } from "@/components/GridPattern";
import Footer from "@/components/sections/index/Footer";
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronLeft, ChevronRight, X, Play} from 'lucide-react';
import Divider from "@/components/Divider";

interface MediaItem {
    src: string;
    alt: string;
    type: 'image' | 'video';
    thumbnail?: string;
}

export default function CASProject() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const mediaItems: MediaItem[] = [
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/h174xqqs.jpg",
            alt: "Overview of the Microfluidics Setup",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/47vlrhlq.png",
            alt: "Demonstration of the fabrication process for PDMS layers and microstructures",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/qa1kipsv.png",
            alt: "3D models of droplet-based LOCs designed in Fusion360",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/4r1yqzxg.png",
            alt: "Planar flow focusing droplet formation diagram",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/waqgzk2n.png",
            alt: "Completed Lab-on-a-chip device",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/m9i8m6xp.png",
            alt: "Early prototype of the pump system",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/8xhq6l0v.png",
            alt: "Correlation graph showing Flow Rate with Droplet Speed",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/dimji7zh.png",
            alt: "Size Distribution in Microfluidic System",
            type: "image"
        },
        {
            src: "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/a3m2hwoj.mp4",
            alt: "Droplet Demo",
            type: "video"
        },
    ];

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? mediaItems.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === mediaItems.length - 1 ? 0 : prev + 1
        );
    };

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    return (
        <>
            <main className='min-h-screen pattern-grid-lg text-primary overflow-x-hidden'>
                <GridPattern
                    width={50}
                    height={50}
                    x={-1}
                    y={-1}
                    className='z-[-5]'
                />

                <div className='max-w-6xl w-full mx-auto px-4 py-8'>
                    {/* Hero Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h1 className="text-white font-bold text-4xl sm:text-6xl font-leaguespartan text-center mb-8">
                            Microfluidics Droplet-based Reactor
                        </h1>
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl">
                            <p className="text-white text-lg sm:text-xl text-center leading-relaxed">
                                An innovative project integrating droplet-based microfluidics into educational settings,
                                combining precision engineering with practical research applications through cost-effective
                                and accessible lab-on-a-chip technology.
                            </p>
                        </div>
                    </motion.section>

                    {/* Project Overview Section with Main Images */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-accent"
                                onClick={() => openLightbox(0)}
                            >
                                <img
                                    src={mediaItems[0].src}
                                    alt={mediaItems[0].alt}
                                    className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                                />
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl">
                                <h2 className="text-white text-2xl font-bold mb-4">Project Highlights</h2>
                                <ul className="space-y-2 text-white">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Cost-effective lab-on-a-chip device using photopolymer 3D printing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Self-developed peristaltic pump system with Arduino control</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Digital microscopy integration for detailed monitoring</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Computer vision analysis for droplet dynamics</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl">
                                <h2 className="text-white text-2xl font-bold mb-4">Technical Specifications</h2>
                                <ul className="space-y-2 text-white">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Channel dimensions: 300 micrometers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Flow rates: 40-160 ml/min</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Droplet size range: 50-150 micrometers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Channel flow speed: 0.5-2 mm/s</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Design and Manufacturing Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl mb-8">
                            <h2 className="text-white text-2xl font-bold mb-4">Manufacturing Process</h2>
                            <div className="space-y-4 text-white">
                                <p className="text-lg leading-relaxed">
                                    Our manufacturing process utilizes LCD 3D printing technology with an Anycubic Photon 2 printer,
                                    providing accuracy up to 50 micrometers in all dimensions. The process includes printing,
                                    isopropanol washing, curing, and a 24-hour rest period to ensure optimal PDMS chip quality.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The PDMS casting technique uses a two-component silicone compound &quot;Silagerm 8040&quot;, cured at a
                                    reduced temperature of 50°C to prevent master deformation. The final assembly includes surface
                                    activation and careful installation of inlets and outlets.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-accent"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={mediaItems[index].src}
                                        alt={mediaItems[index].alt}
                                        className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-sm">{mediaItems[index].alt}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Pump System Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl">
                                <h2 className="text-white text-2xl font-bold mb-4">Peristaltic Pump System</h2>
                                <div className="space-y-4 text-white">
                                    <p className="text-lg leading-relaxed">
                                        Our innovative pump system features four synchronized peristaltic pumps in a custom 3D-printed
                                        enclosure. Controlled by Arduino with PWM, the system enables precise flow rate control for both
                                        reactant fluids and oil phases, with real-time adjustments possible during experiments.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        The total cost per pump unit, including all components, is approximately $48 - less than half
                                        the cost of conventional syringe pumps while maintaining reliable performance for droplet generation.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {[4, 5].map((index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                        className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-accent"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <img
                                            src={mediaItems[index].src}
                                            alt={mediaItems[index].alt}
                                            className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                            <p className="text-white text-sm">{mediaItems[index].alt}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Results and Analysis Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl mb-8">
                            <h2 className="text-white text-2xl font-bold mb-4">Results & Analysis</h2>
                            <div className="space-y-4 text-white">
                                <p className="text-lg leading-relaxed">
                                    Using Python and OpenCV, we developed a sophisticated tracking system for analyzing droplet
                                    formation and flow dynamics. The system processes high-resolution video feed from our digital
                                    microscope, enabling real-time monitoring of droplet size and speed.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Our project successfully demonstrates the feasibility of implementing advanced microfluidics
                                    technology in educational settings. The system achieves stable droplet formation with sizes
                                    ranging from 50 to 150 micrometers and channel flow speeds of 0.5 to 2 mm/s.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-accent"
                                onClick={() => openLightbox(6)}
                            >
                                <img
                                    src={mediaItems[6].src}
                                    alt={mediaItems[6].alt}
                                    className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white text-sm">{mediaItems[6].alt}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-accent"
                                onClick={() => openLightbox(7)}
                            >
                                <img
                                    src={mediaItems[7].src}
                                    alt={mediaItems[7].alt}
                                    className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white text-sm">{mediaItems[7].alt}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Video Demonstration Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl mb-8">
                            <h2 className="text-white text-2xl font-bold mb-4">Process Demonstration</h2>
                            <div className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                                 onClick={() => openLightbox(8)}>
                                <video
                                    src={mediaItems[8].src}
                                    className="object-cover w-full h-full"
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                />
                                <div className="absolute in
                                set-0 flex items-center justify-center bg-black/30">
                                    <Play className="w-16 h-16 text-white opacity-80" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white text-sm">{mediaItems[8].alt}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Educational Impact Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg border border-accent shadow-2xl">
                            <h2 className="text-white text-2xl font-bold mb-4">Educational Impact</h2>
                            <div className="space-y-4 text-white">
                                <p className="text-lg leading-relaxed">
                                    This project demonstrates how microfluidics technology can be cost-effectively implemented
                                    in educational settings. Our approach makes cutting-edge science accessible to students,
                                    providing hands-on experience with advanced technology while maintaining high precision
                                    and reliability.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The described procedure is accessible, does not require specialized equipment, and can be
                                    used or modified further for various purposes. The integration of digital microscopy and
                                    computer vision analysis simplifies the quantitative investigation of droplets, making it
                                    ideal for educational environments.
                                </p>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Lightbox */}
                <Transition show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-50 overflow-y-auto"
                        onClose={() => setIsOpen(false)}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black/75 transition-opacity" />
                            </Transition.Child>

                            <span className="inline-block h-screen align-middle" aria-hidden="true">
                                &#8203;
                            </span>

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-7xl p-6 my-8 text-left align-middle transition-all transform bg-secondary rounded-lg border border-accent shadow-xl relative">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <div className="relative aspect-video">
                                        {mediaItems[currentIndex].type === 'video' ? (
                                            <div className="w-full h-full">
                                                <video
                                                    src={mediaItems[currentIndex].src}
                                                    className="w-full h-full rounded-lg lightbox-video"
                                                    muted
                                                    loop
                                                    playsInline
                                                    autoPlay
                                                />
                                            </div>
                                        ) : (
                                            <img
                                                src={mediaItems[currentIndex].src}
                                                alt={mediaItems[currentIndex].alt}
                                                className="object-contain w-full h-full rounded-lg"
                                            />
                                        )}

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePrevious();
                                            }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors text-white"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNext();
                                            }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors text-white"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="text-white text-lg">
                                            {mediaItems[currentIndex].alt}
                                        </p>
                                        <p className="text-gray-400 text-sm mt-2">
                                            {currentIndex + 1} of {mediaItems.length}
                                        </p>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>

                <Footer />
            </main>
        </>
    );
}
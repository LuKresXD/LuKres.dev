import Head from "next/head";
import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import About from "@/components/index/About";
import Projects from "@/components/index/Projects";
import Footer from "@/components/index/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="page-load">
            <Head>
                <title>LuKres.dev - Luka's Personal Portfolio</title>
                <meta name="description" content="Explore Luka's (aka LuKres) personal portfolio showcasing projects in web development, cybersecurity, and game development. Discover a passionate 16-year-old developer's journey and skills." />
                <meta property="og:image" content="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011" />
                <meta property='theme-color' content='#17171a' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="relative pattern-grid-lg min-h-screen text-primary overflow-x-hidden px-6">
                <Hero inView={inView} descRef={ref} />
                <About />
                <Projects />
                <Footer />
            </main>
        </div>
    );
}
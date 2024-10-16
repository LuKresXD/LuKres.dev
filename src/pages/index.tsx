import Head from "next/head";
import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";

export default function Home() {

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <>
            <Head>
                <title>LuKres.dev</title>
                <meta name="description" content="LuKres.dev - Luka's Personal Portfolio"/>
                <meta property="og:image" content="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011g" />
                <meta property='theme-color' content='#17171a' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="relative min-h-screen overflow-x-hidden px-6">
                <GridPattern
                    width={50}
                    height={50}
                    x={-1}
                    y={-1}
                    className='z-[-5]'
                />
                <Hero inView={inView} descRef={ref} />
                <About />
                <Projects />
                <Footer />
            </main>
        </>
    );
}

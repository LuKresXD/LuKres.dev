import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';



export default function Home() {


    const [pageLoad, setPageLoad] = useState(false);
    const [search, setSearch] = useState('')

    useEffect(() => {
        setPageLoad(true)
    }, [])

    function handleInput(e: any) {
        setSearch(e.target.value.replaceAll(' ', '+'))
    }

    function handleEnter(e: any) {
        if (e.key === 'Enter') {
            window.open(`https://duckduckgo.com/?t=lm&q=${search}&ia=web`, '_blank')
            setSearch('')
        }
    }

    return (
        <>
            <Head>
                <title>LuKres.dev</title>
                <link href="https://unpkg.com/pattern.css@1.0.0/dist/pattern.min.css" rel="stylesheet" />
                <meta name="description" content="Luka's (aka LuKres) persownal site" />
                <meta property="og:image" content="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011" />
                <meta property='theme-color' content='#17171a' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex h-screen flex-col justify-center pattern-grid-lg text-primary overflow-x-hidden'>
                <div className='max-w-5xl w-full mx-auto'>
                    <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-leaguespartan text-center`}>
                        CAS project. Microfluidics droplet-based reactor.
                    </h1>
                    <p className="mt-4 text-white text-center animate-fade-in">
                        This is the most impressive project I worked on. I was the lead programmer and additionally
                        implemented computer vision to analyze droplets. My responsibility was to develop the precise
                        control algorithms for the peristaltic pumps system, allowing us to regulate speeds via code
                        rather than just by knob. This adjustment significantly improved the system's precision.
                    </p>
                    <p className="mt-4 text-white text-center animate-fade-in">
                        I also introduced and integrated computer vision technology to monitor and analyze droplet
                        formation within the microfluidic chips. This involved designing and coding image processing
                        algorithms capable of detecting and characterizing droplets in real-time, providing crucial data
                        for optimizing reaction conditions.
                    </p>
                    <p className="mt-4 text-white text-center animate-fade-in">
                        One of the major challenges we faced was the unavailability of traditional chip materials. To
                        overcome this, we had to use needles placed diagonally instead of the usual vertical inlets and
                        outlets. By collaborating closely with the engineering team, we adapted our system to ensure its
                        functionality and efficiency despite these constraints.
                    </p>
                    <p className="mt-4 text-white text-center animate-fade-in">
                        Through my work, I significantly enhanced the precision and functionality of our microfluidics
                        system, contributing to the overall success of the project.
                    </p>
                    <img draggable={false}
                         className="rounded-lg border-1 border-accent mb-4 duration-300"
                         src={"https://i.postimg.cc/zXyjPTkj/photo-2024-05-14-22-38-01-1.jpg"}/>
                </div>
            </main>
        </>
    )
}

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
                        Welcome back, Luka 👋
                    </h1>
                    <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
                        <label htmlFor="search" className="block font-leaguespartan text-sm font-medium leading-6 text-white">
                            Search DuckDuckGo
                        </label>
                        <div className="relative mt-2 flex items-center">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                value={search.replaceAll('+', ' ')}
                                placeholder="Search..."
                                onChange={handleInput}
                                onKeyDown={handleEnter}
                                className=" pl-2 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/GridPattern";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 — LuKres.dev</title>
                <meta name="description" content="Page not found." />
            </Head>
            <main className="relative min-h-screen overflow-x-hidden flex items-center justify-center px-6">
                <GridPattern width={50} height={50} x={-1} y={-1} className="z-[-5]" />
                <motion.div
                    className="max-w-xl w-full bg-gradient-to-br from-primary to-secondary p-8 rounded-lg border-1 border-accent shadow-2xl shadow-background text-center"
                    initial={{ transform: "translateY(30px)", opacity: 0 }}
                    animate={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.39, 0.21, 0.12, 0.96] }}
                >
                    <h1 className="font-bold text-7xl">404</h1>
                    <p className="font-semibold text-2xl mt-2">Page not found</p>
                    <p className="text-base brightness-75 mt-2">
                        The page you&apos;re looking for doesn&apos;t exist or has moved.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-middle hover:bg-secondary duration-300 border-1 border-accent rounded-md font-medium"
                        >
                            Back to home
                        </Link>
                    </div>
                </motion.div>
            </main>
        </>
    );
}

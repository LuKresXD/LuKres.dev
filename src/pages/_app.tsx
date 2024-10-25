import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    let router = useRouter();
    return (
        <>
            <NextSeo
                title={"LuKres.dev"}
                description={"LuKres' (aka Luka) personal site"}
                canonical={`https://lukres.dev${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
                themeColor={"#2563eb"}
                openGraph={{
                    url: `https://lukres.dev${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
                    title: "LuKres.dev",
                    description: "LuKres' (aka Luka) personal site",
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

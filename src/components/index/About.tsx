import AboutCard from "@/components/AboutCard";
import {Tech} from "../../../typings";
import {motion} from "framer-motion";

export default function About() {

    let frontendTech: Tech[] = [
        {
            title: "Kali Linux",
            icon: <svg className="h-6 w-6 fill-[#FFFFFF]" role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <title>kalilinux</title>
                <path
                    d="M16.85 8.081l-0.187-0.606c-1.436-0.223-3.092-0.35-4.778-0.35-0.879 0-1.75 0.035-2.611 0.103l0.114-0.007c-3.096 0.294-5.941 0.915-8.648 1.835l0.265-0.078c3.126-0.78 6.714-1.228 10.407-1.228 1.917 0 3.805 0.121 5.659 0.355l-0.221-0.023zM30.992 23.819s0.39-4.471-6.636-5.502c-0.944-0.144-2.037-0.228-3.148-0.234l-0.006-0c-5.631 0.075-5.836-6.494-1.593-6.826 2.193 0.12 4.213 0.758 5.973 1.793l-0.062-0.034c-0.006 0.040-0.009 0.085-0.009 0.132 0 0.209 0.067 0.403 0.181 0.561l-0.002-0.003c0.293 0.215 0.628 0.402 0.985 0.545l0.031 0.011c0.492 0.288 0.911 0.642 1.261 1.055l0.006 0.007c0.241-0.236 0.509-0.447 0.797-0.628l0.020-0.012c-0.214-0.019-0.411-0.072-0.593-0.153l0.012 0.005c-0.35-0.164-0.649-0.378-0.902-0.638l-0.001-0.001c-0.012-0.027-0.019-0.069 0.075-0.087 0.074-0.061-0.090-0.259-0.162-0.331s-0.556-0.895-0.567-0.912c-0.010-0.026-0.027-0.047-0.050-0.062l-0-0c-0.020-0.001-0.044-0.001-0.067-0.001-0.18 0-0.355 0.019-0.524 0.054l0.017-0.003c-0.446-0.244-0.786-0.632-0.962-1.102l-0.005-0.014c0.004 0.134-0.124 0.28 0 0.586-0.463-0.208-0.811-0.604-0.949-1.088l-0.003-0.012c-0.044 0.091-0.070 0.198-0.070 0.312s0.026 0.221 0.072 0.316l-0.002-0.004c-0.506-0.15-0.892-0.55-1.022-1.052l-0.002-0.010c-0.046 0.085-0.073 0.186-0.073 0.293s0.027 0.208 0.075 0.296l-0.002-0.003c-1.069-0.483-2.318-0.765-3.633-0.765-0.071 0-0.142 0.001-0.212 0.002l0.011-0c-1.603-0.147-1.937-2.967-1.787-3.441-2.007-0.913-4.336-1.539-6.784-1.751l-0.080-0.006c-1.356-0.169-2.926-0.265-4.518-0.265-1.326 0-2.636 0.067-3.928 0.197l0.163-0.013c0.395-0.014 0.859-0.022 1.325-0.022 4.728 0 9.263 0.824 13.469 2.337l-0.278-0.087c0.367 1.327 0.789 2.458 1.294 3.541l-0.058-0.138c-1.376 0.702-2.309 2.094-2.344 3.707l-0 0.005c-0.001 0.039-0.002 0.085-0.002 0.131 0 2.398 1.944 4.343 4.343 4.343 0 0 0 0 0 0h-0c0.162-0.007 0.352-0.011 0.543-0.011 1.981 0 3.859 0.438 5.544 1.222l-0.081-0.034c2.145 1.673 3.533 4.23 3.611 7.114l0 0.013c0.165-2.136-0.636-6.727-4.374-8.12 5.225 0.915 5.685 4.789 5.685 4.789zM26.683 13.223c0.049-0.085 0.207 0.271 0.329 0.421 0.005 0.030 0.012 0.049-0.056 0.034-0.002-0.015-0.007-0.029-0.016-0.040l0 0c-0.084-0.049-0.157-0.106-0.221-0.171l-0-0c-0.030-0.045-0.048-0.1-0.048-0.159 0-0.030 0.005-0.060 0.013-0.087l-0.001 0.002zM26.158 12.299l0.321-0.021c-1.421-1.523-3.226-2.67-5.262-3.287l-0.084-0.022c1.974 0.757 3.653 1.891 5.020 3.325l0.005 0.005zM16.972 8.431c-2.388 0.009-4.675 0.43-6.798 1.194l0.142-0.044c-2.553 0.762-4.779 1.865-6.768 3.28l0.070-0.047c3.932-2.105 8.557-3.461 13.469-3.755l0.092-0.004z"></path>
            </svg>
        },
        {
            title: "Nmap",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/aib44nde.png"/>
        },
        {
            title: "Wireshark",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/37nz0ybd.png"/>
        },
        {
            title: "John the Ripper",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/qv6popoo.png"/>
        },
        {
            title: "Nessus",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/8oofxt7g.png"/>
        },
        {
            title: "Metasploit",
            icon: <img draggable={false} loading="lazy" className="h-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/nm77gfrp.png"/>
        },
    ]

    let backendTech: Tech[] = [
        {
            title: "Unreal Engine",
            icon: <svg className="h-6 w-6 fill-[#FFFFFF]" role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm0 1.846c5.595.007 10.128 4.545 10.128 10.141 0 5.601-4.54 10.141-10.141 10.141s-10.141-4.54-10.141-10.141c0-2.8 1.135-5.335 2.97-7.17 1.837-1.835 4.374-2.97 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23 2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519 1.67 2.485 5.539 2.77 5.539 2.77l1.846-1.846 1.846.923c2.914-1.334 4.615-4.19 4.615-4.615-.701.868-1.646 1.515-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462v-6.693c0-.581 1.342-2.354 1.846-3-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654c-.525.373-1.144.653-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"/>
            </svg>
        },
        {
            title: "Unity",
            icon: <svg className="h-6 w-6 fill-[#FFFFFF]" role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m15.266 12.001 4.2-7.249 2.03 7.253-2.03 7.25-4.2-7.25zm-2.047 1.177 4.201 7.254-7.316-1.876-5.285-5.378zm4.2-9.608-4.2 7.253h-8.4l5.285-5.378 7.314-1.875zm6 5.963-2.566-9.533-9.564 2.555-1.416 2.489-2.873-.021-7 6.978 7 6.977 2.871-.022 1.418 2.489 9.564 2.554 2.56-9.531-1.453-2.468z"/>
            </svg>
        },
        {
            title: "OpenCV",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/ztf1gyeq.png"/>
        },
        {
            title: "SQL",
            icon: <svg className="h-6 w-6 fill-[#FFFFFF]" role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF"
                      d="M5.082 5.593c-0.564 0.564-0.423 1.213 0.564 2.679 0.508 0.761 1.1 1.946 1.326 2.623 0.226 0.705 0.677 1.664 0.987 2.143 0.564 0.79 0.564 0.959 0.197 2.397-0.226 0.902-0.31 2.031-0.197 2.736 0.169 1.185 1.128 2.905 1.72 3.102 0.508 0.169 1.241-0.733 1.269-1.551 0-0.705 0.028-0.733 0.338-0.226 0.536 0.874 2.228 2.735 2.369 2.594 0.056-0.056-0.31-0.79-0.846-1.607-0.508-0.846-1.1-1.946-1.325-2.454-0.31-0.846-0.423-0.902-0.79-0.508-0.226 0.226-0.508 0.874-0.592 1.466-0.226 1.354-0.733 1.523-1.128 0.367s-0.395-3.131 0-4.484c0.282-0.931 0.254-1.184-0.226-1.89-0.31-0.423-0.79-1.438-1.044-2.256-0.254-0.79-0.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115 0.056-1.89 0.479 0.085 1.213 0.423 1.664 0.733 0.423 0.31 1.156 0.564 1.607 0.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241 0.423 3.835 2.002 3.835 2.341 0 0.113-0.649 0.282-1.438 0.338-2.115 0.226-2.313 0.62-0.931 1.861 0.649 0.564 1.862 1.438 2.736 1.918l1.579 0.902-0.733-0.931c-0.423-0.508-1.297-1.297-1.974-1.72s-1.213-0.874-1.213-0.987c0-0.113 0.479-0.31 1.072-0.395 1.579-0.282 2.030-0.423 2.030-0.705 0-0.423-2.848-2.566-4.202-3.159-1.156-0.536-1.297-0.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-0.649-0.113-1.551-0.451-1.946-0.733-0.931-0.705-2.82-0.959-3.272-0.479z"></path>
            </svg>
        },
        {
            title: "Blender",
            icon: <img draggable={false} loading="lazy" className="h-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/gonnu1rc.png"/>
        },
        {
            title: "Docker",
            icon: <img draggable={false} loading="lazy" className="h-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/vssieasx.png"/>
        },
    ]

    let otherTech: Tech[] = [
        {
            title: "Git",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
        },
        {
            title: "Github",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
        },
        {
            title: "DuckyScript",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/wh9qs3vu.png"/>
        },
        {
            title: "Visual Studio Code",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"/>
        },
        {
            title: "Flipper Zero",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/0qakmo1p.png"/>
        },
        {
            title: "Cloudflare",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png"/>
        },
        {
            title: "Swift",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/apyhav8m.png"/>
        },
        {
            title: "Terminal",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/kblm9g2n.png"/>
        },
        {
            title: "Vercel",
            icon: <svg className="h-6 w-6 fill-[#FFFFFF]" role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                <path d="M24 22.525H0l12-21.05 12 21.05z"/>
            </svg>
        },
        {
            title: "Linux",
            icon: <img draggable={false} loading="lazy" className="h-6 w-6"
                       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"/>
        },
    ]

    return (
        <>
            <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
                    initial={{transform: 'translateY(-30px)', opacity: 0}}
                    whileInView={{transform: 'translateY(0px)', opacity: 100}}
                    transition={{duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96],}}
                    viewport={{amount: 0.1, once: true}}
                >
                    About Me
                </motion.h1>
                <ul className="grid grid-cols-2 gap-4 mt-4">
                    <AboutCard
                        title="Overall"
                        description="I've been interested in programming since I was 12 years old, but I haven't found my field yet. I am interested in almost everything from building websites and games, to cybersecurity and AI. By the end of my studies, I hope to launch my own startup as this is my lifelong passion. I enjoy creating things and find great satisfaction when others genuinely enjoy and appreciate the end product."
                        direction="top"
                        span={2}
                        delay={0.1}
                        gradient="bg-gradient-to-tl"
                    />
                    <AboutCard
                        title="Cybersecurity"
                        description="I don't have a lot of experience in cybersecurity, but I'm currently taking a course on Hack The Box and almost passed it."
                        tech={frontendTech}
                        direction="left"
                        span={1}
                        delay={0.15}
                        gradient="bg-gradient-to-br"
                    />
                    <AboutCard
                        title="Development"
                        description="I have about 3 years of experience with  development, and I have worked with a variety of different softwares and libraries."
                        tech={backendTech}
                        direction="right"
                        span={1}
                        delay={0.2}
                        gradient="bg-gradient-to-tl"
                    />
                    <AboutCard
                        title="Other Technologies"
                        description="When it comes to the development process, I use a wide variety of tools, services, and technologies."
                        tech={otherTech}
                        direction="bottom"
                        span={2}
                        delay={0.1}
                        gradient="bg-gradient-to-t"
                    />
                </ul>
            </section>
        </>
    );
}

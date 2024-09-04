import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://phishing.lukres.dev/"
            title="Phishing Website Detector"
            description="Phishing Website Detector is a website designed to analyze URLs for security risks, helping users discern safe from potentially harmful websites through real-time scanning."
            image="https://i.postimg.cc/gJmSGXLt/Clean-Shot-2024-05-06-at-10-46-402x.png"
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://lukres.dev/cas"
            title="Microfluidics droplet-based reactor"
            description="For my CAS project, I participated in engineering a microfluidics droplet-based reactor, developing peristaltic pump systems and creating silica chips for liposome formation, adapting solutions due to material constraints."
            image="https://i.postimg.cc/Dzm423C3/photo-2024-05-14-22-38-01-2.jpg"
            delay={0.2}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://payloads.lukres.dev"
            title="RubberDucky Payloads"
            description="All scripts created by me or partially by me in RubberDucky language are stored here. I tested them on Flipper Zero. For educational purposes"
            image="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/85nw8ufg.png"
            delay={0.3}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://t.me/cryptopitsa"
            title="CryptoPizza"
            description="CryptoPizza is my Telegram channel about the latest crypto activities, including airdrops, ambassador programs, farming opportunities, and more. Join us for exclusive updates and insights in the crypto world 🍕"
            image="https://i.postimg.cc/W15JL1w7/d6ec5059-f9b9-40e9-8437-30a076bec8a8-2.png"
            delay={0.4}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://lukres.dev/home"
            title="LuKres.dev"
            description="This page :)"
            image="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/t22wyrkw.png"
            delay={0.5}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://discord.gg/ex8h77m49X"
            title="Letovo SMP"
            description="Letovo SMP is the Minecraft server of my school. Now though it is working, it is not supported due to lack of time, but it was actively working and maintained for 2 years."
            image="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/hxqurbpc.png"
            delay={0.6}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url=""
            title="IN DEVELOPMENT"
            description="There's going to be an online platform for learning different skills. The main focus of the platform will be memory training and development"
            image=""
            delay={0.7}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url=""
            title="IN DEVELOPMENT"
            description="Chat-roulette for academic questions. Students ask questions, professors answer via video calls. Categories and ratings system. Solving technical and academic problems in real-time."
            image=""
            delay={0.8}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}

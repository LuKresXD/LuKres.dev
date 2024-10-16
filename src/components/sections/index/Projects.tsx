import Button from "../../Button";
import ProjectCard from "../../ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
      <>
        <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
          <motion.h1
              className="text-center font-bold text-5xl mt-16 -mb-2"
              initial={{ transform: 'translateY(-30px)', opacity: 0 }}
              whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
              viewport={{ amount: 0.1, once: true }}
          >
            Projects
          </motion.h1>
          <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-4 overflow-hidden`}>
            <ProjectCard
                url="https://phishing.lukres.dev/"
                title="Phishing Website Detector"
                fullDescription={[
                  "Phishing Website Detector is a website designed to analyze URLs for security risks, helping users discern safe from potentially harmful websites through real-time scanning."
                ]}
                cardImage="https://i.postimg.cc/gJmSGXLt/Clean-Shot-2024-05-06-at-10-46-402x.png"
                cardDescription="Phishing Website Detector is a website designed to analyze URLs for security risks, helping users discern safe from potentially harmful websites through real-time scanning."
                media={[
                  "https://i.postimg.cc/gJmSGXLt/Clean-Shot-2024-05-06-at-10-46-402x.png"
                ]}
                myRole="Founder, Developer"
                myTimeline="May 2024 - Present"
                projectTimeline="May 2024 - Present"
                delay={0.1}
                gradient="bg-gradient-to-tl"
            />
            <ProjectCard
                url="https://lukres.dev/cas"
                title="Microfluidics droplet-based reactor"
                fullDescription={[
                  "For my CAS project, I participated in engineering a microfluidics droplet-based reactor, developing peristaltic pump systems and creating silica chips for liposome formation, adapting solutions due to material constraints."
                ]}
                cardImage="https://i.postimg.cc/Dzm423C3/photo-2024-05-14-22-38-01-2.jpg"
                cardDescription="For my CAS project, I participated in engineering a microfluidics droplet-based reactor."
                media={[
                  "https://i.postimg.cc/Dzm423C3/photo-2024-05-14-22-38-01-2.jpg"
                ]}
                myRole="Engineer"
                myTimeline="April 2024 - May 2024"
                projectTimeline="April 2024 - May 2024"
                delay={0.2}
                gradient="bg-gradient-to-tr"
            />
            <ProjectCard
                url="https://payloads.lukres.dev"
                title="RubberDucky Payloads"
                fullDescription={[
                  "All scripts created by me or partially by me in RubberDucky language are stored here. I tested them on Flipper Zero. For educational purposes."
                ]}
                cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/85nw8ufg.png"
                cardDescription="All scripts created by me or partially by me in RubberDucky language are stored here."
                media={[
                  "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/85nw8ufg.png"
                ]}
                myRole="Founder, Developer"
                myTimeline="May 2024 - Present"
                projectTimeline="May 2024 - Present"
                delay={0.1}
                gradient="bg-gradient-to-br"
            />
            <ProjectCard
                url="https://lukres.dev/home"
                title="LuKres.dev"
                fullDescription={[
                  "This page :)"
                ]}
                cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/t22wyrkw.png"
                cardDescription="This page :)"
                media={[
                  "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/t22wyrkw.png"
                ]}
                myRole="Founder, Developer"
                myTimeline="May 2024 - Present"
                projectTimeline="May 2024 - Present"
                delay={0.2}
                gradient="bg-gradient-to-bl"
            />
            <ProjectCard
                url="https://discord.gg/ex8h77m49X"
                title="Letovo SMP"
                fullDescription={[
                  "Letovo SMP is the Minecraft server of my school. It was actively maintained for 2 years, but is currently unsupported due to lack of time."
                ]}
                cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/hxqurbpc.png"
                cardDescription="Letovo SMP is the Minecraft server of my school."
                media={[
                  "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/hxqurbpc.png"
                ]}
                myRole="Founder, Developer"
                myTimeline="May 2024 - August 2024"
                projectTimeline="May 2024 - August 2024"
                delay={0.1}
                gradient="bg-gradient-to-tr"
            />
            <ProjectCard
                url="https://solvestream.org/"
                title="SolveStream"
                fullDescription={[
                  "[IN DEVELOPMENT] Chat-roulette for academic questions. Students ask questions, professors answer via video calls. Categories and ratings system. Solving technical and academic problems in real-time."
                ]}
                cardImage="https://i.postimg.cc/k4BdtwXL/Clean-Shot-2024-10-16-at-22-09-08-2-2x.png"
                cardDescription="Chat-roulette for academic questions in real-time."
                media={[
                  "https://i.postimg.cc/k4BdtwXL/Clean-Shot-2024-10-16-at-22-09-08-2-2x.png"
                ]}
                myRole="Founder, Developer"
                myTimeline="October 2024 - Present"
                projectTimeline="October 2024 - Present"
                delay={0.2}
                gradient="bg-gradient-to-tl"
            />
          </ul>
        </section>
      </>
  );
}

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
                  "Phishing Website Detector is an advanced web tool that helps users identify potentially harmful websites. With real-time URL scanning and analysis, it provides insights into whether a site is safe to use or poses a phishing risk. By checking patterns, blacklists, and various security markers, it ensures that users can navigate the internet with an extra layer of protection. Whether you're a casual user or a security professional, this tool simplifies the process of keeping your online experience safe."
                ]}
                cardImage="https://i.postimg.cc/gJmSGXLt/Clean-Shot-2024-05-06-at-10-46-402x.png"
                cardDescription="A web tool designed to detect and analyze phishing websites in real-time, protecting users from falling victim to online fraud."
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
                title="Microfluidics reactor"
                fullDescription={[
                  "This CAS project centers around the development of a microfluidics droplet-based reactor, a sophisticated device designed for chemical and biological reactions at a microscopic scale. The project involved creating a precise peristaltic pump system and custom silica chips to enable the formation of liposomes, small artificial vesicles used in drug delivery and other biological research. The reactor offers immense potential in research fields, especially where precision and scalability are key. Despite facing material constraints, the project successfully overcame obstacles, producing a functional and innovative system."
                ]}
                cardImage="https://i.postimg.cc/Dzm423C3/photo-2024-05-14-22-38-01-2.jpg"
                cardDescription="An innovative CAS project focused on engineering a microfluidics droplet-based reactor for scientific applications."
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
                  "RubberDucky Payloads is a curated collection of powerful scripts designed for use with RubberDucky, an iconic USB hacking tool. These scripts, which have been tested on the versatile Flipper Zero device, enable penetration testers and cybersecurity enthusiasts to perform tasks such as keystroke injection, network reconnaissance, and more. Each payload is crafted to demonstrate security vulnerabilities in a safe and educational environment, making it ideal for those learning about ethical hacking and cybersecurity. The collection emphasizes learning and hands-on experience in a controlled setting."
                ]}
                cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/85nw8ufg.png"
                cardDescription="A collection of custom RubberDucky scripts tested on Flipper Zero, designed for educational purposes and security research."
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
                  "LuKres.dev is more than just a personal portfolio—it's a reflection of my journey as a developer. From showcasing my key projects to providing insights through my blog, this site serves as a hub for all things related to my development career. Whether you're looking to explore my work, learn from tutorials, or simply get in touch, LuKres.dev offers a seamless experience. Built with modern web technologies, the site demonstrates my expertise in both front-end and back-end development, while also sharing my passion for cybersecurity, game design, and AI."
                ]}
                cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/t22wyrkw.png"
                cardDescription="The personal website of LuKres, showcasing my projects, skills, and a blog dedicated to tech and development insights."
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
                  "Letovo SMP was created to bring the students of Letovo School together in a shared online space, where they could collaborate, compete, and express their creativity. With custom plugins, regular events, and a vibrant community, Letovo SMP quickly became a beloved hub for the school's gamers. Over two years, the server saw incredible builds, survival challenges, and community-driven projects, fostering teamwork and friendly competition. While the server is no longer actively supported, it left a lasting impact on the community, creating memorable experiences for all its participants."
                ]}
                cardImage="https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/hxqurbpc.png"
                cardDescription="The official Minecraft SMP (Survival Multiplayer) server for Letovo School, offering a creative and competitive environment for students."
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
                  "[IN DEVELOPMENT] SolveStream is an innovative solution for students seeking real-time help with their academic problems. Acting like a chat-roulette for education, it pairs students with professors or subject experts who can answer questions and provide guidance via live video calls. With a robust category system, students can quickly find experts in their field, while a rating system ensures high-quality assistance. SolveStream aims to bridge the gap between students and academic professionals, creating an efficient way to solve technical and academic problems without the delay of traditional forums or tutoring services. Still in development, SolveStream promises to transform how students engage with learning resources."
                ]}
                cardImage="https://i.postimg.cc/k4BdtwXL/Clean-Shot-2024-10-16-at-22-09-08-2-2x.png"
                cardDescription="A revolutionary academic platform connecting students and professors via real-time video calls to solve educational challenges."
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

import Button from "../../Button";
import ProjectCard from "../../ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
    //set to true by default for now because there aren't enough projects to warrant a show more button
    const [showAll, setShowAll] = useState(true);

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
                {!showAll &&
                    <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
                        <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
                    </div>
                }
              <ProjectCard
                  url="https://solvestream.org/"
                  title="SolveStream"
                  fullDescription={[
                      "[IN DEVELOPMENT] SolveStream is an innovative solution for students seeking real-time help with their academic problems. Acting like a chat-roulette for education, it pairs students with professors or subject experts who can answer questions and provide guidance via live video calls. With a robust category system, students can quickly find experts in their field, while a rating system ensures high-quality assistance. SolveStream aims to bridge the gap between students and academic professionals, creating an efficient way to solve technical and academic problems without the delay of traditional forums or tutoring services. Still in development, SolveStream promises to transform how students engage with learning resources."
                  ]}
                  cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169401/lukres.dev/8ihmkcad.png"
                  cardDescription="A revolutionary academic platform connecting students and professors via real-time video calls to solve educational challenges."
                  media={[
                      "https://res.cloudinary.com/dygcwhekh/video/upload/f_auto,q_auto,vc_auto/v1734169413/lukres.dev/k71k3l2g.mp4",
                      "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169401/lukres.dev/8ihmkcad.png",
                      "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169417/lukres.dev/wu26jwvh.png",
                      "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169410/lukres.dev/izj999we.png",
                      "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169405/lukres.dev/bnxrty92.png"
                  ]}
                  myRole="Founder, Developer"
                  timeline="June 2024 - Present"
                  delay={0.1}
                  gradient="bg-gradient-to-br"
              />
            <ProjectCard
                url="https://phishing.lukres.dev/"
                title="Phishing Website Detector"
                fullDescription={[
                  "Phishing Website Detector is an advanced web tool that helps users identify potentially harmful websites. With real-time URL scanning and analysis, it provides insights into whether a site is safe to use or poses a phishing risk. By checking patterns, blacklists, and various security markers, it ensures that users can navigate the internet with an extra layer of protection. Whether you're a casual user or a security professional, this tool simplifies the process of keeping your online experience safe."
                ]}
                cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169280/lukres.dev/6ae5hg1z.png"
                cardDescription="A web tool designed to detect and analyze phishing websites in real-time, protecting users from falling victim to online fraud."
                media={[
                    "https://res.cloudinary.com/dygcwhekh/video/upload/f_auto,q_auto,vc_auto/v1734169381/lukres.dev/vamnhb8m.mp4",
                    "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169280/lukres.dev/6ae5hg1z.png",
                    "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169375/lukres.dev/tge4kxtr.png",
                    "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169327/lukres.dev/dj9uuxer.png"
                ]}
                myRole="Founder, Developer"
                timeline="May 2024 - August 2024"
                delay={0.2}
                gradient="bg-gradient-to-bl"
            />
            <ProjectCard
                url="https://lukres.dev/cas"
                title="Microfluidics reactor"
                fullDescription={[
                  "This CAS project centers around the development of a microfluidics droplet-based reactor, a sophisticated device designed for chemical and biological reactions at a microscopic scale. The project involved creating a precise peristaltic pump system and custom silica chips to enable the formation of liposomes, small artificial vesicles used in drug delivery and other biological research. The reactor offers immense potential in research fields, especially where precision and scalability are key. Despite facing material constraints, the project successfully overcame obstacles, producing a functional and innovative system."
                ]}
                cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169330/lukres.dev/h174xqqs.jpg"
                cardDescription="An innovative CAS project focused on engineering a microfluidics droplet-based reactor for scientific applications."
                media={[
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169330/lukres.dev/h174xqqs.jpg"
                ]}
                myRole="Co-Founder, Engineer"
                timeline="November 2023 - July 2024"
                delay={0.1}
                gradient="bg-gradient-to-tr"
            />
                <ProjectCard
                    url="https://t.me/SpyLogger_bot?start=_tgr_cKJHP1swYjYy"
                    title="SpyLogger Bot"
                    fullDescription={[
                        "SpyLogger is an advanced Telegram bot designed to track message edits and deletions in users' chats, featuring real-time notifications for any message modifications. Built with Python using aiogram and asyncio, it leverages Telegram's API to monitor message changes securely.",
                        "The bot implements complex message tracking logic, handling various media types including text, photos, videos, voice messages, and files. It includes a sophisticated subscription system with referral rewards and premium features, all managed through a MongoDB database.",
                        "Key technical features include asynchronous message processing, robust error handling, automated database backups, and multilingual support with Russian and English localizations. The bot also incorporates a payment system integration for subscription management and uses environment variables for secure configuration."
                    ]}
                    cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/v1737624048/SpyLogger_1920x920_mhsgts.jpg"
                    cardDescription="Telegram bot for tracking message edits and deletions, featuring real-time notifications, subscription management, and more."
                    media={[
                        "https://res.cloudinary.com/dygcwhekh/image/upload/v1737624048/SpyLogger_1920x920_mhsgts.jpg",
                        "https://res.cloudinary.com/dygcwhekh/video/upload/v1737665632/SpyLogger_1920x920_h8yvol.mp4",
                        "https://res.cloudinary.com/dygcwhekh/video/upload/v1737665630/SpyLogger_1920x920_1_ukxal7.mp4",
                        "https://res.cloudinary.com/dygcwhekh/video/upload/v1737665665/SpyLogger_1920x920_2_py7e7n.mp4"
                    ]}
                    myRole="Founder, Developer"
                    timeline="January 2025 - Present"
                    delay={0.2}
                    gradient="bg-gradient-to-br"
                />
            <ProjectCard
                url="https://payloads.lukres.dev"
                title="RubberDucky Payloads"
                fullDescription={[
                  "RubberDucky Payloads is a curated collection of powerful scripts designed for use with RubberDucky, an iconic USB hacking tool. These scripts, which have been tested on the versatile Flipper Zero device, enable penetration testers and cybersecurity enthusiasts to perform tasks such as keystroke injection, network reconnaissance, and more. Each payload is crafted to demonstrate security vulnerabilities in a safe and educational environment, making it ideal for those learning about ethical hacking and cybersecurity. The collection emphasizes learning and hands-on experience in a controlled setting."
                ]}
                cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169284/lukres.dev/85nw8ufg.png"
                cardDescription="A collection of custom RubberDucky scripts tested on Flipper Zero, designed for educational purposes and security research."
                media={[
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169284/lukres.dev/85nw8ufg.png"
                ]}
                myRole="Founder, Developer"
                timeline="April 2024 - Present"
                delay={0.1}
                gradient="bg-gradient-to-tl"
            />
          <ProjectCard
              url="https://discord.gg/ex8h77m49X"
              title="Letovo SMP"
              fullDescription={[
                  "Letovo SMP was created to bring the students of Letovo School together in a shared online space, where they could collaborate, compete, and express their creativity. With custom plugins, regular events, and a vibrant community, Letovo SMP quickly became a beloved hub for the school's gamers. Over two years, the server saw incredible builds, survival challenges, and community-driven projects, fostering teamwork and friendly competition. While the server is no longer actively supported, it left a lasting impact on the community, creating memorable experiences for all its participants."
              ]}
              cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169334/lukres.dev/hxqurbpc.png"
              cardDescription="The official Minecraft SMP (Survival Multiplayer) server for Letovo School, offering a creative and competitive environment for students."
              media={[
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169334/lukres.dev/hxqurbpc.png",
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169340/lukres.dev/iqmj4yt9.png",
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169368/lukres.dev/senhgz35.png",
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169371/lukres.dev/szqbp2a5.png",
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169352/lukres.dev/oqjxmafb.png",
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169321/lukres.dev/b80fm686.png",
                  "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169263/lukres.dev/0uiqieur.png"
              ]}
              myRole="Co-Founder, Developer, Suport"
              timeline="November 2022 - August 2023"
              delay={0.2}
              gradient="bg-gradient-to-br"
          />
            <ProjectCard
                url="https://lukres.dev/home"
                title="LuKres.dev"
                fullDescription={[
                  "LuKres.dev is more than just a personal portfolio—it's a reflection of my journey as a developer. From showcasing my key projects to providing insights through my blog, this site serves as a hub for all things related to my development career. Whether you're looking to explore my work, learn from tutorials, or simply get in touch, LuKres.dev offers a seamless experience. Built with modern web technologies, the site demonstrates my expertise in both front-end and back-end development, while also sharing my passion for cybersecurity, game design, and AI."
                ]}
                cardImage="https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169289/lukres.dev/8fruzhc1.png"
                cardDescription="The personal website of LuKres, showcasing my projects, skills, and a blog dedicated to tech and development insights."
                media={[
                  "https://res.cloudinary.com/dygcwhekh/video/upload/f_auto,q_auto,vc_auto/v1734169276/lukres.dev/5e9892ao.mp4",
                    "https://res.cloudinary.com/dygcwhekh/image/upload/f_auto,q_auto/v1734169289/lukres.dev/8fruzhc1.png"
                ]}
                myRole="Founder, Developer"
                timeline="April 2024 - Present"
                delay={0.1}
                gradient="bg-gradient-to-br"
            />
          </ul>
        </section>
      </>
  );
}

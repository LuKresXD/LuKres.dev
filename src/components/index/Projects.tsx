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
            url="https://lukres.dev/payloads"
            title="RubberDucky Payloads"
            description="All scripts created by me or partially by me in RubberDucky language are stored here. I tested them on Flipper Zero. For educational purposes"
            image="https://cdn.discordapp.com/attachments/1225694526484643914/1233097693346136164/f025f2a9_a4a3_44f5_ae48_45c6162c.png?ex=662bdb37&is=662a89b7&hm=64e58051d31706e594658bec7451afc0db46adad0a7babb4543dbf5f00383139&"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://www.lukres.dev/home"
            title="LuKres.dev"
            description="This page :)"
            image="https://cdn.discordapp.com/attachments/1225694526484643914/1233057010178719804/CleanShot_2024-04-25_at_17.04.232x.png?ex=662bb554&is=662a63d4&hm=51ef0ac6885d78771ad8a420d18bc7a89fe4a4b899bba273875619c4633fea06&"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://discord.gg/ex8h77m49X"
            title="Letovo SMP"
            description="Letovo SMP is the Minecraft server of my school. Now though it is working, it is not supported due to lack of time, but it was actively working and maintained for 2 years."
            image="https://cdn.discordapp.com/attachments/1225694526484643914/1233113660969451642/Letovo_SMP_02_1.png?ex=662bea16&is=662a9896&hm=91753d33d0a612d76a402b39638f48f2d8880f625e9d96d356d7af60a8b49b3b&"
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://google.com"
            title="Google"
            description="Desciption"
            image="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://google.com"
            title="Google"
            description="Desciption"
            image="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://google.com"
            title="Google"
            description="Desciption"
            image="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}

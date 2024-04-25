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
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://google.com"
            title="Google"
            description="Desciption"
            image="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011"
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

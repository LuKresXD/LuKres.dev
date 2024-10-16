import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import MediaCarousel from "./MediaCarousel";
import Button from "./Button";
import LinkButton from "./LinkButton";

export default function ProjectCard({ url, title, fullDescription, cardDescription, cardImage, media, delay, gradient, myRole, myTimeline, projectTimeline }: { url?: string, title: string, fullDescription: string[], cardDescription: string, cardImage: string, media: string[], delay: number, gradient: string, myRole: string, myTimeline: string, projectTimeline: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.li
        className="group flex md:odd:last:col-span-2 md:odd:last:w-1/2 md:odd:last:mx-auto"
        initial={{ transform: 'translateY(-30px)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
        transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
        viewport={{ amount: 0.1, once: true }}
      >
        <div className={`p-4 flex flex-col ${gradient} from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background items-center`}>
          <img alt="" draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale group-hover:grayscale-0 duration-300" src={cardImage} />
          <h2 className="text-center font-semibold text-4xl">
            {title}
          </h2>
          <p className="text-center text-xl">
            {cardDescription}
          </p>
          <div className="flex flex-row gap-2 w-full mt-3">
            {url &&
              <LinkButton label="Visit Website" link={url} width="w-1/2" />
            }
            <Button label="View More" onClick={() => setModalOpen(true)} width={`${url ? 'w-1/2' : 'w-full'}`} />
          </div>
        </div>
        <Modal open={modalOpen} setOpen={setModalOpen}>
          <MediaCarousel media={media} />
          <div className="flex lg:flex-row flex-col justify-between mt-6 px-3">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="sm:text-4xl text-3xl font-bold">{title}</h1>
                {url &&
                  <Link href={url} target="_blank" className="bg-middle hover:bg-secondary duration-300 border-1 border-accent p-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                    </svg>
                  </Link>
                }
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="sm:text-2xl text-xl font-semibold">My Role</h2>
                <p className="sm:text-lg text-base">{myRole}</p>
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="sm:text-2xl text-xl font-semibold">My Timeline</h2>
                <p className="sm:text-lg text-base">{myTimeline}</p>
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="sm:text-2xl text-xl font-semibold">Project Timeline</h2>
                <p className="sm:text-lg text-base">{projectTimeline}</p>
              </div>
            </div>
            <div className="w-auto h-0.5 bg-accent rounded-lg lg:hidden block my-2" />
            <div className="w-0.5 h-auto bg-accent rounded-lg lg:block hidden" />
            <div className="flex flex-col">
              <h2 className="sm:text-2xl text-xl font-semibold">
                Overview
              </h2>
              {fullDescription.map((desc, i) => (
                <p key={i} className="sm:text-lg text-base mt-2 max-w-[28rem]">{desc}</p>
              ))}
            </div>
          </div>
        </Modal>
      </motion.li>
    </>
  );
}

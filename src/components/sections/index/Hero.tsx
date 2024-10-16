import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import SocialIcon from "../../SocialIcon";
import LastFmWidget from "@/components/LastFmWidget";

export default function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
    return (
        <>
            <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
                <motion.div
                    className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
                    initial={{transform: 'translateY(30px)', opacity: 0}}
                    whileInView={{transform: 'translateY(0px)', opacity: 100}}
                    transition={{duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96],}}
                    viewport={{amount: 0.1, once: true}}
                    ref={descRef}
                >
                    <h1 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
                        Hey, I&apos;m Luka<span className="sm:hidden inline-block animate-wave ml-2">👋</span><span
                        className="font-bold text-xl brightness-50 italic sm:inline flex"> aka LuKres</span><span
                        className="sm:inline-block hidden animate-wave ml-2">👋</span>
                    </h1>
                    <p className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg">
                        {inView &&
                            <Typewriter
                                options={{
                                    delay: 30,
                                    strings: ["I'm a 17 year old developer located in Moscow"],
                                    loop: false,
                                    autoStart: true,
                                    deleteSpeed: 604800000,
                                }}
                            />}
                    </p>
                    <ul className="flex flex-row flex-wrap gap-2 mt-2">
                        <SocialIcon
                            url="https://www.youtube.com/@LuKres"
                            icon={<svg role="img" className="h-7 w-7 fill-[#FF0000]" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>}
                            delay={0.3}
                        />
                        <SocialIcon
                            url="https://t.me/lukres"
                            icon={<svg role="img" className="h-7 w-7 fill-[#5865F2]" viewBox="4 4 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"/>
                            </svg>}
                            delay={0.4}
                        />
                        <SocialIcon
                            url="https://www.last.fm/user/lukresxd"
                            icon={<svg role="img" className="h-7 w-7 fill-[#D51007]" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.599 17.211l-.881-2.393s-1.433 1.596-3.579 1.596c-1.9 0-3.249-1.652-3.249-4.296 0-3.385 1.708-4.596 3.388-4.596 2.418 0 3.184 1.568 3.845 3.578l.871 2.751c.871 2.672 2.523 4.818 7.285 4.818 3.41 0 5.722-1.045 5.722-3.801 0-2.227-1.276-3.383-3.635-3.935l-1.757-.384c-1.217-.274-1.577-.771-1.577-1.597 0-.936.736-1.487 1.952-1.487 1.323 0 2.028.495 2.147 1.679l2.749-.33c-.225-2.479-1.937-3.494-4.745-3.494-2.479 0-4.897.936-4.897 3.934 0 1.873.902 3.058 3.185 3.605l1.862.443c1.397.33 1.863.916 1.863 1.713 0 1.021-.992 1.441-2.869 1.441-2.779 0-3.936-1.457-4.597-3.469l-.901-2.75c-1.156-3.574-3.004-4.896-6.669-4.896C2.147 5.327 0 7.879 0 12.235c0 4.179 2.147 6.445 6.003 6.445 3.108 0 4.596-1.457 4.596-1.457v-.012z"/>
                            </svg>}
                            delay={0.5}
                        />
                        <SocialIcon
                            url="https://github.com/lukresxd"
                            icon={<svg role="img" className="h-7 w-7 fill-[#ffffff]" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>}
                            delay={0.6}
                        />
                        <SocialIcon
                            url="mailto:me@lukres.dev"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-white'
                                       viewBox="0 0 16 16">
                                <path
                                    d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" /><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg>}
                            delay={0.7}
                        />
                        <div className="w-64 mt-4 sm:mt-0">
                            <LastFmWidget delay={0.8}/>
                        </div>
                    </ul>
                </motion.div>
            </section>
        </>
    );
}

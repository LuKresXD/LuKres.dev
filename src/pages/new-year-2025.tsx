import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";

const NewYearCard = () => {
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Time passed calculation
    const [timePassed, setTimePassed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Snow effect state
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number }>>([]);

    useEffect(() => {
        setMounted(true);

        // Generate snowflakes
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5
        }));
        setSnowflakes(flakes);

        // Update time passed
        const timer = setInterval(() => {
            const newYear2025 = new Date('2025-01-01T00:00:00').getTime();
            const now = new Date().getTime();
            const difference = now - newYear2025;

            setTimePassed({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <Head>
                <title>С Новым 2025 Годом! 🎄</title>
            </Head>

            {/* New Year music button */}
            <button
                onClick={() => {
                    const audio = new Audio('/jingle-bells.mp3');
                    audio.play();
                }}
                className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
            >
                🎵
            </button>

            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-red-600 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Snow effect */}
            <div className="fixed inset-0 pointer-events-none">
                {snowflakes.map((flake) => (
                    <motion.div
                        key={flake.id}
                        className="absolute text-white text-opacity-80"
                        initial={{ y: -20, x: `${flake.left}vw` }}
                        animate={{
                            y: "100vh",
                            x: [
                                `${flake.left}vw`,
                                `${flake.left + Math.sin(flake.left) * 10}vw`,
                                `${flake.left}vw`
                            ]
                        }}
                        transition={{
                            duration: 7 + Math.random() * 3,
                            repeat: Infinity,
                            delay: flake.delay,
                            ease: "linear",
                        }}
                        style={{ fontSize: Math.random() * 20 + 10 }}
                    >
                        ❄
                    </motion.div>
                ))}
            </div>

            <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white overflow-x-hidden">
                {/* Hero Section */}
                <motion.section
                    className="min-h-screen flex flex-col items-center justify-center relative px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold text-center mb-8"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        С Новым Годом!
                    </motion.h1>
                    <motion.div
                        className="text-2xl md:text-4xl text-center text-gold"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        2025
                    </motion.div>
                    <motion.div
                        className="mt-8 text-xl md:text-2xl text-center max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Дорогая семья! 🎄
                    </motion.div>

                    {/* Time Passed Counter */}
                    <motion.div
                        className="mt-12 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        <div className="text-2xl mb-4">С Нового Года прошло:</div>
                        <div className="grid grid-cols-4 gap-4 text-center">
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-3xl font-bold">{timePassed.days}</div>
                                <div className="text-sm">{timePassed.days === 1 ? 'день' :
                                    timePassed.days % 10 === 1 && timePassed.days % 100 !== 11 ? 'день' :
                                        [2,3,4].includes(timePassed.days % 10) && ![12,13,14].includes(timePassed.days % 100) ? 'дня' : 'дней'}</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-3xl font-bold">{timePassed.hours}</div>
                                <div className="text-sm">{timePassed.hours === 1 ? 'час' :
                                    [2,3,4].includes(timePassed.hours) ? 'часа' : 'часов'}</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-3xl font-bold">{timePassed.minutes}</div>
                                <div className="text-sm">{timePassed.minutes === 1 ? 'минута' :
                                    [2,3,4].includes(timePassed.minutes % 10) && ![12,13,14].includes(timePassed.minutes % 100) ? 'минуты' : 'минут'}</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-3xl font-bold">{timePassed.seconds}</div>
                                <div className="text-sm">{timePassed.seconds === 1 ? 'секунда' :
                                    [2,3,4].includes(timePassed.seconds % 10) && ![12,13,14].includes(timePassed.seconds % 100) ? 'секунды' : 'секунд'}</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Message Sections */}
                <motion.section
                    className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                        <p className="text-xl md:text-2xl leading-relaxed mb-6">
                            В этот волшебный праздник я хочу пожелать вам бесконечного счастья, крепкого здоровья и незабываемых моментов в новом году! 🌟
                        </p>
                        <p className="text-xl md:text-2xl leading-relaxed mb-6">
                            Пусть каждый день будет наполнен радостью, любовью и теплом. Пусть все мечты сбываются, а удача сопутствует во всех начинаниях! ✨
                        </p>
                        <p className="text-xl md:text-2xl leading-relaxed">
                            Спасибо вам за вашу любовь, поддержку и понимание. Вы - самое дорогое, что у меня есть! ❤️
                        </p>
                    </div>
                </motion.section>

                {/* Family Members Sections */}
                <motion.section
                    className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-6xl mx-auto w-full">
                        <h2 className="text-4xl md:text-5xl text-center mb-12 font-bold">
                            Мои пожелания для каждого из вас 🎄
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Mother's Card */}
                            <motion.div
                                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute top-0 right-0 text-4xl">🌟</div>
                                <h3 className="text-2xl font-bold mb-4 text-red-300">Мамочка</h3>
                                <p className="text-lg leading-relaxed">
                                    Мамочка, ты самый добрый и светлый человек в моей жизни! Спасибо тебе за твою бесконечную заботу, понимание и любовь. Пусть этот год принесёт тебе много радости, улыбок и приятных моментов. Желаю тебе крепкого здоровья и исполнения всех твоих желаний!
                                </p>
                                <div className="absolute bottom-2 right-2 text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    ❤️
                                </div>
                            </motion.div>

                            {/* Father's Card */}
                            <motion.div
                                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute top-0 right-0 text-4xl">🎄</div>
                                <h3 className="text-2xl font-bold mb-4 text-blue-300">Папа</h3>
                                <p className="text-lg leading-relaxed">
                                    Папа, ты мой пример во всём! Спасибо за твою мудрость, поддержку и те важные жизненные уроки, которые ты мне даёшь. Пусть новый год будет полон успехов, достижений и приятных сюрпризов. Желаю тебе энергии, сил и новых достижений!
                                </p>
                                <div className="absolute bottom-2 right-2 text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    💪
                                </div>
                            </motion.div>

                            {/* Brother's Card */}
                            <motion.div
                                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute top-0 right-0 text-4xl">🎮</div>
                                <h3 className="text-2xl font-bold mb-4 text-green-300">Брат</h3>
                                <p className="text-lg leading-relaxed">
                                    Филипп, ты не просто брат - ты мой лучший друг! Спасибо за твоё чувство юмора и за то, что всегда готов поддержать. Я очень рад что в этом году мы стали больше общаться! Пусть новый год принесёт тебе много крутых событий, новых достижений и классных моментов!
                                </p>
                                <div className="absolute bottom-2 right-2 text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    🎯
                                </div>
                            </motion.div>

                            {/* Sister's Card */}
                            <motion.div
                                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute top-0 right-0 text-4xl">🎀</div>
                                <h3 className="text-2xl font-bold mb-4 text-pink-300">Сестра</h3>
                                <p className="text-lg leading-relaxed">
                                    Агата, ты моя радость и вдохновение! Ты самая весёлая и солнечная девочка на свете! Обожаю твой звонкий смех. Пусть в новом году у тебя будет много интересных историй, новых друзей, любимых игрушек и сказочных моментов!
                                </p>
                                <div className="absolute bottom-2 right-2 text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    🌸
                                </div>
                            </motion.div>

                            {/* Grandma's Card */}
                            <motion.div
                                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute top-0 right-0 text-4xl">🫂</div>
                                <h3 className="text-2xl font-bold mb-4 text-purple-300">Бабушка</h3>
                                <p className="text-lg leading-relaxed">
                                    Любимая бабушка, ты наша семейная хранительница тепла и уюта! Спасибо за твою безграничную любовь и вкусные плюшки. Желаю тебе крепкого здоровья, радости от каждого дня и долгих-долгих лет счастливой жизни!
                                </p>
                                <div className="absolute bottom-2 right-2 text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    🧶
                                </div>
                            </motion.div>

                            {/* Grandpa's Card */}
                            <motion.div
                                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute top-0 right-0 text-4xl"> 📚</div>
                                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Дедушка</h3>
                                <p className="text-lg leading-relaxed">
                                    Дорогой дедушка, ты для меня пример мудрости и жизнелюбия! Благодарю тебя за все твои истории и за твой оптимизм. Пусть новый год подарит тебе много поводов для радости, крепкого здоровья и внутреннего тепла!
                                </p>
                                <div className="absolute bottom-2 right-2 text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    🎣
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Final Section */}
                <motion.section
                    className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            className="text-4xl md:text-6xl font-bold mb-8"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            С любовью ❤️
                        </motion.div>
                        <motion.div
                            className="text-2xl md:text-3xl"
                            initial={{ y: 50 }}
                            whileInView={{ y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Ваш Лука
                        </motion.div>
                    </div>
                </motion.section>

                {/* Decorative elements */}
                <div className="fixed top-10 left-10 text-6xl animate-bounce">🎄</div>
                <div className="fixed top-10 right-10 text-6xl animate-bounce delay-100">🎅</div>
                <div className="fixed bottom-10 left-10 text-6xl animate-bounce delay-200">🎁</div>
                <div className="fixed bottom-10 right-10 text-6xl animate-bounce delay-300">⭐</div>
            </main>
        </>
    );
};

export default NewYearCard
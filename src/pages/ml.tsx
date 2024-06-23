import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const [randomText1, setRandomText1] = useState('');
  const [randomText2, setRandomText2] = useState('');
  const [randomText3, setRandomText3] = useState('');
  const [randomText4, setRandomText4] = useState('');

  const text1 = [
  'Ты всегда поддерживаешь меня в трудные моменты',
  'Ты делаешь мою жизнь ярче и радостнее',
  'Ты умеешь слушать и понимать меня',
  'Твоя мудрость вдохновляет меня',
  'Ты заставляешь меня смеяться и отвлекаться даже в самые трудные дни',
  'Ты принимаешь меня таким, какой я есть',
  'Ты мотивируешь меня становиться лучше каждый день',
  'Ты разделяешь со мной мои мечты и цели',
  'Твоя уверенность во мне помогает мне быть сильнее',
  'Ты всегда находишь время для нас, несмотря на занятость',
  'Ты делаешь каждый день особенным',
  'Ты веришь в меня, даже когда я сомневаюсь в себе',
  'Ты всегда знаешь, как поднять мне настроение',
  'Ты показываешь мне, что такое настоящая любовь',
  'Ты делаешь меня счастливым одним своим присутствием',
  'Ты поддерживаешь меня в моих увлечениях',
  'Ты всегда честна и искренна со мной'
];

const text2 = [
  'Твоя улыбка',
  'Твои глаза',
  'Твой смех',
  'Твоя нежность и мягкость',
  'Твоя целеустремленность и трудолюбие',
  'Твой вкус и стиль в одежде',
  'Твоя способность делать мелочи особенными',
  'Твоя мудрость',
  'Твоя страсть к жизни и ко всему, что ты делаешь',
  'Твое чувство юмора',
  'Твоя честность и открытость',
  'Твоя преданность и верность нашим отношениям.',
  'Твои губы',
  'Твое тело',
  'Твое дыхание',
  'Твоя страсть'
];

const text3 = [
  'Мы можем быть собой рядом друг с другом',
  'Мы всегда находим компромисс в сложных ситуациях',
  'Наши общие мечты и цели объединяют нас',
  'Мы всегда поддерживаем друг друга в трудные моменты',
  'Мы уважаем личное пространство и интересы друг друга',
  'Мы всегда говорим друг другу правду',
  'Мы растем и развиваемся вместе',
  'Мы вдохновляем друг друга',
  'Мы ценим друг друга',
  'Мы любим друг друга',
];

const text4 = [
  'Ты уже достигла очень многого',
  'Ты не боишься сталкиваться с трудностями',
  'Ты всегда заботишься о других',
  'Ты всегда стремишься к самосовершенствованию',
  'Ты сильная и независимая',
  'Ты отлично управляешь своим временем',
  'Ты находишь баланс между учебой и личной жизнью',
  'Ты вдохновляешь меня своей целеустремленностью',
  'Ты умничка <3',
  'Ты всегда делаешь все в лучшем виде',
];

  useEffect(() => {
    setPageLoad(true);
  }, []);


  function handleButtonClick({setText, textArray}: { setText: any, textArray: any }) {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    setText(textArray[randomIndex]);
  }

  return (
    <>
      <Head>
        <title>Я люблю тебя, котик 🤍</title>
        <link href="https://unpkg.com/pattern.css@1.0.0/dist/pattern.min.css" rel="stylesheet" />
        <meta name="description" content="ML" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1225694526484643914/1232949355464359947/luminal_logo.jpg?ex=662b5111&is=6629ff91&hm=f4452cc2df53b9ef383cdd00430b6d7cde20298b56602c18fcafb54ce6acb7ca&=&format=webp&width=1011&height=1011" />
        <meta property='theme-color' content='#17171a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex h-screen flex-col justify-center pattern-grid-lg text-primary overflow-x-hidden'>
        <div className='max-w-5xl w-full mx-auto'>
          <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-leaguespartan text-center`}>
            Я люблю тебя, котик 🤍️
          </h1>
          <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
            <button
                onClick={() => handleButtonClick({setText: setRandomText1, textArray: text1})}
                className="w-full ml-2 p-2 font-poppins rounded-md md:text-xl text-lg font-semibold bg-zinc-925 border-2 border-zinc-900 hover:border-blue-700 duration-500 ease-custom text-blue-100"
            >
              Причины, почему я люблю тебя
            </button>
            {randomText1 && (
                <p className="mt-4 text-white text-center animate-fade-in">
                  {randomText1}
                </p>
            )}
          </div>
          <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
            <button
                onClick={() => handleButtonClick({setText: setRandomText2, textArray: text2})}
                className="w-full ml-2 p-2 font-poppins rounded-md md:text-xl text-lg font-semibold bg-zinc-925 border-2 border-zinc-900 hover:border-blue-700 duration-500 ease-custom text-blue-100"
            >
              Что я люблю в тебе
            </button>
            {randomText2 && (
                <p className="mt-4 text-white text-center animate-fade-in">
                  {randomText2}
                </p>
            )}
          </div>
          <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
            <button
                onClick={() => handleButtonClick({setText: setRandomText3, textArray: text3})}
                className="w-full ml-2 p-2 font-poppins rounded-md md:text-xl text-lg font-semibold bg-zinc-925 border-2 border-zinc-900 hover:border-blue-700 duration-500 ease-custom text-blue-100"
            >
              Что я ценю в наших отношениях
            </button>
            {randomText3 && (
                <p className="mt-4 text-white text-center animate-fade-in">
                  {randomText3}
                </p>
            )}
          </div>
          <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
            <button
                onClick={() => handleButtonClick({setText: setRandomText4, textArray: text4})}
                className="w-full ml-2 p-2 font-poppins rounded-md md:text-xl text-lg font-semibold bg-zinc-925 border-2 border-zinc-900 hover:border-blue-700 duration-500 ease-custom text-blue-100"
            >
              Почему я горжусь тобой
            </button>
            {randomText4 && (
                <p className="mt-4 text-white text-center animate-fade-in">
                  {randomText4}
                </p>
            )}
          </div>
        </div>
      </main>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </>
  );
}
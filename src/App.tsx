import { useEffect, useState } from 'react';

import moon from './assets/portfolio icons/moon.png';
import sun from './assets/portfolio icons/sun.png';
import einstein from './assets/cartoon-scientist-with-white-coat-that-says-science-it_902338-22176.jpg';

import './App.css';

type AppProps = {
  icons: Array<{ light: string; dark: string; link: string }>;
  about: Array<string>;
};

function App({ icons, about }: AppProps) {
  const [appMode, setAppMode] = useState('light');
  const [readMore, setReadMore] = useState(false);

  const appModeHandler = () => {
    // Toggles app Mode
    setAppMode((state) => {
      if (state === 'light') return 'dark';
      else return 'light';
    });
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (appMode === 'light') body?.setAttribute('class', 'light');
    else body?.setAttribute('class', 'dark');
  }, [appMode]);

  return (
    <>
      <main>
        <section className='app-mode-section'>
          <div className='app-mode'>
            <img
              src={appMode == 'light' ? moon : sun}
              alt='app-mode'
              onClick={appModeHandler}
            />
          </div>
        </section>
        <section className='container'>
          <div className='einstein'>
            <img src={einstein} alt='einstein' />
          </div>
        </section>
        <section className='container intro'>
          <div className={appMode == 'light' ? 'light-text' : 'dark-text'}>
            <h2>MAHMUD SUBERU</h2>
            <h4>Software Engineer from Nigeria</h4>
          </div>
        </section>
        <section className='icons-section'>
          <div className='icons'>
            {icons.map((icon, index) => {
              return (
                <a href={icon.link} target='_blank' key={index}>
                  <img
                    src={appMode === 'light' ? icon.light : icon.dark}
                    alt='social-icon'
                    className='icon'
                  />
                </a>
              );
            })}
          </div>
        </section>
        <section className='container'>
          <div className='about'>
            <p>
              Hi there! I am Mahmud a full-stack developer, DevOps Engineer and
              Cloud enthusiast, currently freelancing.
            </p>
            <div>
              {readMore &&
                about.map((text) => <p className='about-text'>{text}</p>)}
            </div>
            <button
              className={
                appMode === 'light' ? 'dark dark-text' : 'light light-text'
              }
              onClick={() => setReadMore((state) => !state)}
            >
              {readMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

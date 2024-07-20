import { useEffect, useState } from "react";

import moon from "./assets/portfolio icons/moon.png";
import sun from "./assets/portfolio icons/sun.png";

import Einstein from "./components/Einstein";
import IconsSection from "./components/IconsSection";
import Intro from "./components/Intro";

import "./App.css";

type AppProps = {
  icons: Array<{ light: string; dark: string; link: string }>;
  about: Array<string>;
};

function App({ icons, about }: AppProps) {
  const [appMode, setAppMode] = useState(setPreference);
  const [readMore, setReadMore] = useState(
    localStorage.getItem("readMore") || "false"
  );

  useEffect(() => {
    // Persist read more state
    window.localStorage.setItem("readMore", readMore);
  }, [readMore]);

  useEffect(() => {
    // Sets body mode
    const body = document.querySelector("body");
    body?.setAttribute("class", appMode);

    // Persist Theme
    window.localStorage.setItem("mode", appMode);
  }, [appMode]);

  const appModeHandler = () => {
    // Toggles app Mode
    setAppMode((state: string) => {
      if (state === "light") return "dark";
      else return "light";
    });
  };

  const readMoreHandler = () => {
    // Switches between Read More and Read Less
    setReadMore((state: string) => {
      if (state === "false") return "true";
      else return "false";
    });
  };

  return (
    <>
      <main>
        <section className="app-mode-section">
          <div className="app-mode">
            <img
              src={appMode == "light" ? moon : sun}
              alt="app-mode"
              onClick={appModeHandler}
            />
          </div>
        </section>
        <Einstein />
        <Intro appMode={appMode} />
        <IconsSection icons={icons} appMode={appMode} />

        {/** About Section */}
        <section className="container">
          <div className="about">
            <p>
              Hi there! I am Mahmud a full-stack developer, DevOps Engineer and
              ML Engineer.
            </p>
            <div>
              {readMore === "true" &&
                about.map((text, index) => (
                  <p
                    className={
                      appMode === "light"
                        ? "about-text light-text"
                        : "about-text dark-text"
                    }
                    key={index}
                  >
                    {text}
                  </p>
                ))}
            </div>
            <button
              className={
                appMode === "light"
                  ? "dark-button dark-text"
                  : "light light-text"
              }
              onClick={readMoreHandler}
            >
              {readMore === "true" ? "Read Less" : "Read More"}
            </button>
            {/* Download cv */}
            <a href={`/Mahmud_Suberu_RESUME.pdf`} download={true}>
              <button
                className={
                  appMode === "light"
                    ? "dark-button dark-text"
                    : "light light-text"
                }
              >
                Download CV
              </button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

const setPreference = () => {
  const storageItem = localStorage.getItem("mode");
  // Set mode to stored app mode
  if (storageItem) return storageItem;
  else {
    // Set mode to users default preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

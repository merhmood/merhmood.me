import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Dark icons
import instaLight from "./assets/portfolio icons/instagram.png";
import twitterLight from "./assets/portfolio icons/twitter.png";
import githubLight from "./assets/portfolio icons/github (1).png";
import linkedInLight from "./assets/portfolio icons/linkedin.png";

// Light icons
import instaDark from "./assets/portfolio icons/instagram (2).png";
import twitterDark from "./assets/portfolio icons/twitter (1).png";
import githubDark from "./assets/portfolio icons/github (2).png";
import linkedInDark from "./assets/portfolio icons/linkedin (1).png";

import "./index.css";

const icons = [
  {
    light: twitterLight,
    dark: twitterDark,
    link: "https://twitter.com/merh_mood",
  },
  {
    light: githubLight,
    dark: githubDark,
    link: "https://github.com/merhmood",
  },
  {
    light: instaLight,
    dark: instaDark,
    link: "https://www.instagram.com/merh_mood",
  },
  {
    light: linkedInLight,
    dark: linkedInDark,
    link: "https://www.linkedin.com/in/mahmud-a-suberu-684020235",
  },
];

const about = [
  "Worked at the minority programmers association and currently working at Distributed as a Software engineer. I am always making contributions to my projects on GitHub, contributing to open source and, when i am not doing those, I am extending my horizons by reading tech books, tech articles, attending online conferences, etc.",
  "Currently geared towards Manchine Learning. Also I am working towards attaining my DevOps certifications from Azure and Aws, Sponsorships are welcomed!",
  "Outside of programming,  I play chess, basketball and sometimes video games.",
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App icons={icons} about={about} />
  </React.StrictMode>
);

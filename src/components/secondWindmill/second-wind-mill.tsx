import React, { ReactElement, useState } from "react";
import styles from "../Windmill/windmill.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";
import bgImage1 from "../../images/bg-1.png";
import bgImage2 from "../../images/bg-2.png";

import {
  AnimatePresence as OriginalAnimatePresence,
  motion,
} from "framer-motion";
import ShowcaseContent, {
  ShowcaseContentProps,
} from "./windmill-showcase-content/showcase-content";

// Создаем свой типизированный компонент
const AnimatePresence: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const result = OriginalAnimatePresence({ children });
  return result || null; // Возвращаем null вместо undefined
};
const SecondWindmill: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const slides: ShowcaseContentProps[][] = [
    [
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Турнир",
        prize: "20000 Руб — Призовой фонд",
        infoTitle: "GAME DROP",
        infoDescription: [],
        color: "yellow",
      },
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Турнир",
        prize: "15000 Руб — Призовой фонд",
        infoTitle: "FAST CAP",
        infoDescription: [],
        color: "yellow",
      },
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Турнир",
        prize: "10000 Руб — Призовой фонд",
        infoTitle: "TOP SHOT",
        infoDescription: [],
        color: "yellow",
      },
    ],
    [
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Турнир",
        prize: "15000 Руб — Призовой фонд",
        infoTitle: "FAST CAP",
        infoDescription: [],
        color: "red",
      },
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Турнир",
        prize: "15000 Руб — Призовой фонд",
        infoTitle: "FAST CAP",
        infoDescription: [],
        color: "red",
      },
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Турнир",
        prize: "15000 Руб — Призовой фонд",
        infoTitle: "FAST CAP",
        infoDescription: [],
        color: "red",
      },
    ],
    [
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Лига",
        prize: "15000 Руб — Призовой фонд",
        infoTitle: "FAST CAP",
        infoDescription: [],
        color: "green",
      },
      {
        date: "13.02.2025",
        bgImage: bgImage1,
        tag: "Лига",
        prize: "15000 Руб — Призовой фонд",
        infoTitle: "FAST CAP",
        infoDescription: [],
        color: "green",
      },
    ],
  ];

  const buttons = [
    { title: "Мини-турниры", color: "yellow" },
    { title: "Турниры", color: "red" },
    { title: "Лиги", color: "green" },
  ];

  const handleSlideChange = (index: number) => {
    setActiveButton(index);
    setActiveSlide(index);
  };

  return (
    <div className={styles.main}>
      <div className="flex gap-x-[11px] mb-[25px]">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`${
              activeButton === index
                ? `${buttonStyles.primary} !bg-${button.color}`
                : buttonStyles.secondary
            } `}
            onClick={() => handleSlideChange(index)}
          >
            {button.title}
          </button>
        ))}
      </div>

      <div className="relative h-[540px] flex">
        {" "}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeButton}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full flex justify-between gap-x-[21px]"
          >
            {slides[activeSlide].map((item) => {
              return <ShowcaseContent {...item} />;
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <ul className={styles.progressList}>
        {slides.map((_, index) => (
          <li
            key={index}
            className={`${styles.progressItem} ${
              activeSlide === index ? styles.active : ""
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default SecondWindmill;

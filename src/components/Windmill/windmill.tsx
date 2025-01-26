import React, { ReactElement, useState } from "react";
import styles from "./windmill.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";
import bgImage1 from "../../images/bg-1.png";
import bgImage2 from "../../images/bg-2.png";
import WindmillContent, {
  WindmillContentProps,
} from "./windmillContent/windmillContent";
import {
  AnimatePresence as OriginalAnimatePresence,
  motion,
} from "framer-motion";

import playerImg from "../../images/player.jpg";
import arrow from "../../icons/windmill-arrow.svg";

// Создаем свой типизированный компонент
const AnimatePresence: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const result = OriginalAnimatePresence({ children });
  return result || null; // Возвращаем null вместо undefined
};
const Windmill: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: WindmillContentProps[] = [
    {
      title: "РЕГИСТРИРУЙСЯ НА ЕЖЕНЕДЕЛЬНЫЕ МИНИ-ТУРНИРЫ И ПОЛУЧАЙ МОНЕТЫ",
      span: "И ПОЛУЧАЙ МОНЕТЫ",
      description:
        "Мини-турниры — это быстрые получасовые игры, где ты получаешь возможность заработать коины — внутреннюю валюту сервиса, которую впоследствии можно обменять на UC или деньги",
      bgImage: bgImage1,
      logoText: "МИНИ-ТУРНИРЫ",
      color: "yellow",
      winner: {
        title: "Dragon Team",
        image: playerImg,
        desc: "Победитель Game Drop",
        prize: "20000 Руб",
      },
    },
    {
      title: "ПОЛУЧИ ШАНС ВЫИГРАТЬ НАСТОЯЩИЕ ДЕНЬГИ РЕГИСТРИРУЙСЯ И ПОБЕЖДАЙ",
      span: "РЕГИСТРИРУЙСЯ И ПОБЕЖДАЙ",
      description:
        "Турниры —  полноценные соревнования, где ты получаешь возможность заработать настоящие деньги",
      bgImage: bgImage2,
      logoText: "ТУРНИРЫ",
      color: "red",
      winner: {
        title: "Pepega Boys",
        image: playerImg,
        desc: "Победитель Game Drop",
        prize: "40000 Руб",
      },
    },
    {
      title:
        "РЕГИСТРИРУЙСЯ И УЧАВСТВУЙ В ЛИГАХ. ПОЛУЧИ ШАНС ВЫЙГРАТЬ ПРИЗОВОЙ ФОНД",
      span: "В ЛИГАХ.",
      description:
        "Турниры —  полноценные соревнования, где ты получаешь возможность заработать настоящие деньги",
      bgImage: bgImage2,
      logoText: "ЛИГИ",
      color: "green",
      winner: undefined,
    },
  ];

  const content: ReactElement = <WindmillContent {...slides[activeSlide]} />;

  const buttons = [
    { title: "Мини-турниры", color: "yellow" },
    { title: "Турниры", color: "red" },
    { title: "Лиги", color: "green" },
  ];

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className={styles.main}>
      <div className="flex gap-x-[11px] mb-[25px]">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`${
              activeSlide === index
                ? `${buttonStyles.primary} !bg-${button.color}`
                : buttonStyles.secondary
            } `}
            onClick={() => handleSlideChange(index)}
          >
            {button.title}
          </button>
        ))}
      </div>

      <div className="relative h-[540px]">
        <img
          src={arrow}
          className="absolute right-[-50px] z-[10] top-[45%] cursor-pointer"
          onClick={() => {
            if (activeSlide != slides.length - 1)
              handleSlideChange(activeSlide + 1);
          }}
        />
        <img
          src={arrow}
          className="absolute left-[-50px] scale-x-[-1] z-[10] top-[45%] cursor-pointer"
          onClick={() => {
            if (activeSlide != 0) handleSlideChange(activeSlide - 1);
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full"
          >
            {content}
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

export default Windmill;

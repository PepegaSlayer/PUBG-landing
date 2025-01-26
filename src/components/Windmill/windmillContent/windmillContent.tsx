import React from "react";
import styles from "../windmill.module.css";
import buttonStyles from "../../../shared-styles/buttons.module.css";
import logoSrc from "../../../icons/minilogo.svg";

export interface WindmillContentProps {
  title: string;
  span: string; // Фрагмент для выделения
  description: string;
  bgImage: string;
  logoText: string;
  color: string;
}

const WindmillContent: React.FC<WindmillContentProps> = ({
  title,
  description,
  bgImage,
  logoText,
  span,
  color,
}) => {
  const renderTitleWithHighlight = () => {
    // Находим индекс начала и конца выделенного фрагмента
    const startIndex = title.indexOf(span);
    const endIndex = startIndex + span.length;

    return (
      <h2>
        {startIndex > 0 && title.slice(0, startIndex)}
        {span && <span className={`text-${color}`}>{span}</span>}
        {startIndex + span.length < title.length && title.slice(endIndex)}
      </h2>
    );
  };

  return (
    <div
      className={`${styles.contentContainer} after:absolute after:w-full after:z-[3] after:content-[''] after:top-0 after:left-0 after:h-full after:bg-${color}-gradient`}
    >
      <img className={styles.bgImage} src={bgImage} alt="Фоновое изображение" />
      <div className="flex gap-x-[14px] mb-[72px]">
        <svg
          width="37"
          height="42"
          viewBox="0 0 37 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.1301 10.5811V0.571533H0V29.1294L18.0651 41.255L36.1301 29.1294V21.5525V14.8257H29.6275H12.0544L29.6275 21.4563V25.4775L18.0651 33.2375L6.50258 25.4775V7.29523H29.6275V10.5811H36.1301Z"
            fill={
              color == "yellow"
                ? "#ffdc10"
                : color == "red"
                ? "#ff7f44"
                : "#64cd5d"
            }
          />
        </svg>

        <h3>{logoText}</h3>
      </div>
      <div className="flex text-left mb-[76px] w-[550px]">
        {renderTitleWithHighlight()}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-left w-[450px]">{description}</p>
        <button
          className={`!px-[20px] !py-[10px] !rounded-full text-[16px] font-[500] bg-${color}`}
        >
          Участвовать <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default WindmillContent;

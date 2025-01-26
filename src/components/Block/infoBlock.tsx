import React from "react";
import styles from "./infoBlock.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";

export interface InfoBlockProps {
  title: string[];
  desc: string;
  tag: string;
  tagicon: string;
  titleWidth?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  desc,
  tag,
  tagicon,
  titleWidth = "1000",
}) => {
  return (
    <div className="mx-[310px]">
      <div className={styles.tag}>
        <img src={tagicon} />
        <a>{tag}</a>
      </div>
      <div className="flex justify-start">
        <span
          className={`text-white text-[64px] font-[700] leading=[80px] text-left w-[${titleWidth}px] mb-[60px]`}
        >
          {title.map((el, index) => (
            <span className={index === 1 ? "text-yellow" : undefined}>
              {el}
            </span>
          ))}
        </span>
      </div>

      {/* <h1 className="mb-[60px] text-left w-[1000px]">{title}</h1> */}
      <p className={`${styles.desc} text-left w-[470px]`}>{desc}</p>
    </div>
  );
};

export default InfoBlock;

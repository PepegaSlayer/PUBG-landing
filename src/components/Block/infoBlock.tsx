import React from "react";
import styles from "./infoBlock.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";

export interface InfoBlockProps {
  title: string;
  desc: string;
  tag: string;
  tagicon: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, desc, tag, tagicon }) => {
  return (
    <div className="mx-[310px]">
      <div className={styles.tag}>
        <img src={tagicon} />
        <a>{tag}</a>
      </div>
      <h1 className="mb-[60px] text-left">{title}</h1>
      <p className={`${styles.desc} text-left`}>{desc}</p>
    </div>
  );
};

export default InfoBlock;

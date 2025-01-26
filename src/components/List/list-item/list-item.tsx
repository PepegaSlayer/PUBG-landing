import React from "react";
import stylesBlock from "../../Block/infoBlock.module.css";
import styles from "./list-item.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";
import arrow from "../../../icons/arrow.svg";

export interface InfoBlockProps {
  title: string;
  desc: string;
  icon: string;
}

const ListItem: React.FC<InfoBlockProps> = ({ title, desc, icon }) => {
  return (
    <div className={`flex w-[640px] ${styles.container}`}>
      <div className={styles.iconContainer}>
        <img src={icon}></img>
      </div>
      <div className="text-left">
        <h6 className="mb-[16px]">{title}</h6>
        <p className={stylesBlock.desc}>{desc}</p>
      </div>
      <img src={arrow} alt="Иконка стрелки" className={styles.arrow}></img>
    </div>
  );
};

export default ListItem;

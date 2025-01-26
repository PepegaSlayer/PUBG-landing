import React from "react";
//import styles from "../Block/infoBlock.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";

export interface IconsListItemProps {
  title: string;
  desc: string;
  icon: string;
}

const IconsListItem: React.FC<IconsListItemProps> = ({ title, desc, icon }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-full w-[81px] h-[81px] border-[1px] border-yellow flex items-center justify-center">
        <img
          className="w-[24px] h-auto"
          src={icon}
          alt="Иконка элемента списка"
        />
      </div>
      <div className="ml-[56px] text-left flex flex-col justify-between w-[240px]">
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default IconsListItem;

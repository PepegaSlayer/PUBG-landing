import React from "react";
import styles from "../Block/infoBlock.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";
import ListItem from "./list-item/list-item";
import android from "../../icons/downloadAndroid.svg";
import ios from "../../icons/downloadIos.svg";
import qr from "../../icons/QR.svg";

import icon1 from "../../icons/list/1.svg";
import icon2 from "../../icons/list/2.svg";
import icon3 from "../../icons/list/3.svg";
export interface InfoBlockProps {
  title: string;
  desc: string;
}

const listItems = [
  {
    title: "Зарегистрируйтесь",
    desc: "Пройдите верификацию и начните играть",
    icon: icon1,
  },
  {
    title: "Создайте профиль команды",
    desc: "Собери свою команду",
    icon: icon2,
  },
  {
    title: "Выбери турнир",
    desc: "Выбери подходящий турнир",
    icon: icon3,
  },
  {
    title: "Подай заявку",
    desc: "Зарегистрируй свою команду на турнир",
    icon: icon3,
  },
  {
    title: "Наслаждайся победой",
    desc: "Поймай удачу и победу",
    icon: icon3,
  },
];

const ListBlock: React.FC<InfoBlockProps> = ({ title, desc }) => {
  return (
    <div className="mx-[310px] mb-[70px] flex">
      <div className="w-[487px] text-left mt-[25px]">
        <h4 className="mb-[42px]">{title}</h4>
        <p className={`${styles.desc} mb-[74px]`}>{desc}</p>
        <div className="flex gap-x-[16px] mb-[108px]">
          <div className="bg-gray-dark py-[9px] px-[30px] rounded-full">
            <img src={ios}></img>
          </div>
          <div className="bg-gray-dark py-[9px] px-[30px] rounded-full">
            <img src={android}></img>
          </div>
        </div>
        <div className="">
          <img src={qr}></img>
        </div>
      </div>
      <div className="ml-auto flex flex-col justify-between">
        {listItems.map((item) => {
          return (
            <ListItem
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            ></ListItem>
          );
        })}
      </div>
    </div>
  );
};

export default ListBlock;

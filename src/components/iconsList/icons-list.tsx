import React from "react";
//import styles from "../Block/infoBlock.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";

import icon1 from "../../icons/adventegesList/1.svg";
import icon2 from "../../icons/adventegesList/2.svg";
import icon3 from "../../icons/adventegesList/3.svg";
import icon4 from "../../icons/adventegesList/4.svg";
import icon5 from "../../icons/adventegesList/5.svg";
import IconsListItem from "./iconsListItem/icon-list-item";

const listItems = [
  {
    title: "Лайв-чат",
    desc: "Общайся с командой прямо в мобильном приложении",
    icon: icon1,
  },
  {
    title: "Статистика",
    desc: "Отслеживай свои достижения",
    icon: icon2,
  },
  {
    title: "График турниров",
    desc: "Удобный календарь предстоящих игр",
    icon: icon3,
  },
  {
    title: "Находи команду",
    desc: "Объединяйся с другими пользователями платформы",
    icon: icon4,
  },
  {
    title: "Зарабатывай",
    desc: "Удобная система вывода призовых средств",
    icon: icon5,
  },
];

const IconsList: React.FC = ({}) => {
  return (
    <div className="mx-[310px] mb-[70px] grid grid-cols-3 gap-x-[100px] gap-y-[91px]">
      {listItems.map((item) => {
        return <IconsListItem {...item} />;
      })}
    </div>
  );
};

export default IconsList;

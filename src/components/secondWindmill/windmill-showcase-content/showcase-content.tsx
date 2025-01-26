import React from "react";
import styles from "../windmill.module.css";
import buttonStyles from "../../../shared-styles/buttons.module.css";
import bg from "../../../images/showcase-1.png";
import icon from "../../../icons/calendar.svg";
export interface ShowcaseContentProps {
  tag: string;
  date: string;
  bgImage: string;
  color: string;
  prize: string;
  infoTitle: string;
  infoDescription: string[];
}

const ShowcaseContent: React.FC<ShowcaseContentProps> = ({
  tag,
  date,
  bgImage,
  color,
  prize,
  infoTitle,
  infoDescription,
}) => {
  return (
    <div className="w-full h-[510px] ">
      <div className="h-[388px] rounded-[40px] bg-gray-dark px-[27px] py-[29px] flex flex-col mb-[22px]">
        <div className="flex items-center justify-left gap-x-[15px] mb-[24px]">
          <div
            className={`rounded-full w-[53px] h-[53px] bg-${color} flex justify-center items-center`}
          >
            {" "}
            <img src={icon} alt="иконка календаря" />
          </div>
          <p className="text-white">{date}</p>
          <button
            className={`${buttonStyles.secondary} !bg-black !ml-auto !text-[16px]`}
          >
            Участвовать
          </button>
        </div>
        <div className="flex justify-left gap-x-[5px] text-[14px]">
          <p className="text-white leading-[17px] border-2 border-gray rounded-[20px] px-[15px] py-[3px]">
            {tag}
          </p>
          <p
            className={`text-black leading-[17px] bg-${color} rounded-[20px] px-[15px] py-[3px]`}
          >
            {prize}
          </p>
        </div>
        <img
          src={bg}
          className="absolute h-[200px] w-auto top-[35%] left-[3%]"
          alt=""
        />
      </div>
      <div className="text-left flex flex-col gap-y-[2px]">
        <h2 className="leading-[52.5px] font-[600]">{infoTitle}</h2>
        <p className="leading-[20px] font-[500] text-[16px]">
          Формат: squad
          <br />
          Дисциплина: pubg mobile
        </p>
      </div>
    </div>
  );
};

export default ShowcaseContent;

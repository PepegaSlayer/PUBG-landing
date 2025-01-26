import React from "react";
import styles from "./infoBlock.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";

export interface BannerProps {
  icon: string;
  bgIamge: string;
  price: string;
  adventeges: string[];
  color: string;
}

const Banner: React.FC<BannerProps> = ({
  icon,
  bgIamge,
  price,
  adventeges,
  color,
}) => {
  return (
    <div
      className={`mx-[310px] bg-${color} w-auto h-[600px] rounded-[20px] p-[40px] flex flex-col justify-between`}
    >
      <img className="w-[40px] h-auto" src={icon}></img>
      <div className="text-left text-[28px] leading-[49px] font-[500]">
        {adventeges.map((item) => {
          return <div key={item}>- {item}</div>;
        })}
      </div>
      <div className="flex gap-x-[36px]">
        <button
          className={`${buttonStyles.secondary} !bg-black !text-[16px] !font-[500] !leading-[20px] !px-[107px] !py-[25px] !rounded-full`}
        >
          Купить
        </button>
        <h5 className="font-[500] text-[42px]">{price}</h5>
      </div>
      <img className="absolute h-[500px] w-auto left-[47%]" src={bgIamge}></img>
    </div>
  );
};

export default Banner;

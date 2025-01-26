import React from "react";
import styles from "./footer.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";
import logoSrc from "../../icons/logoWCopyright.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex mx-[310px] justify-between items-center mb-[60px] mt-[78px]">
      <div className="flex items-center gap-x-[25px]">
        <img className="w-[40px]" src={logoSrc} />
        <p className={styles.text}>© 2024 GoodGames™</p>
      </div>
      <ul className="flex gap-x-[69px]">
        <li className={styles.text}>Пользовательское соглашение</li>
        <li className={styles.text}>Условия оказания услуг и правила оферты</li>
        <li className={styles.text}>Политика конфиденциальности</li>
      </ul>
    </div>
  );
};

export default Footer;

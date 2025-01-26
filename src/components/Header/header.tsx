import React from "react";
import styles from "./header.module.css";
import buttonStyles from "../../shared-styles/buttons.module.css";
import logoSrc from "../../icons/logo.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.blur}></div>
      <header className={`${styles.header} text-white p-4`}>
        <nav className={styles.navigation}>
          <ul className="flex space-x-4 gap-x-[42px] text-[14px] leading-[17px] font-[500]">
            <li>
              <a href="#home">Принять участие</a>
            </li>
            <li>
              <a href="#about">Доступные турниры</a>
            </li>
            <li>
              <a href="#services">Приложение</a>
            </li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <img src={logoSrc} alt="логотип" />
        </div>
        <div className="flex gap-x-[16px]">
          <button className={buttonStyles.secondary}>Регистрация</button>
          <button className={buttonStyles.primary}>Войти</button>
        </div>
      </header>
    </>
  );
};

export default Header;

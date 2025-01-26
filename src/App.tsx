import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Windmill from "./components/Windmill/windmill";
import InfoBlock from "./components/Block/infoBlock";
import ListBlock from "./components/List/listBlock";

import tagIcon1 from "./icons/tag/game.svg";
import tagIcon2 from "./icons/tag/fire.svg";
import Footer from "./components/Footer/footer";
import SecondWindmill from "./components/secondWindmill/second-wind-mill";
import IconsList from "./components/iconsList/icons-list";

import bgImage1 from "./images/main-bg-userprofiles.png";
import bgImage2 from "./images/main-bg-phone.png";
import Banner from "./components/Banner/banner";

import bannerIcon from "./icons/banner.svg";
import bannerBg from "./images/banner-bg.png";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Windmill></Windmill>
      <div className="h-[142px]"></div>
      <InfoBlock
        title="ПРИМИ УЧАСТИЕ В ТУРНИРАХ PUBG MOBILE"
        desc={"Собери команду и поборись за право выиграть главный приз"}
        tag={"Как принять участие"}
        tagicon={tagIcon1}
      />
      <hr className="mt-[70px] mx-[316px] h-[1px] border-white/[15%] mb-[62px]"></hr>
      <ListBlock
        title={"КАК ПРИНЯТЬ УЧАСТИЕ"}
        desc={"Регистрируйся и принимай участие со своей командой."}
      />
      <div className="h-[133px]"></div>
      <InfoBlock
        title="ДОСТУПНЫЕ ТУРНИРЫ PUBG MOBILE"
        desc={"Выбери свой любимый турнир и стань чемпионом"}
        tag={"Доступные турниры"}
        tagicon={tagIcon2}
      />
      <div className="h-[133px]"></div>
      <SecondWindmill />
      <div className="h-[95px]"></div>
      <InfoBlock
        title="ПРЕИМУЩЕСТВА GOOD GAMES"
        desc={"Выбери свой любимый турнир и стань чемпионом"}
        tag={"Доступные турниры"}
        tagicon={tagIcon2}
      />
      <div className="h-[111px]"></div>
      <IconsList />
      <div className="h-[156px]"></div>
      <InfoBlock
        title="ЛУЧШИЕ МОМЕНТЫ ИГРЫ В G-STORIES"
        desc={
          "Следи за лучшими моментами из игр и турниров внутри личного кабинета"
        }
        tag={"Сторис"}
        tagicon={tagIcon2}
      />
      <img
        className="z-[-1] relative w-[981px] h-auto left-[40%] top-[-1%]"
        src={bgImage1}
        alt="Изображение профиелей пользователей"
      />
      <InfoBlock
        title="ПОДПИСКА PREMIUM"
        desc={
          "Получи неограниченный доступ к миссиям и Premium-турнирам, много бонусов и скидок"
        }
        tag={"Premium"}
        tagicon={tagIcon2}
      />
      <hr className="mx-[316px] h-[1px] border-white/[15%] my-[50px]"></hr>
      <Banner
        icon={bannerIcon}
        bgIamge={bannerBg}
        price={"249 ₽"}
        adventeges={[
          "Доступ к миссиям",
          "Скидка 10% в магазине",
          "Доступ к Premium турнирам",
          "Создание дополнительных команд",
          "Участие в Premium розыгрышах",
          "Повышенный процент наград",
        ]}
        color={"yellow"}
      />
      <div className="h-[130px]"></div>
      <InfoBlock
        title="ПРИЛОЖЕНИЕ ДЛЯ IOS И ANDROID"
        desc={
          "Скачайте приложение GoodGames для удобства пользования. Получите доступ ко всем мероприятиям от нас и наших партнеров."
        }
        tag={"App"}
        tagicon={tagIcon2}
      />
      <img
        className="z-[-1] relative w-full h-[auto]"
        src={bgImage2}
        alt="Изображение профиелей пользователей"
      />
      <Footer />
    </div>
  );
}

export default App;

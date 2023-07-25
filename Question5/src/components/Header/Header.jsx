import { useTranslation } from "react-i18next";
import "./Header.scss";
import { useState } from "react";
import SocialIcons from "../Social Icon/Social Icons";

const Header = () => {
  const [t, i18n] = useTranslation();
  const [header, setHeader] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  function changeLang(e) {
    e.target.value === "Select Language"
      ? ""
      : i18n.changeLanguage(e.target.value);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 5) {
      setHeader("");
    } else {
      setHeader("active");
    }
  });

  const toggleSearch = () => {
    setSearchOpen(searchOpen => !searchOpen)
  }

  return (
    <>
      <select className="change_lang" onChange={(e) => changeLang(e)}>
        <option defaultChecked>Select Language</option>
        <option value={"en"}>English</option>
        <option value={"ko"}>한국인</option>
      </select>
      <div className={`header ${header}`}>
        <a href="http://agcloud.bitnine.net/" target="_blank" rel="noreferrer">
          <b>{t("header.advert_heading")}</b>
          {t("header.advert_body")}
        </a>
      </div>
      <div className="lower_header">
        <button type="button" className={`${searchOpen ? 'open': ''}`}>
          <svg
            className="search"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 24 24"
            onClick={toggleSearch}
          >
            <path
              stroke="#808080"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.954 14.946L21 21m-4-11a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input type="text" placeholder="SEARCH" />
          <svg
            className="close"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            viewBox="0 0 1024 1024"
            onClick={toggleSearch}
          >
            <path fill="#cbcbcb" d="M195.2 195.2a64 64 0 0190.496 0L512 421.504 738.304 195.2a64 64 0 0190.496 90.496L602.496 512 828.8 738.304a64 64 0 01-90.496 90.496L512 602.496 285.696 828.8a64 64 0 01-90.496-90.496L421.504 512 195.2 285.696a64 64 0 010-90.496z"></path>
          </svg>
        </button>
        <a href="/">contact</a>
        <SocialIcons />
      </div>
    </>
  );
};

export default Header;

import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import { useState } from "react";
const Navbar = () => {
  const [t, i18n] = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  }
  return (
    <div className="navbar">
      <a href="/">
        <img
          src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png"
          width={"232.5"}
          height={"60px"}
          className="logo"
        />
      </a>
      <div className={`links ${menuOpen ? 'active':''}`}>
        <a href="#" className="active">
          {t("navbar.link1.main")}
          <div>
            <a href="#">
              {t("navbar.link1.sub1.main")}
              <div>
                <a href="#">{t("navbar.link1.sub1.sub1")}</a>
                <a href="#">{t("navbar.link1.sub1.sub2")}</a>
                <a href="#">{t("navbar.link1.sub1.sub3")}</a>
                <a href="#">{t("navbar.link1.sub1.sub4")}</a>
              </div>
            </a>
            <a href="#">
              {t("navbar.link1.sub2.main")}
              <div>
                <a href="#">{t("navbar.link1.sub2.sub1")}</a>
              </div>
            </a>
          </div>
        </a>
        <a href="#">{t("navbar.link2")}</a>
        <a href="#">{t("navbar.link3")}</a>
        <a href="#">
          {t("navbar.link4.main")}
          <div>
            <a href="#">{t("navbar.link4.sub1")}</a>
            <a href="#">{t("navbar.link4.sub2")}</a>
          </div>
        </a>
        <a href="#">{t("navbar.link5")}</a>
        <a href="#">
          {t("navbar.link6.main")}
          <div>
            <a href="#">{t("navbar.link6.sub1")}</a>
            <a href="#">{t("navbar.link6.sub2")}</a>
          </div>
        </a>
        <a href="#">
          {t("navbar.link7.main")}
          <div>
            <a href="#">{t("navbar.link7.sub1")}</a>
            <a href="#">{t("navbar.link7.sub2")}</a>
            <a href="#">{t("navbar.link7.sub3")}</a>
          </div>
        </a>
        <a href="#" className="main">
          <span>{t("navbar.link8")}</span>
        </a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 17h14M5 12h14M5 7h14"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;

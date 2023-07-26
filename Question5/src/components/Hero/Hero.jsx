import { useTranslation } from "react-i18next";
import "./Hero.scss";
import PrimaryBtn from "../Primary Button/PrimaryBtn";
const Hero = () => {
  const [t, i18n] = useTranslation("");
  return (
    <>
      <div className="hero-wrapper">
        <img
          src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png"
          alt="AgenSQL Logo"
          width={301}
          height={61}
        />
        <div>
          <h3>{t("hero.tagline")}</h3>
          <p>
            {t("hero.desc_1_1")}
            <br />
            {t("hero.desc_1_2")}
          </p>
          <p>
            {t("hero.desc_2_1")}
            <br />
            {t("hero.desc_2_2")}
          </p>
          <p>
            {t("hero.desc_3_1")}
            <br />
            {t("hero.desc_3_2")}
          </p>
        </div>
        <div className="btns">
          <PrimaryBtn>{t("hero.btn_1")}</PrimaryBtn>
          <PrimaryBtn>{t("hero.btn_2")}</PrimaryBtn>
          <PrimaryBtn>{t("hero.btn_3")}</PrimaryBtn>
        </div>
      </div>
      <div className="features_img">
        <img src="https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png" />
      </div>
    </>
  );
};

export default Hero;

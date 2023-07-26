import { useTranslation } from "react-i18next";
import "./Footer.scss";
import SocialIcons from "../Social Icon/Social Icons";
const Footer = () => {
  const [t, i18n] = useTranslation("");
  return (
    <>
      <div className="footer">
        <div>
          <h2>{t("footer.link1.main")}</h2>
          <a href="#">{t("footer.link1.sub1")}</a>
          <a href="#">{t("footer.link1.sub2")}</a>
          <a href="#">{t("footer.link1.sub3")}</a>
        </div>
        <a href="#">{t("footer.link2")}</a>
        <a href="#">{t("footer.link3")}</a>
        <div>
          <h2>{t("footer.link4.main")}</h2>
          <a href="#">{t("footer.link4.sub1")}</a>
          <a href="#">{t("footer.link4.sub2")}</a>
        </div>
        <a href="#">{t("footer.link5")}</a>
        <div>
          <h2>{t("footer.link6.main")}</h2>
          <a href="#">{t("footer.link6.sub1")}</a>
          <a href="#">{t("footer.link6.sub2")}</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 by Bitnine Global Inc. All Rights Reserved.</p>
        <div>
            <SocialIcons />
            <a href="#">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Footer;

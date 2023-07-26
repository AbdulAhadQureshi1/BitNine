import { useTranslation } from "react-i18next";
import "./Package.scss";
import PackageCard from "../PackageCard/PackageCard";
const Package = () => {
  const [t, i18n] = useTranslation("");
  return (
    <div className="package">
      <h2>{t("package.heading")}</h2>
      <p>
        {t("package.desc_1")}
        <br />
        {t("package.desc_2")}
      </p>
      <div className="content">
        <div className="img_section">
          <h3>{t("package.sub_1.main")}</h3>
          <h4>
            <span>{t("package.sub_1.desc_1_1")}</span>
            {t("package.sub_1.desc_1_2")}
          </h4>
          <img src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png" />
          <h4>{t("package.sub_1.desc_2")}</h4>
        </div>
        <div className="card_section">
          <h3>{t("package.sub_2.main")}</h3>
          <PackageCard
            heading={t("package.sub_2.c_1.main")}
            p1={t("package.sub_2.c_1.p_1")}
            p2={t("package.sub_2.c_1.p_2")}
          />
          <PackageCard
            heading={t("package.sub_2.c_2.main")}
            p1={t("package.sub_2.c_2.p_1")}
            p2={t("package.sub_2.c_2.p_2")}
          />
          <PackageCard
            heading={t("package.sub_2.c_3.main")}
            p1={t("package.sub_2.c_3.p_1")}
            p2={t("package.sub_2.c_3.p_2")}
          />
          <PackageCard
            heading={t("package.sub_2.c_4.main")}
            p1={t("package.sub_2.c_4.p_1")}
            p2={t("package.sub_2.c_4.p_2")}
          />
          <PackageCard
            heading={t("package.sub_2.c_5.main")}
            p1={t("package.sub_2.c_5.p_1")}
            p2={t("package.sub_2.c_5.p_2")}
          />
          <PackageCard
            heading={t("package.sub_2.c_6.main")}
            p1={t("package.sub_2.c_6.p_1")}
            p2={t("package.sub_2.c_6.p_2")}
          />
        </div>
      </div>
    </div>
  );
};

export default Package;

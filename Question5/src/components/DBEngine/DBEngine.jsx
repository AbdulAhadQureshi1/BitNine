import { useTranslation } from 'react-i18next';
import './DBEngine.scss'
import Card from '../DBEngineCard/Card';
const DBEngine = () => {
    const [t, i18n] = useTranslation("");
  return (
    <div className='db_engine'>
      <h2>{t("db_engine.heading")}</h2>
      <h3>{t("db_engine.sub_heading")}</h3>
      <p>{t("db_engine.desc_1")}<br/>{t("db_engine.desc_2")}</p>
      <div className='cards'>
        <Card
            point_1={t("db_engine.card_1.p1")}
            point_2={t("db_engine.card_1.p2")}
            point_3={t("db_engine.card_1.p1")}
            img="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
        />
        <Card
            point_1={t("db_engine.card_2.p1")}
            point_2={t("db_engine.card_2.p2")}
            point_3={t("db_engine.card_2.p3")}
            img="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
        />
        <Card
            point_1={t("db_engine.card_3.p1")}
            point_2={t("db_engine.card_3.p2")}
            point_3={t("db_engine.card_3.p3")}
            img="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
        />
      </div>
    </div>
  )
}

export default DBEngine;

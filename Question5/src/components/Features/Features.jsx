import { useTranslation } from 'react-i18next'
import './Features.scss'
const Features = () => {
    const [t, i18n] = useTranslation("");
  return (
    <div className='features'>
      <h2>{t("features.heading")}</h2>
      <p>{t("features.desc_1")}<br/>{t("features.desc_2")}</p>
      <img
        src='https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng-1024x402.png'
        alt='features'
        width={1100}
        height={431.8}
      />
    </div>
  )
}

export default Features;

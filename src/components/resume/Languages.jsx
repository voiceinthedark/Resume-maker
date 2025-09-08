import "../../styles/resumelanguages.css"
import { useTranslation } from "react-i18next"

export default function Languages({ data }) {
  const { t } = useTranslation('common')
  return (
    <section className="languages-section">
      <h2>{t('languages')}</h2>
      <ul className="languages-list">
        {data.languages.map(lang => {
          return (
            <li key={lang.id} className="languages-item">
              {lang.language}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

import "../../../styles/classicskill.css"
import { useTranslation } from "react-i18next"

export default function ClassicLanguage({ data }) {
  const {t} = useTranslation('common')
  return (
    <section className="classic-language">
      <h2>{t('languages')}</h2>
      <hr />
      <ul className="classic-language-list">
        {data.languages.map(lang => {
          return (
            <li key={lang.id} className="classic-language-item">
              {lang.language}
            </li>
          )
        })}
      </ul>

    </section>
  )
}

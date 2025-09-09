import "../../../styles/classicskill.css"
import { useTranslation } from "react-i18next"

export default function ClassicSkill({ data }) {
  const {t} = useTranslation('common')

  return (
    <section className="classic-skill">
      <h2>{t('skills')}</h2>
      <hr />
      <ul className="classic-skill-list">
        {data.skills.map(skill => {
          return (
            <li key={skill.id} className="classic-skill-item">
              <span>{skill.skill}</span>
            </li>
          )
        })}
      </ul>


    </section>
  )
}

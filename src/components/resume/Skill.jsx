// @ts-check

import '../../styles/resumeskill.css'
import { useTranslation } from 'react-i18next'

export default function Skill({ data }) {
  const { t } = useTranslation('common')

  return (
    <section className="skill-preview">
      <h2>{t('skills')}</h2>
      <ul className="skill-list">
        {data.skills.map(skill => {
          return (
            <li key={skill.id} className='skill-item'>
              {skill.skill}
            </li>
          )
        })}
      </ul>

    </section>
  )

}

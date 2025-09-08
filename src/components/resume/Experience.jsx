import "../../styles/resumeexperience.css"
import { useTranslation } from "react-i18next"

export default function Experience({ data }) {
  const { t } = useTranslation('common')
  return (
    <section className="preview-experience">
      <h2>{t('experience')}</h2>
      <ul className="experience-list">
        {data.experience.map(exp => {
          return (
            <li key={exp.id}>
              <div className="experience-item">
                <div className="experience-item-header">
                  <h3>{exp.job}</h3>
                  <h4>{exp.yearStart} - {exp.yearFinish}</h4>
                </div>
                <p className="experience-item-role">{exp.role}</p>
                <p className="experience-item-description">{exp.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

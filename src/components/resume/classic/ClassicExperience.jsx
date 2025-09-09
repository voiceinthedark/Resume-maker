import "../../../styles/classiceducation.css"
import CalendarIcon from "../../icons/CalendarIcon"
import { useTranslation } from "react-i18next"

export default function ClassicExperience({ data }) {
  const {t} = useTranslation('common')

  return (
    <section className="classic-experience">
      <h2>{t('experience')}</h2>
      <hr />
      {data.experience.map(exp => {
        return (
          <div key={exp.id} className="classic-experience-item">
            <h3>{exp.job}</h3>
            <h4>{exp.role}</h4>
            <span className="experience-date">
              <CalendarIcon fill="black" height="15" width="15" />
              <span>{exp.yearStart} - {exp.yearFinish}</span>
            </span>
            <p>{exp.description}</p>
          </div>
        )

      })}


    </section>

  )
}

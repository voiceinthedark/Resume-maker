import "../../../styles/classiceducation.css"
import CalendarIcon from "../../icons/CalendarIcon"
import { useTranslation } from "react-i18next"

export default function ClassicEducation({ data }) {
  const {t} = useTranslation('common')

  return (
    <section className="classic-education">
      <h2>{t('education')}</h2>
      <hr />
      {data.education.map(educ => {
        return (
          <div className="classic-education-item">
            <h3>{educ.university}</h3>
            <h4>{educ.speciality}</h4>
            <span className="education-date">
              <CalendarIcon width="15" height="15" fill='black'/>
              {educ.yearStart} - {educ.yearFinish}</span>
            <p>{educ.description}</p>
          </div>
        )
      })}

    </section>
  )
}

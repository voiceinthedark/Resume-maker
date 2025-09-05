import "../../styles/resumeeducation.css"
export default function Education({ data }) {
  return (
    <section className="preview-education">
      <h2>Education</h2>
      <ul className="education-list">
        {data.education.map(educ => {
          return (
            <li key={educ.id}>
              <div className="education-item">
                <div className="education-item-header">
                  <h3>{educ.university}</h3>
                  <h3>{educ.yearStart} - {educ.yearFinish}</h3>
                </div>
                <p className="education-item-speciality">{educ.speciality}</p>
                <p className="education-item-description">{educ.description}</p>
              </div>

            </li>
          )
        })}

      </ul>

    </section>
  )
}

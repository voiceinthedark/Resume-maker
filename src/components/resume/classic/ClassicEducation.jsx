import "../../../styles/classiceducation.css"
export default function ClassicEducation({ data }) {
  return (
    <section className="classic-education">
      <h2>Education</h2>
      <hr />
      {data.education.map(educ => {
        return (
          <div className="classic-education-item">
            <h3>{educ.university}</h3>
            <h4>{educ.speciality}</h4>
            <span className="education-date">{educ.yearStart} - {educ.yearFinish}</span>
            <p>{educ.description}</p>
          </div>
        )
      })}

    </section>
  )
}

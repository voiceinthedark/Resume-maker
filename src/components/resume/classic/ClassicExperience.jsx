import "../../../styles/classiceducation.css"
import CalendarIcon from "../../icons/CalendarIcon"
export default function ClassicExperience({ data }) {
  return (
    <section className="classic-experience">
      <h2>Experience</h2>
      <hr />
      {data.experience.map(exp => {
        return (
          <div className="classic-experience-item">
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

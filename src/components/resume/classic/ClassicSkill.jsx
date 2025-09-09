import "../../../styles/classicskill.css"
export default function ClassicSkill({ data }) {
  return (
    <section className="classic-skill">
      <h2>Skills</h2>
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

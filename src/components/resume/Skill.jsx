// @ts-check

import '../../styles/resumeskill.css'

export default function Skill({ data }) {

  return (
    <section className="skill-preview">
      <h2>Skills</h2>
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

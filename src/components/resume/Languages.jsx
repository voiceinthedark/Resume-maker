import "../../styles/resumelanguages.css"

export default function Languages({ data }) {
  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <ul className="languages-list">
        {data.languages.map(lang => {
          return (
            <li key={lang.id} className="languages-item">
              {lang.language}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

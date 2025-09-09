import "../../../styles/classicskill.css"
export default function ClassicLanguage({ data }) {
  return (
    <section className="classic-language">
      <h2>Languages</h2>
      <hr />
      <ul className="classic-language-list">
        {data.languages.map(lang => {
          return (
            <li key={lang.id} className="classic-language-item">
              {lang.language}
            </li>
          )
        })}
      </ul>

    </section>
  )
}

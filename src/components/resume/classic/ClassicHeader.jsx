import "../../../styles/classicheader.css"

export default function ClassicHeader({ data }) {
  return (
    <section className="classic-header">
      <h1>{data.profile.fullname}</h1>
      <hr />
      <div className="header-info">
        <span>{data.profile.speciality} &#8226;</span>
        {data.links.map((l, i) => {
          return (
            <span>{l.value} {i < data.links.length - 1 ? <span>&#8226;</span> : ''} </span>
          )
        })}
      </div>
    </section>
  )
}

import "../../../styles/classicprofile.css"
export default function ClassicProfile({ data }) {
  return (
    <section className="classic-profile">
      <h2>Profile</h2>
      <hr />
      <p>{data.profile.bio}</p>
    </section>
  )
}

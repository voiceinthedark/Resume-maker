import Profile from "./Profile";
import "../../styles/resumemain.css"
import Education from "./Education";

export default function Main({ data }) {
  return (
    <section className="preview-main">
      <Profile data={data} />
      <Education data={data} />
    </section>
  )
}

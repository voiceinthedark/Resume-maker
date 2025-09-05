import Profile from "./Profile";
import "../../styles/resumemain.css"

export default function Main({ data }) {
  return (
    <section className="preview-main">
      <Profile data={data} />

    </section>
  )
}

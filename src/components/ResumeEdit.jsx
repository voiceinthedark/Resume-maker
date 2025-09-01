import LinksEdit from "./LinksEdit";
import ProfileEdit from "./ProfileEdit";
import '../styles/resumeedit.css'

function ResumeEdit() {

  return (
    <section className="resume-edit">
      <ProfileEdit />
      <LinksEdit />
    </section>
  )
}

export default ResumeEdit

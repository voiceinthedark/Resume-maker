import LinksEdit from "./LinksEdit";
import ProfileEdit from "./ProfileEdit";
import '../styles/resumeedit.css'
import EducationEdit from "./EducationEdit";

function ResumeEdit() {

  return (
    <section className="resume-edit">
      <ProfileEdit />
      <LinksEdit />
      <EducationEdit />
    </section>
  )
}

export default ResumeEdit

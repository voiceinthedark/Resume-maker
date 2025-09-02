import LinksEdit from "./LinksEdit";
import ProfileEdit from "./ProfileEdit";
import '../styles/resumeedit.css'
import EducationEdit from "./EducationEdit";
import SkillsEdit from "./SkillsEdit";

function ResumeEdit() {

  return (
    <section className="resume-edit">
      <ProfileEdit />
      <LinksEdit />
      <EducationEdit />
      <SkillsEdit />
    </section>
  )
}

export default ResumeEdit

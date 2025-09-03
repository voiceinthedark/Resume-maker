import LinksEdit from "./LinksEdit";
import ProfileEdit from "./ProfileEdit";
import '../styles/resumeedit.css'
import EducationEdit from "./EducationEdit";
import SkillsEdit from "./SkillsEdit";
import ExperienceEdit from "./ExperienceEdit";

function ResumeEdit() {

  return (
    <section className="resume-edit">
      <ProfileEdit />
      <LinksEdit />
      <EducationEdit />
      <SkillsEdit />
      <ExperienceEdit />
    </section>
  )
}

export default ResumeEdit

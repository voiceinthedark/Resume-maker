import LinksEdit from "./LinksEdit";
import ProfileEdit from "./ProfileEdit";
import '../styles/resumeedit.css'
import EducationEdit from "./EducationEdit";
import SkillsEdit from "./SkillsEdit";
import ExperienceEdit from "./ExperienceEdit";
import LanguageEdit from "./LanguageEdit";

function ResumeEdit({data, setData}) {

  return (
    <section className="resume-edit">
      <ProfileEdit data={data} setData={setData}/>
      <LinksEdit data={data} setData={setData}/>
      <EducationEdit data={data} setData={setData} />
      <SkillsEdit data={data} setData={setData} />
      <ExperienceEdit />
      <LanguageEdit />
    </section>
  )
}

export default ResumeEdit

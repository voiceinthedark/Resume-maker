import LinksEdit from "./LinksEdit";
import ProfileEdit from "./ProfileEdit";
import '../styles/resumeedit.css'
import EducationEdit from "./EducationEdit";
import SkillsEdit from "./SkillsEdit";
import ExperienceEdit from "./ExperienceEdit";
import LanguageEdit from "./LanguageEdit";

function ResumeEdit({data, setData, darkMode}) {

  return (
    <section className="resume-edit">
      <ProfileEdit data={data} setData={setData} darkMode={darkMode}/>
      <LinksEdit data={data} setData={setData} darkMode={darkMode}/>
      <EducationEdit data={data} setData={setData} darkMode={darkMode}/>
      <SkillsEdit data={data} setData={setData} darkMode={darkMode}/>
      <ExperienceEdit data={data} setData={setData} darkMode={darkMode}/>
      <LanguageEdit data={data} setData={setData} darkMode={darkMode}/>
    </section>
  )
}

export default ResumeEdit

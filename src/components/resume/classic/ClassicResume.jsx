import ClassicHeader from "./ClassicHeader";
import "../../../styles/classicresume.css"
import ClassicEducation from "./ClassicEducation";
import ClassicExperience from "./ClassicExperience";
import ClassicSkill from "./ClassicSkill";
import ClassicProfile from "./ClassicProfile";
import ClassicLanguage from "./ClassicLanguage";

export default function ClassicResume({ data, style }) {
  return (
    <main
      id="classic-resume"
      className="classic-resume"
      style={{ fontFamily: style.font.style }}
    >
      <ClassicHeader data={data} />
      <ClassicProfile data={data} />
      <ClassicEducation data={data} />
      <ClassicExperience data={data} />
      <ClassicSkill data={data} />
      <ClassicLanguage data={data} />
    </main>
  )
}

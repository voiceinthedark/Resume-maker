import ClassicHeader from "./ClassicHeader";
import "../../../styles/classicresume.css"
import ClassicEducation from "./ClassicEducation";

export default function ClassicResume({ data }) {
  return (
    <main className="classic-resume">
      <ClassicHeader data={data} />
      <ClassicEducation data={data} />
    </main>
  )
}

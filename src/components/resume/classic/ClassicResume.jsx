import ClassicHeader from "./ClassicHeader";
import "../../../styles/classicresume.css"

export default function ClassicResume({ data }) {
  return (
    <main className="classic-resume">
      <ClassicHeader data={data} />
    </main>
  )
}

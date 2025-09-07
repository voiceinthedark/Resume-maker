import "../../styles/resumepreview.css"
import Header from "./Header"
import Main from "./Main"
import Side from "./Side"
import PrintDocument from "../utils/PrintDocument"

/**
 * Main component that controls the placement of sections of the resume preview
 * */
function ResumePreview({ data, darkMode }) {

  return (
    <section id="resume-preview" className="resume-preview">
      <Header data={data} />
      <Side data={data} />
      <Main data={data} />
      {/* <PrintDocument darkMode={darkMode} /> */}
    </section>
  )

}

export default ResumePreview

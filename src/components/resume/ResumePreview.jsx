import "../../styles/resumepreview.css"
import Header from "./Header"
import Main from "./Main"
import Side from "./Side"

/**
 * Main component that controls the placement of sections of the resume preview
 * */
function ResumePreview({ data, style}) {

  return (
    <section 
      id="resume-preview" 
      className="resume-preview"
      style={{fontFamily: style.font.style}}
    >
      <Header data={data} />
      <Side data={data} />
      <Main data={data} />
      {/* <PrintDocument darkMode={darkMode} /> */}
    </section>
  )

}

export default ResumePreview

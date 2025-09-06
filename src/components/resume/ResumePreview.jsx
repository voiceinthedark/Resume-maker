import "../../styles/resumepreview.css"
import Header from "./Header"
import Main from "./Main"
import Side from "./Side"

/**
 * Main component that controls the placement of sections of the resume preview
 * */
function ResumePreview({data}) {

  return (
    <section id="resume-preview" className="resume-preview">
      <Header data={data} />
      <Side data={data} />
      <Main data={data} />
    </section>
  )

}

export default ResumePreview

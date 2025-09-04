import "../../styles/resumepreview.css"
import Contact from "./Contact"
import Header from "./Header"
import Side from "./Side"

/**
 * Main component that controls the placement of sections of the resume preview
 * */
function ResumePreview({data}) {

  return (
    <section className="resume-preview">
      <Header data={data} />
      <Side data={data} />
    </section>
  )

}

export default ResumePreview

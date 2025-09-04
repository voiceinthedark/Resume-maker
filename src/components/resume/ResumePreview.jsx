import "../../styles/resumepreview.css"
import Header from "./Header"

/**
 * Main component that controls the placement of sections of the resume preview
 * */
function ResumePreview({data}) {

  return (
    <section className="resume-preview">
      <Header data={data} />

    </section>
  )

}

export default ResumePreview

import SectionMenuButton from "./utils/SectionMenuButton"

function EducationEdit() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <SectionMenuButton className={'education-btn'} 
        id={'education-btn'} 
        name={'Education'} 
        showForm={showForm} 
        setShowForm={setShowForm} />
      


    </>
  )
}

export default EducationEdit

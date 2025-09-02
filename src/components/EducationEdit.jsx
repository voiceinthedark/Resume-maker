import SectionMenuButton from "./utils/SectionMenuButton"
import BookOpenIcon from './icons/BookOpenIcon'
import { useState } from "react"
import PlusIcon from "./icons/PlusIcon"
import XIcon from "./icons/XIcon"
import "../styles/educationedit.css"

function EducationEdit() {
  const [showForm, setShowForm] = useState(false)
  const [education, setEducation] = useState([{
    id: 'liu', university: 'LIU', speciality: 'Computer Science', yearStart: '2006', yearFinish: '2009',
  }])

  function handleEducationChange(id, field, value) {
    setEducation(prevEducation =>
      prevEducation.map(educ =>
        educ.id === id ?
          {
            ...educ,
            [field]: value,
          } :
          educ)
    )

  }

  function handleEducationAdd(e) {
    e.preventDefault()
    const newId = `university-${Date.now()}`
    setEducation(prevEd => [...prevEd,
    { id: newId, university: '', speciality: '', yearStart: '', yearFinish: '' }])
  }

  function handleEducationRemove(id) {
    setEducation(education.filter(educ => educ.id !== id))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'education-btn'}
        name={'Education'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={BookOpenIcon}
        iconProps={{ fill: 'black' }}
      />
      <form action="" id="education-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {education.map((educ, index) => (
          <div key={educ.id} className="education-item">
            <div className="item-label">
              <label htmlFor={educ.university}>
                University
              </label>
              <div className="education-subitem">
                <input
                  type="text"
                  placeholder={educ.university}
                  onChange={(e) => handleEducationChange(educ.id, 'university', e.target.value)}
                  className="education-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handleEducationRemove(educ.id)}>
                    <XIcon className={'removeicon'} fill="red" />
                  </button>
                }
              </div>
            </div>
            <div className="item-label">
              <label htmlFor={educ.speciality}>
                Speciality
              </label>
              <input type="text"
                placeholder={educ.speciality}
                onChange={(e) => handleEducationChange(educ.id, 'speciality', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={educ.yearStart}>
                Year start
              </label>
              <input type="text"
                placeholder={educ.yearStart}
                onChange={(e) => handleEducationChange(educ.id, 'yearStart', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={educ.yearFinish}>
                Year Finish
              </label>
              <input type="text"
                placeholder={educ.yearFinish}
                onChange={(e) => handleEducationChange(educ.id, 'yearFinish', e.target.value)} />
            </div>

            <hr />
          </div>
        ))}
        <button className="btn-add" onClick={handleEducationAdd}>
          Add new Education
          <PlusIcon width="48px" height="48px" />
        </button>
      </form>
    </>
  )
}

export default EducationEdit

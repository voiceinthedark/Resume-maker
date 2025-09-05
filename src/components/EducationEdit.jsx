import SectionMenuButton from "./utils/SectionMenuButton"
import BookOpenIcon from './icons/BookOpenIcon'
import { useState } from "react"
import PlusIcon from "./icons/PlusIcon"
import XIcon from "./icons/XIcon"
import "../styles/educationedit.css"

function EducationEdit({ data, setData, darkMode }) {
  const [showForm, setShowForm] = useState(false)

  function handleEducationChange(id, field, value) {
    setData(prevData => ({
      ...prevData,
      education: prevData.education.map(educ =>
        educ.id === id ?
          {
            ...educ,
            [field]: value,
          } : educ)
    }))
  }

  function handleEducationAdd(e) {
    e.preventDefault()
    const newId = `university-${Date.now()}`
    setData(prevData => ({
      ...prevData,
      education: [...prevData.education,
      {
        id: newId,
        university: '',
        speciality: '',
        yearStart: '',
        yearFinish: ''
      }]
    }))
  }

  function handleEducationRemove(id) {
    setData(prevData => ({ ...prevData, education: prevData.education.filter(educ => educ.id !== id) }))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'education-btn'}
        name={'Education'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={BookOpenIcon}
        iconProps={darkMode ? { fill: 'white' } : { fill: 'black' }}
      />
      <form action="" id="education-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {data.education.map((educ, index) => (
          <div key={educ.id} className="education-item">
            <div className="item-label">
              <label htmlFor={`university-${educ.id}`}>
                University
              </label>
              <div className="education-subitem">
                <input
                  type="text"
                  id={`university-${educ.id}`}
                  value={educ.university}
                  placeholder={educ.university}
                  onChange={(e) => handleEducationChange(educ.id, 'university', e.target.value)}
                  className="education-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handleEducationRemove(educ.id)}>
                    <XIcon className={'removeicon'} fill={darkMode ? 'white' : 'black'} />
                  </button>
                }
              </div>
            </div>
            <div className="item-label">
              <label htmlFor={`speciality-${educ.id}`}>
                Speciality
              </label>
              <input type="text"
                id={`speciality-${educ.id}`}
                value={educ.speciality}
                placeholder={educ.speciality}
                onChange={(e) => handleEducationChange(educ.id, 'speciality', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={`yearStart-${educ.id}`}>
                Year start
              </label>
              <input type="text"
                id={`yearStart-${educ.id}`}
                value={educ.yearStart}
                placeholder={educ.yearStart}
                onChange={(e) => handleEducationChange(educ.id, 'yearStart', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={`yearFinish-${educ.id}`}>
                Year Finish
              </label>
              <input type="text"
                id={`yearFinish-${educ.id}`}
                value={educ.yearFinish}
                placeholder={educ.yearFinish}
                onChange={(e) => handleEducationChange(educ.id, 'yearFinish', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={`description-${educ.id}`}>
                Description
              </label>
              <textarea
                name="description"
                id={`description-${educ.id}`}
                cols={12} rows={5}
                value={educ.description}
                onChange={(e) => handleEducationChange(educ.id, 'description', e.target.value)}
              ></textarea>

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

// @ts-check
import { useState } from "react"
import SectionMenuButton from "./utils/SectionMenuButton"
import BriefcaseIcon from "./icons/BriefcaseIcon"
import XIcon from "./icons/XIcon"
import PlusIcon from "./icons/PlusIcon"
import "../styles/experienceedit.css"

function ExperienceEdit({ data, setData, darkMode }) {
  const [showForm, setShowForm] = useState(false)


  /**
   * method to handle the change of fields on user input
   * @param {string} id 
   * @param {string} label 
   * @param {string} value 
   * */
  function handleJobChange(id, label, value) {
    setData(prevData => ({
      ...prevData, experience: prevData.experience.map(job =>
        job.id === id ? { ...job, [label]: value } : job)
    }))
  }

  /**
   * method to handle the addition of a new job item
   * @param {React.MouseEvent<HTMLButtonElement>} e 
   * */
  function handleJobAdd(e) {
    e.preventDefault()
    const newId = `job-${Date.now()}`
    setData(prevData => ({
      ...prevData, experience: [...prevData.experience, {
        id: newId,
        job: '',
        role: '',
        description: '',
        yearStart: '',
        yearFinish: ''
      }]
    }))
  }

  /**
   * method to remove a job by id
   * @param {string} id 
   * */
  function handleJobRemove(id) {
    setData(prevData => ({
      ...prevData, experience: prevData.experience.filter(job => job.id !== id)
    }))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'experience-btn'}
        name={'Experience'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={BriefcaseIcon}
        iconProps={darkMode ? {fill: 'white'} : {fill: 'black'}}
      />
      <form action="" id="experience-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {data.experience.map((job, index) => (
          <div key={job.id} className="job-item">
            <div className="item-label">
              <label htmlFor={job.id}>
                Company
              </label>
              <div className="job-subitem">
                <input
                  type="text"
                  id={job.id}
                  value={job.job}
                  placeholder={job.job}
                  onChange={(e) => handleJobChange(job.id, 'job', e.target.value)}
                  className="job-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handleJobRemove(job.id)}>
                    <XIcon className={'removeicon'} fill={darkMode ? 'white': 'black'} />
                  </button>
                }
              </div>
            </div>
            <div className="item-label">
              <label htmlFor={job.id}>
                Role
              </label>
              <input type="text"
                id={job.id}
                value={job.role}
                placeholder={job.role}
                onChange={(e) => handleJobChange(job.id, 'role', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={job.id}>
                Year start
              </label>
              <input type="text"
                id={job.id}
                value={job.yearStart}
                placeholder={job.yearStart}
                onChange={(e) => handleJobChange(job.id, 'yearStart', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={job.id}>
                Year Finish
              </label>
              <input type="text"
                id={job.id}
                value={job.yearFinish}
                placeholder={job.yearFinish}
                onChange={(e) => handleJobChange(job.id, 'yearFinish', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={job.id}>
                Job Description
              </label>
              <textarea
                rows={5}
                id={job.id}
                value={job.description}
                placeholder={job.description}
                onChange={(e) => handleJobChange(job.id, 'description', e.target.value)}>
              </textarea>
            </div>

            <hr />
          </div>
        ))}
        <button className="btn-add" onClick={handleJobAdd}>
          Add new Job
          <PlusIcon width="48px" height="48px" />
        </button>
      </form>
    </>
  )

}

export default ExperienceEdit

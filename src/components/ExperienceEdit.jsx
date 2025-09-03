// @ts-check
import { useState } from "react"
import SectionMenuButton from "./utils/SectionMenuButton"
import BriefcaseIcon from "./icons/BriefcaseIcon"
import XIcon from "./icons/XIcon"
import PlusIcon from "./icons/PlusIcon"
import "../styles/experienceedit.css"

function ExperienceEdit() {
  const [showForm, setShowForm] = useState(false)
  const [jobs, setJobs] = useState([{
    id: 'smart', job: 'Smart', role: 'Software developer', description: '', yearStart: '2009', yearFinish: '2010',
  }])


  /**
   * method to handle the change of fields on user input
   * @param {string} id 
   * @param {string} label 
   * @param {string} value 
   * */
  function handleJobChange(id, label, value) {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === id 
          ? {...job, [label]: value} 
          : job))
  }

  /**
   * method to handle the addition of a new job item
   * @param {React.MouseEvent<HTMLButtonElement>} e 
   * */
  function handleJobAdd(e) {
    e.preventDefault()
    const newId = `job-${Date.now()}`
    setJobs(prevJobs => 
      [...prevJobs, 
        {id: newId, 
          job: '', 
          role: '', 
          description: '', 
          yearStart: '', 
          yearFinish: ''}])

  }

  /**
   * method to remove a job by id
   * @param {string} id 
   * */
  function handleJobRemove(id) {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== id))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'experience-btn'}
        name={'Experience'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={BriefcaseIcon}
        iconProps={{ fill: 'black' }}
      />
      <form action="" id="experience-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {jobs.map((job, index) => (
          <div key={job.id} className="job-item">
            <div className="item-label">
              <label htmlFor={job.job}>
                Company
              </label>
              <div className="job-subitem">
                <input
                  type="text"
                  placeholder={job.job}
                  onChange={(e) => handleJobChange(job.id, 'job', e.target.value)}
                  className="job-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handleJobRemove(job.id)}>
                    <XIcon className={'removeicon'} fill="red" />
                  </button>
                }
              </div>
            </div>
            <div className="item-label">
              <label htmlFor={job.role}>
                Role
              </label>
              <input type="text"
                placeholder={job.role}
                onChange={(e) => handleJobChange(job.id, 'role', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={job.yearStart}>
                Year start
              </label>
              <input type="text"
                placeholder={job.yearStart}
                onChange={(e) => handleJobChange(job.id, 'yearStart', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={job.yearFinish}>
                Year Finish
              </label>
              <input type="text"
                placeholder={job.yearFinish}
                onChange={(e) => handleJobChange(job.id, 'yearFinish', e.target.value)} />
            </div>
            <div className="item-label">
              <label htmlFor={job.description}>
                Job Description
              </label>
              <textarea
                rows={5}
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

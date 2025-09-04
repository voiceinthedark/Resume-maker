// @ts-check
import SectionMenuButton from "./utils/SectionMenuButton"
import { useState } from "react"
import CollectionIcon from './icons/CollectionIcon'
import XIcon from "./icons/XIcon"
import PlusIcon from "./icons/PlusIcon"
import "../styles/skillsedit.css"

function SkillsEdit({ data, setData, darkMode }) {
  const [showForm, setShowForm] = useState(false)

  /**
   * Handle skill change in the editor
   * @param {string} id 
   * @param {string} skill 
   * */
  function handleSkillChange(id, skill) {
    setData(prevData =>
    ({
      ...prevData,
      skills: prevData.skills.map(prevSkill =>
        prevSkill.id === id
          ? { ...prevSkill, skill: skill }
          : prevSkill)
    }))
  }

  /**
   * @param {React.MouseEvent<HTMLButtonElement>} e  
   * */
  function handleSkillAdd(e) {
    e.preventDefault()
    const newId = `skill-${Date.now()}`
    setData(prevData => ({
      ...prevData,
      skills: [...prevData.skills,
      { id: newId, skill: '' }]
    }))

  }

  /**
   * handle the remove skill button
   * @param {string} id 
   * */
  function handlesSkillRemove(id) {
    setData(prevData =>
    ({
      ...prevData,
      skills: prevData.skills.filter(skill =>
        skill.id !== id)
    }))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'skills-btn'}
        name={'Skills'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={CollectionIcon}
        iconProps={darkMode ? {fill: 'white'} : {fill: 'black'}}
      />
      <form action="" id="skills-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {data.skills.length > 0 && data.skills.map((skill, index) => (
          <div key={skill.id} className="skills-item">
            <div className="item-label">
              <label htmlFor={skill.id}>
                Skill
              </label>
              <div className="skills-subitem">
                <input
                  type="text"
                  id={skill.id}
                  value={skill.skill}
                  placeholder="Enter skill"
                  onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                  className="skill-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handlesSkillRemove(skill.id)}>
                    <XIcon className={'removeicon'} fill={darkMode ? 'white': 'black'} />
                  </button>
                }
              </div>
            </div>
            <hr />
          </div>
        ))}
        <button className="btn-add" onClick={handleSkillAdd}>
          Add new Skill
          <PlusIcon width="48px" height="48px" />
        </button>
      </form>
    </>
  )


}

export default SkillsEdit

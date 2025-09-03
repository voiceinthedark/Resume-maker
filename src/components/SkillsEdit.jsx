// @ts-check


import SectionMenuButton from "./utils/SectionMenuButton"
import { useState } from "react"
import CollectionIcon from './icons/CollectionIcon'
import XIcon from "./icons/XIcon"
import PlusIcon from "./icons/PlusIcon"

function SkillsEdit() {
  const [showForm, setShowForm] = useState(false)
  const [skills, setSkills] = useState([{
    id: 'skill-1', skill: '',
  }])

  /**
   * Handle skill change in the editor
   * @param {string} id 
   * @param {string} skill 
   * */
  function handleSkillChange(id, skill) {
    setSkills(prevSkills =>
      prevSkills.map(prevSkill =>
        prevSkill.id === id 
          ? { ...prevSkill, skill: skill } 
          : prevSkill))
  }

  /**
   * @param {React.MouseEvent<HTMLButtonElement>} e  
   * */
  function handleSkillAdd(e) {
    e.preventDefault()
    const newId = `skill-${Date.now()}`
    setSkills(prevSkills => [...prevSkills,
    { id: newId, skill: '' }])

  }

  /**
   * handle the remove skill button
   * @param {string} id 
   * */
  function handlesSkillRemove(id) {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'skills-btn'}
        name={'Skills'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={CollectionIcon}
        iconProps={{ fill: 'black' }}
      />
      <form action="" id="skills-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {skills.length > 0 && skills.map((skill, index) => (
          <div key={skill.id} className="skills-item">
            <div className="item-label">
              <label htmlFor={skill.skill}>
                Skill
              </label>
              <div className="skills-subitem">
                <input
                  type="text"
                  placeholder={skill.id}
                  onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                  className="skill-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handlesSkillRemove(skill.id)}>
                    <XIcon className={'removeicon'} fill="black" />
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

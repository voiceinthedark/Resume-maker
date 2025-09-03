// @ts-check

import { useState } from "react"
import SectionMenuButton from "./utils/SectionMenuButton"
import ChatIcon from "./icons/ChatIcon"
import XIcon from "./icons/XIcon"
import PlusIcon from "./icons/PlusIcon"
import "../styles/languagesedit.css"

function LanguageEdit() {
  const [showForm, setShowForm] = useState(false)
  const [languages, setLanguages] = useState([{
    id: 'lang-1', lang: '',
  }])

  /**
  * @param {React.MouseEvent<HTMLButtonElement>} e 
  */
  function handleLanguageAdd(e) {
    e.preventDefault()
    const newId = `lang-${Date.now()}`
    setLanguages(prevLanguages => [...prevLanguages, { id: newId, lang: '' }])
  }

  /**
   * handle input change
   * @param {string} id 
   * @param {string} value 
   * */
  function handleLanguageChange(id, value) {
    setLanguages(prevLanguages =>
      prevLanguages.map(lang =>
        lang.id === id
          ? { ...lang, lang: value }
          : lang))

  }

  /**
   * remove the language item by id
   * @param {string} id 
   * */
  function handleLanguageRemove(id) {
    setLanguages(prevLanguages =>
      prevLanguages.filter(lang =>
        lang.id !== id))

  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'language-btn'}
        name={'Languages'}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={ChatIcon}
        iconProps={{ fill: 'black' }}
      />
      <form action="" id="languages-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {languages.length > 0 && languages.map((lang, index) => (
          <div key={lang.id} className="lang-item">
            <div className="item-label">
              <label htmlFor={lang.lang}>
                Language
              </label>
              <div className="lang-subitem">
                <input
                  type="text"
                  placeholder={lang.lang}
                  onChange={(e) => handleLanguageChange(lang.id, e.target.value)}
                  className="lang-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handleLanguageRemove(lang.id)}>
                    <XIcon className={'removeicon'} fill="black" />
                  </button>
                }
              </div>
            </div>
            <hr />
          </div>
        ))}
        <button className="btn-add" onClick={handleLanguageAdd}>
          Add new Language
          <PlusIcon width="48px" height="48px" />
        </button>
      </form>
    </>
  )

}

export default LanguageEdit

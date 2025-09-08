// @ts-check

import { useState } from "react"
import SectionMenuButton from "./utils/SectionMenuButton"
import ChatIcon from "./icons/ChatIcon"
import XIcon from "./icons/XIcon"
import PlusIcon from "./icons/PlusIcon"
import "../styles/languagesedit.css"
import { useTranslation } from "react-i18next"

function LanguageEdit({ data, setData, darkMode }) {
  const [showForm, setShowForm] = useState(false)
  const { t } = useTranslation('common')

  /**
  * @param {React.MouseEvent<HTMLButtonElement>} e 
  */
  function handleLanguageAdd(e) {
    e.preventDefault()
    const newId = `lang-${Date.now()}`
    setData(prevData => ({
      ...prevData, languages: [...prevData.languages, { id: newId, language: '' }]
    }))
  }

  /**
   * handle input change
   * @param {string} id 
   * @param {string} value 
   * */
  function handleLanguageChange(id, value) {
    setData(prevData => ({
      ...prevData, languages: prevData.languages.map(
        lang => lang.id === id ? { ...lang, language: value } : lang
      )
    }))

  }

  /**
   * remove the language item by id
   * @param {string} id 
   * */
  function handleLanguageRemove(id) {
    setData(prevData => ({
      ...prevData, languages: prevData.languages.filter(lang => lang.id !== id)
    }))
  }

  return (
    <>
      <SectionMenuButton className={'btn-edit'}
        id={'language-btn'}
        name={t('languages')}
        showForm={showForm}
        setShowForm={setShowForm}
        Icon={ChatIcon}
        iconProps={darkMode ? { fill: 'white' } : { fill: 'black' }}

      />
      <form action="" id="languages-form" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {data.languages.length > 0 && data.languages.map((lang, index) => (
          <div key={lang.id} className="lang-item">
            <div className="item-label">
              <label htmlFor={lang.language}>
                {t('language')}
              </label>
              <div className="lang-subitem">
                <input
                  id={lang.id}
                  value={lang.language}
                  type="text"
                  placeholder={t('enter_language')}
                  onChange={(e) => handleLanguageChange(lang.id, e.target.value)}
                  className="lang-label-input"
                />
                {index > 0 &&
                  <button className="remove-btn" onClick={() => handleLanguageRemove(lang.id)}>
                    <XIcon className={'removeicon'} fill={darkMode ? 'white' : 'black'} />
                  </button>
                }
              </div>
            </div>
            <hr />
          </div>
        ))}
        <button className="btn-add" onClick={handleLanguageAdd}>
          {t('add_language')}
          <PlusIcon width="48px" height="48px" />
        </button>
      </form>
    </>
  )

}

export default LanguageEdit

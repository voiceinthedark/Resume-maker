// @ts-check
import SectionMenuButton from "./utils/SectionMenuButton"
import { useState } from "react"
import "../styles/linksedit.css"
import PlusIcon from "./icons/PlusIcon"
import InfoIcon from "./icons/InfoIcon"
import XIcon from "./icons/XIcon"
import GlobeIcon from "./icons/GlobeIcon"

function LinksEdit({ data, setData, darkMode }) {
  const [showForm, setShowForm] = useState(false)

  const initialLengthOfLinks = 4

  function handleLinkChange(id, field, newValue) {
    setData(prevData => ({
      ...prevData,
      links: prevData.links.map(link =>
        link.id === id ? { ...link, [field]: newValue } : link
      )
    }));
  }

  function handleAddNewLink(e) {
    e.preventDefault();
    const newId = `link-${Date.now()}`; // Generate a unique ID
    setData(prevData => ({
      ...prevData,
      links: [
        ...prevData.links,
        { id: newId, label: 'New Link', value: '' },
      ]
    }));
  }

  function handleRemoveLink(id) {
    setData(prevData => ({
      ...prevData,
      links: prevData.links.filter(link => link.id !== id)
    }));
  }

  return (
    <>
      <SectionMenuButton 
        Icon={GlobeIcon} 
        id={'links-btn'} 
        name={'Links'} 
        className={'btn-edit'} 
        showForm={showForm} 
        setShowForm={setShowForm} 
        iconProps={darkMode ? {fill: 'white'} : {fill: 'black'}}
      />
      <form action="" id="link-edit" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {data.links.map((link, index) => (
          <div key={link.id} className="link-item">
            <div className="item-label">
              <label htmlFor={link.id}>
                <input
                  type="text"
                  value={link.label}
                  placeholder={link.label}
                  onChange={(e) => handleLinkChange(link.id, 'label', e.target.value)}
                  className="link-label-input"
                />
              </label>
              <InfoIcon className={'infoicon'} fill="gray" />
            </div>
            <div className="item-input">
              <input
                type="text"
                id={link.id}
                name={link.id}
                value={link.value}
                onChange={(e) => handleLinkChange(link.id, 'value', e.target.value)}
              />

              {index >= initialLengthOfLinks &&
                <button className="remove-btn" onClick={() => handleRemoveLink(link.id)}>
                  <XIcon className={'removeicon'} fill={darkMode ? 'white': 'black'} />
                </button>
              }

            </div>
          </div>
        ))}
        <button className="btn-add-link" onClick={handleAddNewLink}>
          Add new link
          <PlusIcon width="48px" height="48px" />
        </button>
      </form>
    </>
  )
}

export default LinksEdit

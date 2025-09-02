import SectionMenuButton from "./utils/SectionMenuButton"
import { useState } from "react"
import "../styles/linksedit.css"
import PlusIcon from "./icons/PlusIcon"
import InfoIcon from "./icons/InfoIcon"
import XIcon from "./icons/XIcon"
import GlobeIcon from "./icons/GlobeIcon"

function LinksEdit() {
  const [showForm, setShowForm] = useState(false)
  const [links, setLinks] = useState([
    { id: 'phone', label: 'Phone', value: ''},
    { id: 'email', label: 'Mail', value: ''},
    { id: 'github', label: 'Github', value: '' },
    { id: 'homepage', label: 'HomePage', value: '' },
  ]);

  const initialLengthOfLinks = 4

  function handleLinkChange(id, field, newValue) {
    setLinks(prevLinks =>
      prevLinks.map(link =>
        link.id === id ? { ...link, [field]: newValue } : link
      )
    );
  }

  function handleAddNewLink(e) {
    e.preventDefault();
    const newId = `link-${Date.now()}`; // Generate a unique ID
    setLinks(prevLinks => [
      ...prevLinks,
      { id: newId, label: 'New Link', value: '' }, // Add a new link with a default label
    ]);
  }

  function handleRemoveLink(id) {
    setLinks(prevLinks => prevLinks.filter(link => link.id !== id))
  }

  return (
    <>
      <SectionMenuButton Icon={GlobeIcon} iconProps={{fill: 'black'}} id={'links-btn'} name={'Links'} className={'btn-edit'} showForm={showForm} setShowForm={setShowForm} />
      <form action="" id="link-edit" className={`formedit ${showForm ? 'is-open' : ''}`}>
        {links.map((link, index) => (
          <div key={link.id} className="link-item">
            <div className="item-label">
              <label htmlFor={link.id}>
                <input
                  type="text"
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
                  <XIcon className={'removeicon'} fill="red" />
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

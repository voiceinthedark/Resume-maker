import SectionMenuButton from "./utils/SectionMenuButton"
import { useState } from "react"
import "../styles/linksedit.css"
import PlusIcon from "../assets/PlusIcon"

function LinksEdit() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <SectionMenuButton id={'links-btn'} name={'Links'} className={'btn-edit'} showForm={showForm} setShowForm={setShowForm} />
      <form action="" id="link-edit" className={`formedit ${showForm ? 'is-open' : ''}`}>
        <label htmlFor="github">Github</label>
        <input type="text" id="github" name="github" />
        <label htmlFor="homepage">HomePage</label>
        <input type="text" name="homepage" id="homepage" />
        <button className="btn-add-link">
          Add new link
          <PlusIcon width="48px" height="48px"  />
        </button>
      </form>
    </>
  )

}

export default LinksEdit

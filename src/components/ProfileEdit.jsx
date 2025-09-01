import { useState } from 'react'
import '../styles/profileedit.css'
import SectionMenuButton from './utils/SectionMenuButton'

function ProfileEdit() {
  const [showForm, setShowForm] = useState(false)
  const [fullname, setFullname] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [bio, setBio] = useState('')


  return (
    <>
      <SectionMenuButton className={'btn-edit'} id={'profile-btn'} name={'Profile'} showForm={showForm} setShowForm={setShowForm} />
      <form action="" className={`formedit ${showForm ? 'is-open' : ''}`}>
        <label htmlFor="fullname" >Full Name
        </label >
        <input type="text" name="fullname" id="fullname" onChange={(e) => { setFullname(e.target.value)}} />

        <label htmlFor="speciality" >Speciality
        </label >
        <input type="text" name="speciality" id="speciality" onChange={(e) =>  setSpeciality(e.target.value)}/>

        <label htmlFor="bio" >Bio
        </label >
        <textarea name="bio" id="bio" cols={42} rows={12} onChange={(e) => setBio(e.target.value)}></textarea>
      </form>

    </>
  )

}

export default ProfileEdit

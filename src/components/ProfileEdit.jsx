import { useState } from 'react'
import '../styles/profileedit.css'
import SectionMenuButton from './utils/SectionMenuButton'
import UserIcon from "./icons/UserIcon"

function ProfileEdit({ data, setData }) {
  const [showForm, setShowForm] = useState(false)

  function handleProfileChange(field, value) {
    setData(prevData => ({
      ...prevData,
      profile: {
        ...prevData.profile,
        [field]: value,
      },
    }));
  }


  return (
    <>
      <SectionMenuButton Icon={UserIcon} iconProps={{ fill: 'black' }} className={'btn-edit'} id={'profile-btn'} name={'Profile'} showForm={showForm} setShowForm={setShowForm} />
      <form action="" className={`formedit ${showForm ? 'is-open' : ''}`}>
        <label htmlFor="fullname" >Full Name
        </label >
        <input type="text" name="fullname" id="fullname" onChange={(e) => { handleProfileChange('fullname', e.target.value) }} />

        <label htmlFor="speciality" >Speciality
        </label >
        <input type="text" name="speciality" id="speciality" onChange={(e) => handleProfileChange('speciality', e.target.value)} />

        <label htmlFor="bio" >Bio
        </label >
        <textarea name="bio" id="bio" cols={42} rows={12} onChange={(e) => handleProfileChange('bio', e.target.value)}></textarea>
      </form>

    </>
  )

}

export default ProfileEdit

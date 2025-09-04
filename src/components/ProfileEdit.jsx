// @ts-check
import { useState } from 'react'
import '../styles/profileedit.css'
import SectionMenuButton from './utils/SectionMenuButton'
import UserIcon from "./icons/UserIcon"

function ProfileEdit({ data, setData, darkMode }) {
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
      <SectionMenuButton 
        Icon={UserIcon} 
        className={'btn-edit'} 
        id={'profile-btn'} 
        name={'Profile'} 
        showForm={showForm} 
        setShowForm={setShowForm} 
        iconProps={darkMode ? {fill: 'white'} : {fill: 'black'}}
      />
      <form action="" className={`formedit ${showForm ? 'is-open' : ''}`}>
        <label htmlFor="fullname" >Full Name
        </label >
        <input 
          type="text" 
          name="fullname" 
          id="fullname" 
          value={data.profile.fullname}
          onChange={(e) => { handleProfileChange('fullname', e.target.value) }} />

        <label htmlFor="speciality" >Speciality
        </label >
        <input 
          type="text" 
          name="speciality" 
          id="speciality" 
          value={data.profile.speciality}
          onChange={(e) => handleProfileChange('speciality', e.target.value)} />

        <label htmlFor="bio" >Bio
        </label >
        <textarea 
          name="bio" 
          id="bio" 
          cols={42} 
          rows={12} 
          value={data.profile.bio}
          onChange={(e) => handleProfileChange('bio', e.target.value)}></textarea>
      </form>

    </>
  )

}

export default ProfileEdit

// @ts-check
import { useState } from 'react'
import '../styles/profileedit.css'
import SectionMenuButton from './utils/SectionMenuButton'
import UserIcon from "./icons/UserIcon"
import XIcon from './icons/XIcon'
import { useTranslation } from 'react-i18next'

function ProfileEdit({ data, setData, darkMode }) {
  const [showForm, setShowForm] = useState(false)
  const { t } = useTranslation('common')

  function handleProfileChange(field, value) {
    setData(prevData => ({
      ...prevData,
      profile: {
        ...prevData.profile,
        [field]: value,
      },
    }));
  }

  function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prevData => ({
          ...prevData,
          profile: {
            ...prevData.profile,
            photo: reader.result, // Store the Data URL (base64 string)
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleRemovePhoto() {
    setData(prevData => ({
      ...prevData,
      profile: {
        ...prevData.profile,
        photo: null, // Clear the photo
      },
    }));
  }


  return (
    <>
      <SectionMenuButton
        Icon={UserIcon}
        className={'btn-edit'}
        id={'profile-btn'}
        name={t('profile')}
        showForm={showForm}
        setShowForm={setShowForm}
        iconProps={darkMode ? { fill: 'white' } : { fill: 'black' }}
      />
      <form id='profile-edit' action="" className={`formedit ${showForm ? 'is-open' : ''}`}>
        <label htmlFor="fullname" >Full Name
        </label >
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={data.profile.fullname || ''}
          onChange={(e) => { handleProfileChange('fullname', e.target.value) }} />

        <label htmlFor="speciality" >Speciality
        </label >
        <input
          type="text"
          name="speciality"
          id="speciality"
          value={data.profile.speciality || ''}
          onChange={(e) => handleProfileChange('speciality', e.target.value)} />

        <label htmlFor="photo" className='custom-file-upload'>
          {t('photo')}
        </label>
        <input
          className='hidden-file-input'
          type="file"
          name="photo"
          id="photo"
          accept='image/*'
          onChange={handlePhotoUpload}
        />
        {data.profile.photo ? (
          <div className="profile-photo-preview-container">
            <img
              src={data.profile.photo}
              alt="Profile"
              className="profile-photo-preview"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <button
              type="button"
              onClick={handleRemovePhoto}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
              }}>
              <XIcon fill={darkMode ? 'white' : 'black'} />
            </button>
          </div>
        ) : (
          <div
            className="profile-photo-placeholder"
            style={{ marginTop: '10px' }}>
            <UserIcon fill={darkMode ? 'white' : 'black'} size="80" />
          </div>
        )}


        <label htmlFor="bio" >
          {t('bio')}
        </label >
        <textarea
          name="bio"
          id="bio"
          cols={42}
          rows={12}
          value={data.profile.bio || ''}
          onChange={(e) => handleProfileChange('bio', e.target.value)}></textarea>
      </form>

    </>
  )

}

export default ProfileEdit

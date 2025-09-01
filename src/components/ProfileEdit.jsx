import '../styles/profileedit.css'
function ProfileEdit() {
  // TODO add profile component: full name, specialization, photo, Bio
  return (
    <>
      <details name='profile' id='profile'>
        <summary>Profile</summary>
        <form action="" className="profile-form">
          <label htmlFor="fullname" >Full Name
          </label >
          <input type="text" name="fullname" id="fullname" />

          <label htmlFor="speciality" >Speciality
          </label >
          <input type="text" name="speciality" id="speciality" />

          <label htmlFor="bio" >Bio
          </label >
          <textarea name="bio" id="bio" cols={42} rows={12}></textarea>
        </form>
      </details>
    </>
  )

}

export default ProfileEdit

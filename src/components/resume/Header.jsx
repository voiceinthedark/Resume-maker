// @ts-check

import "../../styles/resumeheader.css"
export default function Header({ data }) {

  return (
    <header className="resume-header">
      <div className="header-left">
        <h1>{data.profile.fullname}</h1>
        <h3>{data.profile.speciality}</h3>
      </div>
      <div className="header-right">
        <img className="header-photo" src={data.profile.photo} alt="profile photo" />
      </div>
    </header>
  )
}

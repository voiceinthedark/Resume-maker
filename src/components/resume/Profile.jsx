import "../../styles/resumeprofile.css"
export default function Profile({ data }) {

  return (
    <section className="preview-profile">
      <h2>{t('profile')}</h2>
      <p className="preview-bio">{data.profile.bio}</p>
    </section>
  )

}

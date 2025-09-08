import "../../styles/resumeprofile.css"
import { useTranslation } from "react-i18next"

export default function Profile({ data }) {
  const {t} = useTranslation('common')

  return (
    <section className="preview-profile">
      <h2>{t('profile')}</h2>
      <p className="preview-bio">{data.profile.bio}</p>
    </section>
  )

}

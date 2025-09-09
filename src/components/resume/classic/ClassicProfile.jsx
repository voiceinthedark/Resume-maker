import "../../../styles/classicprofile.css"
import { useTranslation } from "react-i18next"

export default function ClassicProfile({ data }) {
  const {t} = useTranslation('common')
  return (
    <section className="classic-profile">
      <h2>{t('profile')}</h2>
      <hr />
      <p>{data.profile.bio}</p>
    </section>
  )
}

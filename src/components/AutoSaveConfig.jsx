import { useTranslation } from "react-i18next"
import ToggleSwitch from "./utils/ToggleSwitch"
import "../styles/autosaveconfig.css"

export default function AutosaveConfig({save, setSave}) {
  const {t} = useTranslation('common')

  return (
    <div className="config-autosave" id="config-autosave">
      <label htmlFor="save-switch">
        {t('config_autosave')}
      </label>
      <ToggleSwitch setSave={setSave} save={save} />
    </div>
  )
}

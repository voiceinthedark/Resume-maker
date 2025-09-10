// @ts-check
import { useTranslation } from "react-i18next"

export default function ConfigColors({ style, changeStyle }) {
  const {t} = useTranslation('common')
  return (
    <>
      <label htmlFor="config-color">
        {t('config_color')}
      </label>
      <div id="config-color" className="config-color">
        <div className="accent">
          <label htmlFor="accent-color">
            {t("accent_color")}
          </label>
          <input type="color"
            name="accent-color"
            id="accent-color"
            value={style.colors.accent}
            onChange={(e) => changeStyle('colors', 'accent', e.target.value)}
          />
        </div>
        <div className="font">
          <label htmlFor="font-color">
            {t('font_color')}
          </label>
          <input type="color"
            name="font-color"
            id="font-color"
            value={style.colors.font}
            onChange={(e) => changeStyle('colors', 'font', e.target.value)}
          />
        </div>
      </div>
      <hr className="rule" />
    </>
  )
}

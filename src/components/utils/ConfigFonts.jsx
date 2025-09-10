// @ts-check

import { useTranslation } from "react-i18next"

export default function ConfigFonts({ style, changeStyle }) {
  const {t} = useTranslation('common')

  return (
    <>
      <label htmlFor="config-font">
        {t('config_font')}
      </label>
      <div id="config-font" className="config-font">
        <button
          onClick={(e) => changeStyle('font', 'style', 'sans-serif')}
          style={{
            'fontFamily': 'sans-serif',
            'backgroundColor': style.font.style === 'sans-serif' ? 'rgba(10, 10, 10, 0.3)' : ''
          }}
        >
          Sans Serif
        </button>
        <button
          onClick={(e) => changeStyle('font', 'style', 'serif')}
          style={{
            'fontFamily': 'serif',
            'backgroundColor': style.font.style === 'serif' ? 'rgba(10, 10, 10, 0.3)' : ''
          }}>
          Serif
        </button>
      </div>
      <hr className="rule" />
    </>
  )
}

import { useState, useEffect } from "react"
import defaultStyle from "./utils/defaultStyle"
import '../styles/configedit.css'
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./utils/LanguageSwitcher"
import AutosaveConfig from "./AutoSaveConfig"
import SwitchTemplate from "./utils/SwitchTemplates"

export default function ConfigEdit({ save, setSave, template, setTemplate }) {
  const [style, setStyle] = useState(defaultStyle)

  const { t } = useTranslation('common')

  function changeStyle(group, label, value) {
    setStyle(prevStyle => ({
      ...prevStyle,
      [group]: {
        ...prevStyle[group],
        [label]: value
      }
    }))
  }

  useEffect(() => {
    document.getElementById('root').style.setProperty('--bg-header-color', style.colors.accent)

  }, [style.colors.accent])

  useEffect(() => {
    document.getElementById('root').style.setProperty('--font-color', style.colors.font)

  }, [style.colors.font])

  useEffect(() => {
    const preview = template === 'modern' 
      ? document.getElementById('resume-preview') 
      : document.getElementById('classic-resume')
    style.font.style === 'serif'
      ? preview.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-serif')
      : preview.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-sans')
  }, [style.font.style])

  useEffect(() => {
    const preview = document.getElementById('resume-preview')
    preview.style.setProperty('--scale', style.scale.paperScale)
  }, [style.scale.paperScale])

  useEffect(() => {
    const preview = document.getElementById('resume-preview')
    preview.style.setProperty('--photo-size', style.scale.imageSize)
  }, [style.scale.imageSize])


  return (
    <section className="config-edit">
      <label htmlFor="lang-switch">
        {t('config_lang')}
      </label>
      <div id="lang-switch" className="config-lang">
        <LanguageSwitcher />
      </div>
      <hr className="rule" />
      <SwitchTemplate template={template} setTemplate={setTemplate} />
      <hr className="rule" />
      {template === 'modern' &&
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
      }
      <label htmlFor="config-font">
        {t('config_font')}
      </label>
      <div id="config-font" className="config-font">
        <button
          onClick={(e) => changeStyle('font', 'style', 'sans-serif')}
          style={{ 'font-family': 'sans-serif' }}>
          Sans Serif
        </button>
        <button
          onClick={(e) => changeStyle('font', 'style', 'serif')}
          style={{ 'font-family': 'serif' }}>
          Serif
        </button>
      </div>
      <hr className="rule" />
      {template === 'modern' &&
        <>
          <label htmlFor="config-scale">
            {t('config_scale')}
          </label>
          <div id="config-scale" className="config-scale">
            <div className="scale">
              <label htmlFor="page-scale">
                {t('page_scale')}
              </label>
              <input type="range"
                name="page-scale"
                id="page-scale"
                value={style.scale.paperScale}
                min={0.5}
                max={1.00}
                step={0.05}
                onChange={(e) => changeStyle('scale', 'paperScale', e.target.value)}
              />
            </div>
            <div className="scale">
              <label htmlFor="image-scale">
                {t('photo_scale')}
              </label>
              <input type="range"
                name="image-scale"
                id="image-scale"
                min={140}
                max={210}
                step={5}
                value={style.scale.imageSize}
                onChange={(e) => changeStyle('scale', 'imageSize', e.target.value)}
              />
            </div>
          </div>
          <hr className="rule" />
        </>
      }
      <AutosaveConfig save={save} setSave={setSave} />
    </section>
  )
}

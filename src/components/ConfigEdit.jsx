import { useState, useEffect } from "react"
import defaultStyle from "./utils/defaultStyle"
import '../styles/configedit.css'

export default function ConfigEdit() {
  const [style, setStyle] = useState(defaultStyle)

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

  return (
    <section className="config-edit">
      <div className="config-color">
        <div className="accent">
          <label htmlFor="accent-color">
            Accent Color
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
            Font Color
          </label>
          <input type="color"
            name="font-color"
            id="font-color"
            value={style.colors.font}
            onChange={(e) => changeStyle('colors', 'font', e.target.value)}
          />
        </div>
      </div>
    </section>
  )
}

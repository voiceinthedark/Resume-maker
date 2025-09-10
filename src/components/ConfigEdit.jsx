import '../styles/configedit.css'
import LanguageSwitcher from "./utils/LanguageSwitcher"
import AutosaveConfig from "./AutoSaveConfig"
import SwitchTemplate from "./utils/SwitchTemplates"
import ConfigColors from './utils/ConfigColors'
import ConfigFonts from './utils/ConfigFonts'
import ConfigScale from './utils/ConfigScale'

export default function ConfigEdit({ style, setStyle, save, setSave, template, setTemplate }) {



  function changeStyle(group, label, value) {
    setStyle(prevStyle => ({
      ...prevStyle,
      [group]: {
        ...prevStyle[group],
        [label]: value
      }
    }))
  }

  return (
    <section className="config-edit">
      <LanguageSwitcher />
      <hr className="rule" />
      <SwitchTemplate template={template} setTemplate={setTemplate} />
      <hr className="rule" />
      {template === 'modern' &&
        <ConfigColors style={style} changeStyle={changeStyle} />
      }
      <ConfigFonts style={style} changeStyle={changeStyle} />
      {template === 'modern' &&
        <ConfigScale style={style} changeStyle={changeStyle} />
      }
      <AutosaveConfig save={save} setSave={setSave} />
    </section>
  )
}

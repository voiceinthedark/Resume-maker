import { useState } from "react"
import "../../styles/toggleswitch.css"
export default function ToggleSwitch({ save, setSave }) {

  return (
    <label className="switch">
      <input
        type="checkbox"
        id="switch"
        name="switch"
        checked={save}
        onChange={() => setSave(!save)}
      />
      <span className="slider"></span>
    </label>
  )
}

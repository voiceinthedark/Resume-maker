import HeaderOptions from "./HeaderOptions";
import '../../styles/pageheader.css'
import HeaderDownload from "./HeaderDownload";

export default function PageHeader({ setActive, darkMode }) {
  return (
    <header className="page-header">
      <HeaderOptions setActive={setActive} darkMode={darkMode} />
      <HeaderDownload darkMode={darkMode}/>
    </header>
  )
}

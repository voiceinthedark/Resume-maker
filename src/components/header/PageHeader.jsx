import HeaderOptions from "./HeaderOptions";
import '../../styles/pageheader.css'
import HeaderDownload from "./HeaderDownload";

export default function PageHeader({ setActive }) {
  return (
    <header className="page-header">
      <HeaderOptions setActive={setActive} />
      <HeaderDownload />
    </header>
  )
}

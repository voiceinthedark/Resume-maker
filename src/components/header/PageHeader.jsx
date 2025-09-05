import HeaderOptions from "./HeaderOptions";
import '../../styles/pageheader.css'
import HeaderDownload from "./HeaderDownload";

export default function PageHeader() {
  return (
    <header className="page-header">
      <HeaderOptions />
      <HeaderDownload />
    </header>
  )
}

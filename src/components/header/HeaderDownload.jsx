import DownloadIcon from '../icons/DownloadIcon'
import "../../styles/downloadheader.css"
export default function HeaderDownload() {
  return (
    <div className="header-download">
      <button className='download-btn'>
        <DownloadIcon fill='black'/>
      </button>
    </div>
  )
}

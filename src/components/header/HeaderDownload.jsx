import DownloadIcon from '../icons/DownloadIcon'
import "../../styles/downloadheader.css"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function HeaderDownload() {

  async function downloadPdf() {
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const resume = document.querySelector('.resume-preview')

      const canvas = await html2canvas(resume, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL('image/png')
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

      doc.save('cv.pdf')
    } catch (error) {
      console.error('Failed to download the pdf', error);
    }

  }

  return (
    <div className="header-download">
      <button
        className='download-btn'
        onClick={downloadPdf}
      >
        <DownloadIcon width={48} height={48} fill='black' />
      </button>
    </div>
  )
}

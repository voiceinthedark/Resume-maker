import DownloadIcon from '../icons/DownloadIcon'
import "../../styles/downloadheader.css"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { useTranslation } from "react-i18next"

export default function HeaderDownload({ darkMode }) {
  const { t } = useTranslation('common')

  async function downloadPdfScreen() {
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const resume = document.querySelector('.resume-preview')

      if (!resume) {
        console.error('Resume preview element not found.');
        return;
      }


      const canvas = await html2canvas(resume, {
        scale: 2, // High resolution for the PDF capture
        useCORS: true,
        logging: false,
      });



      const imgData = canvas.toDataURL('image/png')
      let pdfWidth = 210 // A4 width in mm
      let pdfHeight = (canvas.height * pdfWidth) / canvas.width // Calculated height maintaining captured aspect ratio


      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

      doc.save('cv.pdf')
    } catch (error) {
      console.error('Failed to download the pdf', error);
    }
  }

  async function downloadPdf() {
    try {
      const doc = new jsPDF('p', 'mm', 'a4')
      const resume = document.querySelector('.resume-preview')

      if (!resume) {
        console.error('Resume preview element not found.');
        return;
      }

      // Store original styles to revert later
      const originalStyle = resume.style.cssText;
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow; // Capture html overflow as well

      // Apply temporary styles to ensure correct A4 width and content-driven height for capture
      // This will render the resume at full A4 width, allowing its content to determine total height
      // and overriding any responsive or fixed height constraints.
      resume.style.cssText += `
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        width: 210mm !important; /* Force A4 width for capture */
        height: auto !important; /* Allow content to dictate height, overriding fixed heights */
        min-height: 297mm !important; /* Ensure it's at least A4 height if content is short */
        max-width: none !important; /* Override responsive max-width (e.g., 100%) */
        font-size: initial !important; /* Reset font size to prevent responsive scaling issues */
        transform: none !important; /* Remove any scaling transforms */
        box-shadow: none !important; /* Remove shadows */
        border: none !important; /* Remove borders */
        background-color: #ffffff !important; /* Ensure white background for PDF */
        margin: 0 !important; /* Reset margins */
        padding: 0 !important; /* Reset padding */
        // If grid layout causes clipping even with height: auto, you might need to
        // temporarily override grid properties like 'grid-template-rows: none !important;'
        // but 'height: auto' should generally suffice if content can expand.
      `;
      document.body.style.overflow = 'hidden'; // Prevent scrollbars during capture
      document.documentElement.style.overflow = 'hidden'; // Also hide html overflow

      const canvas = await html2canvas(resume, {
        scale: 2, // High resolution for the PDF capture
        useCORS: true,
        logging: false,
      });

      // Revert styles immediately after capture
      resume.style.cssText = originalStyle;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      const imgData = canvas.toDataURL('image/png')
      let pdfWidth = 210 // A4 width in mm
      let pdfHeight = (canvas.height * pdfWidth) / canvas.width // Calculated height maintaining captured aspect ratio

      // Check if the calculated height exceeds A4 height, and scale down if necessary
      const a4Height = 297; // A4 height in mm
      if (pdfHeight > a4Height) {
        const scaleFactor = a4Height / pdfHeight;
        pdfWidth = pdfWidth * scaleFactor;
        pdfHeight = a4Height; // Set to A4 height, the image will be scaled down
      }

      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

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
        <DownloadIcon width={48} height={48} fill={darkMode ? 'white' : 'black'} />
        <span>{t("download_cv_mobile")}</span>
      </button>
      <button className='download-btn'
        onClick={downloadPdfScreen}
      >
        <DownloadIcon width={48} height={48} fill={darkMode ? 'white' : 'black'} />
        <span>{t("download_cv")}</span>
      </button>
    </div>
  )
}

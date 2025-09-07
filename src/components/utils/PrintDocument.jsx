import PrinterIcon from '../icons/PrinterIcon'
import "../../styles/printdocument.css"
export default function PrintDocument({ darkMode }) {
  function printDocument(){
    window.print()
  }
  return (
    <button 
      onClick={printDocument}
      className='print-btn'>
      <PrinterIcon  width={64} height={64} fill={darkMode ? 'white' : 'black'} />
    </button>
  )
}

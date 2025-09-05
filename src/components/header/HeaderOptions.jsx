import CogIcon from '../icons/CogIcon'
import EditIcon from '../icons/EditIcon'
import "../../styles/headeroptions.css"

export default function HeaderOptions() {

  return (
    <div className='header-options'>
      <button className='btn-options'>
        <EditIcon fill='black' />
        <span>Edit</span>
      </button>
      <button className='btn-options'>
        <CogIcon fill='black' />
        <span>Config</span>
      </button>
    </div>
  )
}

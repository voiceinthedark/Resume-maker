import CogIcon from '../icons/CogIcon'
import EditIcon from '../icons/EditIcon'
import "../../styles/headeroptions.css"

export default function HeaderOptions({ setActive }) {

  return (
    <div className='header-options'>
      <button
        className='btn-options'
        onClick={() => setActive('edit')}
      >
        <EditIcon fill='black' />
        <span>Edit</span>
      </button>
      <button
        className='btn-options'
        onClick={() => setActive('config')}
      >
        <CogIcon fill='black' />
        <span>Config</span>
      </button>
    </div>
  )
}

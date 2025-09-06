import CogIcon from '../icons/CogIcon'
import EditIcon from '../icons/EditIcon'
import "../../styles/headeroptions.css"

export default function HeaderOptions({ setActive, darkMode }) {

  return (
    <div className='header-options'>
      <button
        className='btn-options'
        onClick={() => setActive('edit')}
      >
        <EditIcon height={42} width={42} fill={darkMode ? 'white' : 'black'}/>
        <span>Edit</span>
      </button>
      <button
        className='btn-options'
        onClick={() => setActive('config')}
      >
        <CogIcon height={42} width={42} fill={darkMode ? 'white' : 'black'}  />
        <span>Config</span>
      </button>
    </div>
  )
}

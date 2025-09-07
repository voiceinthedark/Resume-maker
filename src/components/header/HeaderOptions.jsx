import CogIcon from '../icons/CogIcon'
import EditIcon from '../icons/EditIcon'
import "../../styles/headeroptions.css"
import { useTranslation } from "react-i18next"

export default function HeaderOptions({ setActive, darkMode }) {
  const { t } = useTranslation('common')

  return (
    <div className='header-options'>
      <button
        className='btn-options'
        onClick={() => setActive('edit')}
      >
        <EditIcon height={42} width={42} fill={darkMode ? 'white' : 'black'} />
        <span>{t('edit')}</span>
      </button>
      <button
        className='btn-options'
        onClick={() => setActive('config')}
      >
        <CogIcon height={42} width={42} fill={darkMode ? 'white' : 'black'} />
        <span>{t('config')}</span>
      </button>
    </div>
  )
}

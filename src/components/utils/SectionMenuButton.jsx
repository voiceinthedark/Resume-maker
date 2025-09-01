import ChevronRightIcon from '../../assets/ChevronRightIcon'

function SectionMenuButton({showForm, setShowForm}) {
  const toggleFormVisibility = () => {
    setShowForm(!showForm)
  }

  return (
    <button id='profile-btn' name='profile-btn' onClick={toggleFormVisibility}>
      <span>Profile</span>
      <ChevronRightIcon className={`chevron ${showForm ? 'is-open' : ''}`} width='48px' height='48px' />
    </button>
  )
}

export default SectionMenuButton

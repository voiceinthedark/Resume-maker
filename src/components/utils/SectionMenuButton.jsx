import ChevronRightIcon from '../../assets/ChevronRightIcon'

function SectionMenuButton({showForm, setShowForm, id, name, className}) {
  const toggleFormVisibility = () => {
    setShowForm(!showForm)
  }

  return (
    <button id={id} name={name} className={className} onClick={toggleFormVisibility}>
      <span>{name}</span>
      <ChevronRightIcon className={`chevron ${showForm ? 'is-open' : ''}`} width='48px' height='48px' />
    </button>
  )
}

export default SectionMenuButton

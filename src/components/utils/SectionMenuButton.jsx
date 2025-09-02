import ChevronRightIcon from '../icons/ChevronRightIcon'

function SectionMenuButton({showForm, setShowForm, id, name, className, Icon, iconProps={}}) {
  const toggleFormVisibility = () => {
    setShowForm(!showForm)
  }

  return (
    <button id={id} name={name} className={className} onClick={toggleFormVisibility}>
      <Icon {...iconProps}/>
      <span>{name}</span>
      <ChevronRightIcon className={`chevron ${showForm ? 'is-open' : ''}`} width='48px' height='48px' />
    </button>
  )
}

export default SectionMenuButton

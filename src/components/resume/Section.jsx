// @ts-check

import Contact from "./Contact";

/**
 * Main component to add the skills and languages sections to the resume preview
 * @param {Object} props 
 * @param {string} props.type 
 * @param {Object} props.data 
 * */
export default function Section({ type, data }) {

  /**
   * function to get the type of section
   * @param {string} type 
   * */
  function getType(type) {

    let t;
    switch (type) {
      case 'contact':
        console.log('found contact')
        t = <Contact data={data} />
        break
      case 'skills':
        break
      case 'languages':
        break
      default:
        break
    }
    return t;

  }

  let t = getType(type)

  return (
    t
  )
}

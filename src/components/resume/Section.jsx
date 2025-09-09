// @ts-check

import Contact from "./Contact";
import Languages from "./Languages";
import Skill from "./Skill";

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
        t = <Contact data={data} />
        break
      case 'skills':
        t = <Skill data={data} />
        break
      case 'languages':
        t = <Languages data={data} />
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

// @ts-check

import PhoneIcon from '../icons/PhoneIcon'
import MailIcon from '../icons/MailIcon'
import GithubIcon from '../icons/GithubIcon'
import GlobeIcon from '../icons/GlobeIcon'
import "../../styles/resumecontact.css"

const iconTable = new Map();
iconTable.set('phone', <PhoneIcon fill='black' />);
iconTable.set('email', <MailIcon fill='black' />);
iconTable.set('github', <GithubIcon fill='black' />);

export default function Contact({ data }) {

  return (
    <section className='contact-section'>
      <h2>Contact</h2>
      <ul className='contact-list'>
        {data.links.map((/**@type {Object}*/c) => {
          return (
            <li key={c.id}>
              <div className='links-preview-item'>
                <span>{iconTable.has(c.id)
                  ? iconTable.get(c.id)
                  : <GlobeIcon fill='black' />}
                </span>
                <span>{c.value}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

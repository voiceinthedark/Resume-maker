import { useState } from 'react'
import ResumePreview from './components/resume/ResumePreview'
import ResumeEdit from './components/ResumeEdit'
import './styles/App.css'

function App() {
  const [data, setData] = useState({
    profile: {
      fullname: '',
      speciality: '',
      bio: '',
    },
    links: [
      { id: 'phone', label: 'Phone', value: '' },
      { id: 'email', label: 'Mail', value: '' },
      { id: 'github', label: 'Github', value: '' },
      { id: 'homepage', label: 'HomePage', value: '' },
    ],
    education: [{
      id: '',
      university: '',
      speciality: '',
      yearStart: '',
      yearFinish: '',
    },],
    experience: [{
      id: '',
      job: '',
      role: '',
      description: '',
      yearStart: '',
      yearFinish: '',
    },],
    skills: [{
      id: '',
      skill: '',
    },],
    languages: [{
      id: '',
      language: '',
    },],
  });

  return (
    <>
      <ResumeEdit data={data} setData={setData} />
      <ResumePreview data={data} />
    </>
  )
}

export default App

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
    education: [{ // Initialize with default education as done in EducationEdit
      id: 'liu', 
      university: 'LIU', 
      speciality: 'Computer Science', 
      yearStart: '2006', 
      yearFinish: '2009',
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
      id: 'skill-1',
      skill: 'Gardening',
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

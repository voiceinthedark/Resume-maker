import { useState } from 'react'
import ResumePreview from './components/resume/ResumePreview'
import ResumeEdit from './components/ResumeEdit'
import './styles/App.css'

function App() {
  const [data, setData] = useState({
    profile: {
      fullname: 'Jim Constanza',
      speciality: 'Software Developer',
      bio: 'Pertinent developer',
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
      id: 'exp-1',
      job: 'Smartlb',
      role: 'Software Developer',
      description: 'A C# programmer working on microsoft',
      yearStart: '2009',
      yearFinish: '2011',
    },],
    skills: [{
      id: 'skill-1',
      skill: 'Gardening',
    },],
    languages: [{
      id: 'lang-1',
      language: 'English',
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

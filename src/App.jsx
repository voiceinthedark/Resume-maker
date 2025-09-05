import { useEffect, useState } from 'react'
import ResumePreview from './components/resume/ResumePreview'
import ResumeEdit from './components/ResumeEdit'
import './styles/App.css'
import initialSampleData from "./components/utils/sampleData.js"
import PageHeader from './components/header/PageHeader.jsx'

function App() {
  const [data, setData] = useState(initialSampleData);
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    darkModeMediaQuery.addEventListener('change', (e) => {
      if(e.matches){
        setDarkMode(true)
      } else{
        setDarkMode(false)
      }
    })
  }, [darkModeMediaQuery])

  return (
    <>
      <PageHeader />
      <ResumeEdit data={data} setData={setData} darkMode={darkMode} />
      <ResumePreview data={data} />
    </>
  )
}

export default App

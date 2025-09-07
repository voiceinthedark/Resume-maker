import { Suspense, useEffect, useState } from 'react'
import ResumePreview from './components/resume/ResumePreview'
import ResumeEdit from './components/ResumeEdit'
import './styles/App.css'
import initialSampleData from "./components/utils/sampleData.js"
import PageHeader from './components/header/PageHeader.jsx'
import ConfigEdit from './components/ConfigEdit.jsx'
import AppInfo from './components/AppInfo.jsx'

function App() {
  const [active, setActive] = useState('edit')
  const [data, setData] = useState(initialSampleData);
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    darkModeMediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    })
  }, [darkModeMediaQuery])

  return (
    <Suspense fallback={<div>
      Loading Translations...
    </div>}>
      <>
        <PageHeader setActive={setActive} darkMode={darkMode} />
        {active === 'edit'
          ? <ResumeEdit
            data={data}
            setData={setData}
            darkMode={darkMode} />
          : <ConfigEdit />}
        <ResumePreview data={data} darkMode={darkMode} />
        <AppInfo darkMode={darkMode} />
      </>
    </Suspense>
  )
}

export default App

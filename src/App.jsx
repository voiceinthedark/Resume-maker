import { Suspense, useEffect, useState } from 'react'
import ResumePreview from './components/resume/ResumePreview'
import ResumeEdit from './components/ResumeEdit'
import './styles/App.css'
import initialSampleData from "./components/utils/sampleData.js"
import PageHeader from './components/header/PageHeader.jsx'
import ConfigEdit from './components/ConfigEdit.jsx'
import AppInfo from './components/AppInfo.jsx'
import './i18n.js'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.js'
import EnhancedLanguageSwitcher from './components/utils/EnhancedLanguageSwitcher.jsx'
import ClassicResume from './components/resume/classic/ClassicResume.jsx'

function App() {
  const [active, setActive] = useState('edit')
  const [template, setTemplate] = useState('modern') // Default template: modern
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : initialSampleData;
  });
  const [save, setSave] = useState(() => {
    const autosave = localStorage.getItem('autosave')
    return autosave ? JSON.parse(autosave) : true
  })
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

  useEffect(() => {
    if (save) {
      console.log('saving to local storage')
      localStorage.setItem('resumeData', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem('autosave', JSON.stringify(save))
  }, [save])

  return (

    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>
        Loading Translations...
      </div>}>
        <>
          <PageHeader setActive={setActive} darkMode={darkMode} />
          {active === 'edit'
            ? <ResumeEdit
              data={data}
              setData={setData}
              darkMode={darkMode}
            />
            : <ConfigEdit
              save={save}
              setSave={setSave}
              template={template}
              setTemplate={setTemplate}
            />}
          {template === 'modern'
            ? <ResumePreview data={data} darkMode={darkMode} />
            : <ClassicResume data={data} />
          }
          <AppInfo darkMode={darkMode} />
          <EnhancedLanguageSwitcher />
        </>
      </Suspense >
    </I18nextProvider>
  )
}

export default App

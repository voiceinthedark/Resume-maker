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

  const [style, setStyle] = useState(() => {
    const storedStyle = localStorage.getItem('style')
    return storedStyle !== null ? JSON.parse(storedStyle) : defaultStyle
  })

  useEffect(() => {
    localStorage.setItem('style', JSON.stringify(style))
  }, [style])
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
      localStorage.setItem('resumeData', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem('autosave', JSON.stringify(save))
  }, [save])

  // Moved from ConfigEdit.jsx
  useEffect(() => {
    document.getElementById('root').style.setProperty('--bg-header-color', style.colors.accent)
  }, [style.colors.accent])

  // Moved from ConfigEdit.jsx
  useEffect(() => {
    document.getElementById('root').style.setProperty('--font-color', style.colors.font)
  }, [style.colors.font])

  // Moved from ConfigEdit.jsx
  useEffect(() => {
    const preview = template === 'modern'
      ? document.getElementById('resume-preview')
      : document.getElementById('classic-resume')

    if (preview) { // Add a check to ensure preview element exists
      style.font.style === 'serif'
        ? preview.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-serif')
        : preview.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-sans')
    }
  }, [style.font.style, template]) // template dependency added as preview depends on it

  // Moved from ConfigEdit.jsx
  useEffect(() => {
    const preview = template === 'modern'
      ? document.getElementById('resume-preview')
      : document.getElementById('classic-resume')

    if (preview) { // Add a check to ensure preview element exists
      preview.style.setProperty('--scale', style.scale.paperScale)
    }
  }, [style.scale.paperScale, template]) // template dependency added

  // Moved from ConfigEdit.jsx
  useEffect(() => {
    const preview = template === 'modern'
      ? document.getElementById('resume-preview')
      : document.getElementById('classic-resume')

    if (preview) { // Add a check to ensure preview element exists
      preview.style.setProperty('--photo-size', style.scale.imageSize)
    }
  }, [style.scale.imageSize, template]) // template dependency added



  return (

    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>
        Loading Translations...
      </div>}>
        <>
          <PageHeader
            setActive={setActive}
            darkMode={darkMode}
            template={template}
          />
          {active === 'edit'
            ? <ResumeEdit
              data={data}
              setData={setData}
              darkMode={darkMode}
            />
            : <ConfigEdit
              style={style}
              setStyle={setStyle}
              save={save}
              setSave={setSave}
              template={template}
              setTemplate={setTemplate}
            />}
          {template === 'modern'
            ? <ResumePreview data={data} style={style} />
            : <ClassicResume data={data} style={style} />
          }
          <AppInfo darkMode={darkMode} />
          <EnhancedLanguageSwitcher />
        </>
      </Suspense >
    </I18nextProvider>
  )
}

export default App

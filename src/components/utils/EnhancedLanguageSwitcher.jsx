// @ts-check

import { useTranslation } from 'react-i18next';
import { useLanguageDetection } from '../../hooks/useLanguageDetection';
import "../../styles/enhancedlang.css"

const EnhancedLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { detectedLanguage, isDetecting } = useLanguageDetection();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    // { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='enhanced-lang-switcher'>
      {isDetecting && <p>Detecting language...</p>}
      
      <div className="language-switcher">
        {languages.map((lng) => (
          <button
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            className={`language-btn ${i18n.language === lng.code ? 'active' : ''}`}
            style={{ 
              margin: '0 5px',
              padding: '8px 12px',
              border: i18n.language === lng.code ? '2px solid #007bff' : '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {lng.flag} {lng.name}
            {detectedLanguage === lng.code && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                fontSize: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnhancedLanguageSwitcher

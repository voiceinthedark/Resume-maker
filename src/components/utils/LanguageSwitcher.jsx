// @ts-check

import { useTranslation } from 'react-i18next';
import "../../styles/langswitch.css"


const LanguageSwitcher = () => {
  const { i18n } = useTranslation('common');
  const {t} = useTranslation('common')

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    // { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <label htmlFor="lang-switch">
        {t('config_lang')}
      </label>
      <div id="lang-switch" className="config-lang">
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
                cursor: 'pointer'
              }}
            >
              {lng.flag} {lng.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;

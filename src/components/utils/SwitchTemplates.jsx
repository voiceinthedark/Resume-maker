// @ts-check

import { useTranslation } from "react-i18next"

export default function SwitchTemplate({ template, setTemplate }) {
  const { t } = useTranslation('common')

  const templates = [
    { id: 'modern', name: "Modern", val: 'modern' },
    { id: 'traditional', name: "Traditional", val: 'traditional' }
  ]

  return (
    <section className="config-template">
      <label htmlFor="template">
        {t('choose_template')}
      </label>
      <div className="template">
        {templates.map(t => {
          return (
            <button
              key={t.id}
              onClick={() => setTemplate(t.val)}
              style={{
                margin: '0 5px',
                padding: '8px 12px',
                border: template === t.val ? '2px solid #007bff' : '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {t.name}
              {template === t.val && (
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
          )
        })}
      </div>
    </section>
  )

}

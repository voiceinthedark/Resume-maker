// @ts-check

import { useTranslation } from "react-i18next"

export default function ConfigScale({ style, changeStyle}) {
  const {t} = useTranslation('common')
  return (
    <>
      <label htmlFor="config-scale">
        {t('config_scale')}
      </label>
      <div id="config-scale" className="config-scale">
        <div className="scale">
          <label htmlFor="page-scale">
            {t('page_scale')}
          </label>
          <input type="range"
            name="page-scale"
            id="page-scale"
            value={style.scale.paperScale}
            min={0.5}
            max={1.00}
            step={0.05}
            onChange={(e) => changeStyle('scale', 'paperScale', e.target.value)}
          />
        </div>
        <div className="scale">
          <label htmlFor="image-scale">
            {t('photo_scale')}
          </label>
          <input type="range"
            name="image-scale"
            id="image-scale"
            min={140}
            max={210}
            step={5}
            value={style.scale.imageSize}
            onChange={(e) => changeStyle('scale', 'imageSize', e.target.value)}
          />
        </div>
      </div>
      <hr className="rule" />
    </>
  )
}

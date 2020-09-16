import React from 'react'

export type Props = {
  max?           : number
  height?        : number
  val            : number
  correctionVal? : number
  labels         : string[]
}

/**
 * 進捗度等を表すプログレスバーを構築
 * @param {Number} max 最大値
 * @param {Number} height プログレスバーの高さ
 * @param {Number} val 進捗値
 * @param {Number} correctionVal 補正値
 * @param {Array} labels 等間隔に掲載するラベル
 */
const ProgressBar: React.FC<Props> = ({
  max = 100,
  height = 20,
  val,
  correctionVal = 0,
  labels
}: Props) => {
  const _val  = val > 0 ? val + correctionVal : val
  const width = `${_val / max * 100}%`
  const clazz = 'progress-bar'
  // 目盛りを等間隔に配置する要素を構築
  const scale = labels.map((label, i) => <div key={i} className={`${clazz}__label`}>{label}</div>)
  return (
    <div className={clazz}>
      <div className={`${clazz}__bar`} style={{ height }}>
        <div className={`${clazz}__meter`} style={{ width }}></div>
      </div>
      <div className={`${clazz}__scale`}>
        {...scale}
      </div>
    </div>
  )
}

export default ProgressBar

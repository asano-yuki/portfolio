import React from 'react'

export type Props = {
  title  : string
  text   : string
}

/**
 * 言語解説コンポーネントの構築
 * @param {String} title タイトル
 * @param {String} text 解説文章
 */
const LangExplanation: React.FC<Props> = ({
  title,
  text
}: Props) => {
  const clazz = 'lang-explanation'
  return (
    <div className={clazz}>
      <h4>{title}</h4>
      <p className={`${clazz}__text`}>{text}</p>
    </div>
  )
}

export default LangExplanation

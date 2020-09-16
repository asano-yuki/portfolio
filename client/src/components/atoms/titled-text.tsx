import React from 'react'

export type Props = {
  title    : string
  text     : string
}

/**
 * タイトル付きテキストを構築
 * @param {String} title タイトル
 * @param {String} text テキスト
 */
const TitledText: React.FC<Props> = ({
  title,
  text
}: Props) => {
  const clazz = 'titled-text'
  return (
    <div>
      <h3 className={`${clazz}__title`}>{title}</h3>
      <p className={`${clazz}__text`}>{text}</p>
    </div>
  )
}

export default TitledText

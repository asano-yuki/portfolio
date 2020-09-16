import React from 'react'

export type Props = {
  items : {
    Image           : JSX.Element
    LangExplanation : JSX.Element
  }[]
}

/**
 * サムネイル付き言語解説リスト
 * @param {Object} items.LangExplanation 言語解説コンポーネント
 * @param {Object} items.style スタイル属性
 */
const LangExplanationWithThumbnails: React.FC<Props> = ({
  items
}: Props) => {
  const clazz = 'lang-thumbnails'
  const _items: React.ReactNode = items.map((item, i) => {
    const { Image, LangExplanation } = item
    return (
      <li key={i} className={`${clazz}__item`}>
        <div className={`${clazz}__thumbnail`}>
          {Image}
        </div>
        {LangExplanation}
      </li>
    )
  })
  return <ul className={clazz}>{_items}</ul>
}

export default LangExplanationWithThumbnails

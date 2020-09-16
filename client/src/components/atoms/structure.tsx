import React from 'react'

export type Props = {
  title      : string
  children   : React.ReactNode
  className? : string
}

/**
 * organismsディレクトリ配下にある、コンポーネントの枠組みを構築
 * @param {String} title タイトル
 * @param {Object} children 子コンポーネント
 * @param {String} className クラス名
 */
const Structure: React.FC<Props> = ({
  title,
  children,
  className
}: Props) => {
  const clazz = 'structure'
  return (
    <section className={`${clazz} ${className ? `${clazz}__${className}` : ''}`}>
      <h2 className={`${clazz}__title`}>{title}</h2>
      <div className={`${clazz}__body`}>{children}</div>
    </section>
  )
}

export default Structure

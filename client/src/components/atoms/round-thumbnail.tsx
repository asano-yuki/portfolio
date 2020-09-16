import React from 'react'

export type Props = {
  imgPath : string
  alt?    : string
}

/**
 * 丸型サムネイルを構築
 * @param {String} imgPath 画像パス
 * @param {String} alt 画像のalt属性
 */
const RoundThumbnail: React.FC<Props> = ({
  imgPath,
  alt = 'サムネイル画像'
}: Props) => {
  const clazz = 'round-thumbnail'
  // 画像の指定がなければ、デフォルトのSVG画像を表示
  const img = <img src={imgPath} className={`${clazz}__img`} alt={alt} />
  return <div className={clazz}>{img}</div>
}

export default RoundThumbnail

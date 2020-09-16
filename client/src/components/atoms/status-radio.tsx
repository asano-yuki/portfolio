import React from 'react'

export type Props = {
  practice : boolean
  use      : boolean
  unused   : boolean
}

/**
 * スキルの稼働ステータス(ラジオ)を構築
 * @param {Boolean} params.practice 実務ステータスのフラグ値
 * @param {Boolean} params.use 使用中ステータスのフラグ値
 * @param {Boolean} params.practice 未使用中ステータスのフラグ値
 */
const StatusRadio: React.FC<Props> = ({
  practice,
  use,
  unused
}: Props) => {
  const clazz = 'status-radio'
  // リスト項目のクラス名を取得する関数
  const getClass = (flag: boolean) => {
    const res = flag ? `${clazz}__item_type_on` : ''
    return `${clazz}__item ${res}`
  }
  return (
    <div className={clazz}>
      <ul className={`${clazz}__list`}>
        <li className={getClass(practice)}>実務</li>
        <li className={getClass(use)}>使用中</li>
        <li className={getClass(unused)}>未使用中</li>
      </ul>
    </div>
  )
}

export default StatusRadio

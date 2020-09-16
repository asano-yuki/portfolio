import { useState } from 'react'

type PathParam = {
  top    : string
  middle : string
  bottom : string
}

export type Props = {
  defaultArrowParam    : PathParam
  getCurrentArrowParam : () => PathParam
  getChangedArrowParam : () => PathParam
}

/**
 * arrow-button.tsxのロジックを定義
 * 矢印アイコンのアニメーション時に渡すパラメータの取得、更新処理
 * @param initDirection hoverイベント時の初期アイコン向き
 */
const useArrowButton = (initDirection?: 'left' | 'right'): Props => {
  const [direction, setDirection] = useState(initDirection)

  // path要素を横棒(デフォルト)に変形するパラメータ
  const defaultArrowParam: PathParam = {
    top   : 'M2,5 L28,5 28,8, 2,8',
    middle: 'M2,14 L28,14 28,17 2,17',
    bottom: 'M2,23 L28,23 28,26, 2,26'
  }
  // path要素を左矢印に変形するパラメータ
  const leftArrowParam: PathParam = {
    top   : 'M2,14 L15,1 15,4, 2,17',
    middle: defaultArrowParam.middle,
    bottom: 'M2,14 L15,27 15,30, 2,17'
  }
  // path要素を右矢印に変形するパラメータ
  const rightArrowParam: PathParam = {
    top   : 'M15,1 L28,14 28,17, 15,4',
    middle: defaultArrowParam.middle,
    bottom: 'M15,30 L28,17 28,14, 15,27'
  }

  // 現在の'direction'の値に応じたpath要素のパラメータを取得
  const getCurrentArrowParam = (): PathParam => {
    const changedParam = direction === 'left' ? leftArrowParam : rightArrowParam
    return changedParam
  }

  // 'direction'の値を「left → right, right → left」に更新後、path要素のパラメータを取得
  const getChangedArrowParam = (): PathParam => {
    const newDirection = direction === 'left' ? 'right' : 'left'
    const changedParam = newDirection === 'left' ? leftArrowParam : rightArrowParam
    setDirection(newDirection)
    return changedParam
  }

  return { defaultArrowParam, getCurrentArrowParam, getChangedArrowParam }
}

export default useArrowButton

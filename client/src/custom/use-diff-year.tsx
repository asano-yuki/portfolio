/**
 * 差分の年数を浮動小数点で取得
 * @param {Date} start 開始時間のタイムスタンプ
 * @param {Date} end 終了時間のタイムスタンプ
 * @return {Number} 年数
 */
const getDiffYear = (start?: Date, end?: Date): number => {
  const _start = start || new Date()
  const _end   = end   || new Date()
  const time  = new Date(_end).getTime() - new Date(_start).getTime()
  return time / (1000 * 60 * 60 * 24 * 365)
}

export default getDiffYear

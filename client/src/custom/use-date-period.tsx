/**
 * 年月表記による期間の取得
 * @param {Date} start 開始年月
 * @param {Date} end 終了年月
 * @return {String} 年月文字列 ex. 2020年1月～2020年5月
 */
const getDatePeriod = (start: Date, end?: Date | null): string => {
  const _start = new Date(start)
  const startDate = `${_start.getFullYear()}年${_start.getMonth()}月`
  const endDate   = end ? `${new Date(end).getFullYear()}年${new Date(end).getMonth()}月` : ''
  return `${startDate}～${endDate}`
}

export default getDatePeriod

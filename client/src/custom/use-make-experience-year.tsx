import { SkillState } from '../modules/actions/skill'

/**
 * 実務経験年数の合計値を算出
 * @param years ex. [{ start: string | null, end: string | null }]
 * @return {Number} float型の数値
 */
export const makeExperienceYear = (
  years: SkillState['years']
): number => {
  // 実務経験年数の合計値を算出
  const year = years.reduce((accum, current) => {
    const start = current.start || new Date()
    const end   = current.end   || new Date()
    const time  = new Date(end).getTime() - new Date(start).getTime()
    const total = time / (1000 * 60 * 60 * 24 * 365)
    return accum + total
  }, 0)
  return year
}

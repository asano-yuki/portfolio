import { renderHook, act } from '@testing-library/react-hooks'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'

import useArrowButton from '../src/custom/use-arrow-button'
import getDatePeriod from '../src/custom/use-date-period'
import useFormikContact, { ValueProps } from '../src/custom/use-formik-contact'
import { makeExperienceYear } from '../src/custom/use-make-experience-year'
import { SkillState } from '../src/modules/actions/skill'

// 矢印ボタンをSnap.jsライブラリを用いて構築
describe('use-arrow-button.tsx', () => {
  const defaultPath = {
    top    : 'M2,5 L28,5 28,8, 2,8',
    middle : 'M2,14 L28,14 28,17 2,17',
    bottom : 'M2,23 L28,23 28,26, 2,26'
  }
  const rightPath = {
    top    : 'M15,1 L28,14 28,17, 15,4',
    middle : defaultPath.middle,
    bottom : 'M15,30 L28,17 28,14, 15,27'
  }

  it('矢印アイコンのデフォルトパラメータを取得', () => {
    const { result } = renderHook(() => useArrowButton('left'))
    expect(result.current.defaultArrowParam).toEqual(defaultPath)
  })
  it('現在の矢印アイコンパラメータを取得', () => {
    const { result } = renderHook(() => useArrowButton('right'))
    const param = result.current.getCurrentArrowParam()
    expect(param).toEqual(rightPath)
  })
  it('矢印アイコンのdirectionをleft → rightに更新', () => {
    const { result } = renderHook(() => useArrowButton('left'))
    act(() => {
      const param = result.current.getChangedArrowParam()
      expect(param).toEqual(rightPath)
    })
  })
})

// 年月表記による期間の取得
describe('use-date-period.tsx', () => {
  let start: Date
  beforeEach(() => {
    start = new Date(2020, 1, 1)
  })

  it('2020年1月～2020年7月の文字列を取得', () => {
    const end   = new Date(2020, 7, 10)
    const { result } = renderHook(() => getDatePeriod(start, end))
    expect(result.current).toBe('2020年1月～2020年7月')
  })

  it('2020年1月～の文字列を取得', () => {
    const { result } = renderHook(() => getDatePeriod(start))
    expect(result.current).toBe('2020年1月～')
  })
})

// お問い合わせの送信ボタン押下
describe('use-formik-contact.tsx', () => {
  let mock: jest.SpyInstance
  let onSubmit: (values: ValueProps) => Promise<boolean>
  // テスト用データ
  const fakes: ValueProps = {
    name     : 'test',
    email    : 'test@gmail.com',
    summary  : 'サイトについて',
    contents : 'test.test.test'
  }

  beforeEach(() => {
    const { result } = renderHook(() => useFormikContact())
    onSubmit = result.current.onSubmit
    mock = jest.spyOn(axios, 'post')
  })

  afterEach(() => {
    mock.mockRestore()
  })

  it('送信成功処理', async () => {
    mock.mockImplementation(() => Promise.resolve({ data: { errors: '' } }))
    const res = await onSubmit(fakes)
    expect(res).toBe(true)
  })

  it('送信失敗処理', async () => {
    mock.mockImplementation(() => Promise.resolve({ data: { errors: 'invalid data!' } }))
    const res = await onSubmit(fakes)
    expect(res).toBe(false)
  })
})

// 実務経験年数の合計値を算出
describe('use-make-experience-year.tsx', () => {
  it('実務経験年数の合計値を算出', () => {
    const years: SkillState['years'] = [
      { start: '2015', end: '2016' },
      { start: '2016', end: '2018' }
    ]
    const res = makeExperienceYear(years)
    expect(res).toBeGreaterThanOrEqual(3)
  })
})

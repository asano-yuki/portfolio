import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { RouteComponentProps } from 'react-router-dom'

import { Contexts } from '../../modules/contexts'
import Structure from '../atoms/structure'
import Breadcrumb from '../atoms/breadcrumb'
import RelationTable from '../molecules/relation-table'
import RelationTableRow from '../atoms/relation-table-row'
import getDatePeriod from '../../custom/use-date-period'

type Props = RouteComponentProps<{id: string}>

const ExperienceDetail: React.FC<Props> = ({
  match
}: Props) => {
  const data = useContext(Contexts)
  if (!data?.experience) return <></>
  const experience = data.experience

  // 対象IDの実務経験詳細情報を取得
  const id     = parseInt(match.params.id)
  const detail = experience.filter(d => d._id === id)
  if (detail.length !== 1) throw new Error('指定したIDに合致したデータが存在しません。')

  const {
    startDate,
    endDate,
    title,
    content,
    scale,
    style,
    role,
    language,
    db,
    os,
    mw,
    fw,
    tool,
    charge
  } = detail[0]

  // パンくずリスト構築のプロパティを構築
  const hierarchies = [
    { title: '実務経験一覧', path: '/experience' },
    { title }
  ]

  // 年月表記による所属期間の表示
  const period = getDatePeriod(startDate, endDate)

  // 業務内容をリストで表示
  const _content = <ul>{ content.map((item, i) => <li key={i}>・{item}</li>) }</ul>

  const isSmartPhone = useMediaQuery({ query: '(max-width: 480px)' })
  const clazz = 'experience-detail'
  return (
    <>
      <div className={`${clazz}__breadcrumb`}>
        <Breadcrumb hierarchies={hierarchies} />
      </div>
      <Structure title='実務経験詳細'>
        <RelationTable>
          <RelationTableRow thText='期間' tdText={period} width={isSmartPhone ? '100%' : '47.5%' } />
          <RelationTableRow thText='規模' tdText={scale} width={isSmartPhone ? '100%' : '47.5%' } />
          <RelationTableRow thText='役割' tdText={role} width={isSmartPhone ? '100%' : '47.5%' } />
          <RelationTableRow thText='勤務形態' tdText={style} width={isSmartPhone ? '100%' : '47.5%' } />
          <RelationTableRow thText='業務内容' tdText={_content} />
          <RelationTableRow thText='使用言語' tdText={language.join('、')} />
          <RelationTableRow thText='OS' tdText={os.join('、')} />
          <RelationTableRow thText='DB' tdText={db.join('、')} />
          <RelationTableRow thText='MW' tdText={mw.join('、')} />
          <RelationTableRow thText='FW' tdText={fw.join('、')} />
          <RelationTableRow thText='ツ‐ル' tdText={tool.join('、')} />
          <RelationTableRow thText='担当工程' tdText={charge.join('、')} />
        </RelationTable>
      </Structure>
    </>
  )
}

export default ExperienceDetail

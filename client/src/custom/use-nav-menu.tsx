import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faHome, faLaptop, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  navInfos : {
    path     : string
    iconName : IconDefinition
    title    : string
  }[]
}

/**
 * ナビゲーションメニューの構築
 */
const useNavMenu = (): Props => {
  // ナビゲーションメニューの項目リスト
  const navInfos = [
    { path: '/'          , iconName: faHome     , title: 'トップ' },
    { path: '/skill'     , iconName: faLaptop   , title: 'スキル' },
    { path: '/experience', iconName: faBriefcase, title: '実務経験' },
    { path: '/contact'   , iconName: faEnvelope , title: 'お問い合わせ' }
  ]

  return { navInfos }
}

export default useNavMenu

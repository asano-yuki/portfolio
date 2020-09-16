import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  fileName : string
  type?    : 'pdf'
  resource : string
}

/**
 * ダウンロードボタンを構築
 * @param {String} filename ダウンロードファイル名
 * @param {String} type 拡張子
 * @param {String} resource ダウンロードバイナリデータ
 */
const DownloadButton: React.FC<Props> = ({
  fileName,
  type,
  resource
}: Props) => {
  const clazz = 'download-btn'
  let icon: JSX.Element | null = null
  if (type === 'pdf') icon = <Icon icon={faFilePdf} className={`${clazz}__icon`} />
  return (
    <a href={resource} className={clazz} download={fileName}>
      {icon}
      <p className={`${clazz}__text`}>{fileName}</p>
    </a>
  )
}

export default DownloadButton

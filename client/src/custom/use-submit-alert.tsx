import swal from 'sweetalert'

type Props = {
  sendingAlert : () => Promise<any>
  successAlert : () => Promise<any>
  errorAlert   : () => Promise<any>
}

/**
 * ユーザー操作を伴う送信処理系のアラートを表示
 */
const useSubmitAlert = (): Props => {
  // 送信中アラート
  const sendingAlert = () => {
    return (swal({
      text                : 'メール送信中',
      icon                : 'info',
      buttons             : { visible: false },
      closeOnClickOutside : false,
      timer               : 20000
    }))
  }

  // 送信成功アラート
  const successAlert = () => swal({ title: '送信しました!', icon: 'success' })

  // 送信失敗アラート
  const errorAlert = () => swal({ title: '送信に失敗しました', icon: 'error' })

  return { sendingAlert, successAlert, errorAlert }
}

export default useSubmitAlert

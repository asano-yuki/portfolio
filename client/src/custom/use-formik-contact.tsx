import React from 'react'
import { Form, Field, FieldProps, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import { serverPath } from '../modules/util'

export type ValueProps = {
  name     : string
  email    : string
  summary  : string
  contents : string
}

type submitProps = {
  dirty        : boolean
  isValid      : boolean
  isSubmitting : boolean
  handleReset  : () => void
}

type Props = {
  initialValues    : ValueProps
  validationSchema : yup.ObjectSchema
  component        : (props: submitProps) => JSX.Element
  onSubmit         : (values: ValueProps) => Promise<boolean>
}

/**
 * Fomikコンポーネントの各種Propsを定義
 * @return {Object} FormikのProps、子コンポーネント
 */
const useFormikContact = (): Props => {
  // 後続処理で各入力項目をリセットする処理を格納
  let reset: () => void

  // 初期値を定義
  const initialValues = {
    name     : '',
    email    : '',
    summary  : 'サイトについて',
    contents : ''
  }

  // 各入力項目のバリデーションチェック
  const requiredMsg      = '必須項目です。'
  const validationSchema = yup.object().shape({
    name  : yup.string()
      .required(requiredMsg)
      .max(50, '50文字以内で入力して下さい。'),
    email : yup.string()
      .required(requiredMsg)
      .email('メールアドレスの形式に間違いがあります。'),
    contents : yup.string()
      .required(requiredMsg)
      .max(500, '500文字以内で入力して下さい。')
  })

  // 各入力項目のコンポーネント
  const component = ({
    dirty,
    isValid,
    isSubmitting,
    handleReset
  }: submitProps) => {
    // 送信後にリセットするために別変数で参照
    reset = handleReset
    // お問い合わせの種類を表すラジオボタンを構築
    const clazz = 'formik-contact'
    const radioRender = ({
      field
    }: FieldProps): React.ReactNode => {
      const { value }  = field
      const props      = { type: 'radio', name: 'summary' }
      const itemClass  = `${clazz}__summary-item`
      const radioClass = `${clazz}__summary-radio`
      return (
        <div className={`${clazz}__summary`}>
          <label className={`${itemClass} ${value === 'サイトについて' && `${itemClass}_state_checked`}`}>
            <Field {...props} value='サイトについて' className={radioClass} />
            サイトについて
          </label>
          <label className={`${itemClass} ${value === '仕事依頼' && `${itemClass}_state_checked`}`}>
            <Field {...props} value='仕事依頼' className={radioClass} />
            仕事依頼
          </label>
          <label className={`${itemClass} ${value === 'その他' && `${itemClass}_state_checked`}`}>
            <Field {...props} value='その他' className={radioClass} />
            その他
          </label>
        </div>
      )
    }
    // 送信ボタンの活性・非活性を定義
    const isActive = dirty && isValid
    let submitClass = `${clazz}__submit `
    if (isActive) submitClass += `${clazz}__submit_state_on`
    // <Formik>配下の子コンポーネント
    return (
      <Form className={clazz}>
        <label className={`${clazz}__group`}>
          <span className={`${clazz}__label`}>名&nbsp;前</span>
          <Field name='name' className={`${clazz}__name`} />
          <p className={`${clazz}__error`}><ErrorMessage name='name' /></p>
        </label>
        <label className={`${clazz}__group`}>
          <span className={`${clazz}__label`}>メールアドレス</span>
          <Field type='email' name='email' className={`${clazz}__email`} />
          <p className={`${clazz}__error`}><ErrorMessage name='email' /></p>
        </label>
        <div className={`${clazz}__group`}>
          <span className={`${clazz}__label`}>種&nbsp;類</span>
          <Field name='summary'>{radioRender}</Field>
          <p className={`${clazz}__error`}></p>
        </div>
        <label className={`${clazz}__group`}>
          <span className={`${clazz}__label`}>内&nbsp;容</span>
          <Field as='textarea' name='contents' className={`${clazz}__contents`} />
          <p className={`${clazz}__error`}><ErrorMessage name='contents' /></p>
        </label>
        <div className={`${clazz}__btn-group`}>
          <button type='submit' className={submitClass} disabled={!(isActive || isSubmitting)}>送&nbsp;信</button>
          <button className={`${clazz}__clear`} onClick={handleReset}>クリア</button>
        </div>
      </Form>
    )
  }

  // メールサービスに送信
  const onSubmit = async (values: ValueProps) => {
    const res = await axios.post(`${serverPath}/api/contact`, values, { timeout: 10000 })
    // フォーム内容を初期状態にリセット
    reset && reset()
    // 送信成功・失敗時のアラート
    return res.data.errors ? false : true
  }

  return { initialValues, validationSchema, component, onSubmit }
}

export default useFormikContact

import React from 'react'
import { Formik } from 'formik'

import useFormikContact, { ValueProps } from '../../custom/use-formik-contact'
import useSubmitAlert from '../../custom/use-submit-alert'

/**
 * お問い合わせフォームの構築
 */
const ContactForm: React.FC = () => {
  // Formikモジュールのカスタムフックを取得
  const {
    initialValues,
    validationSchema,
    component,
    onSubmit
  } = useFormikContact()
  // SweetAlertモジュールのカスタムフックを取得
  const {
    sendingAlert,
    successAlert,
    errorAlert
  } = useSubmitAlert()

  // メール送信後の処理
  const sendedMail = async (values: ValueProps) => {
    sendingAlert()
    const isSuccess = await onSubmit(values)
    isSuccess ? successAlert() : errorAlert
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={sendedMail}
    >
      {component}
    </Formik>
  )
}

export default ContactForm

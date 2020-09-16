import React from 'react'

import Structure from '../atoms/structure'
import ContactForm from '../organisms/contact-form'

const Contact: React.FC = () => {
  const clazz = 'contact'
  return (
    <div className={clazz}>
      <Structure title='お問い合わせ'>
        <ContactForm />
      </Structure>
    </div>
  )
}

export default Contact

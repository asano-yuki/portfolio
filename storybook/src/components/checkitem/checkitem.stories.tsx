import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import CheckItem, { Props } from './checkitem'
import './checkitem.scss'

export default {
  title     : 'UI/CheckItem',
  component : CheckItem,
  argTypes  : {
    label      : {},
    isChecked  : {},
    iconColor  : { control: 'color' },
    labelColor : { control: 'color' }
  }
} as Meta

const Template: Story<Props> = args => <CheckItem {...args} />

export const Checked = Template.bind({})
Checked.args = {
  label     : 'Checked',
  isChecked : true,
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  label     : 'UnChecked',
  isChecked : false,
}

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import CheckList, { Props } from './checklist'
import * as CheckItemStories from '../checkitem/checkitem.stories'
import './checklist.scss'

const checkItemArgTypes = CheckItemStories.default.argTypes || {}

export default {
  title     : 'UI/CheckList',
  component : CheckList,
  argTypes  : {
    items      : {},
    column     : {},
    iconColor  : checkItemArgTypes['iconColor'],
    labelColor : checkItemArgTypes['labelColor']
  }
} as Meta

const items = [
  { label: 'Check1', isChecked: true },
  { label: 'Check2', isChecked: true },
  { label: 'Check3', isChecked: true },
  { label: 'Check4', isChecked: false },
  { label: 'Check5', isChecked: false }
]
const Template: Story<Props> = args => <CheckList {...args} />

export const Single = Template.bind({})
Single.args = {
  items,
  column : 1
}

export const Multiple = Template.bind({})
Multiple.args = {
  items,
  column : 3
}

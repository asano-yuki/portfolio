import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import GroupList, { Props } from './grouplist'
import GroupItem from '../groupitem/groupitem'
import './grouplist.scss'

export default {
  title     : 'UI/GroupList',
  component : GroupList,
} as Meta

const Template: Story<Props> = args => {
  return (
    <GroupList {...args} >
      <GroupItem item='項目1' />
      <GroupItem item='項目2' />
      <GroupItem item='項目3' />
      <GroupItem item='項目4' />
    </GroupList>
  )
}

export const FixHeader = Template.bind({})
FixHeader.args = {
  isHead : true
}

export const FixFooter = Template.bind({})
FixFooter.args = {
  isHead : false
}

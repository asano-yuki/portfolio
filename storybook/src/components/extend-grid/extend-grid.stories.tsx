import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ExtendGrid, { Props } from './extend-grid'
import './extend-grid.scss'

export default {
  title     : 'UI/ExtendGrid',
  component : ExtendGrid
} as Meta

const data = [
  ['データ1', 'データ1', 'データ1', 'データ1'],
  ['データ2', 'データ2', 'データ2', 'データ2'],
  ['データ3', 'データ3', 'データ3', 'データ3'],
  ['データ4', 'データ4', 'データ4', 'データ4'],
  ['データ5', 'データ5', 'データ5', 'データ5']
]
const columns = ['カラム1', 'カラム2', 'カラム3', 'カラム4']

const Template: Story<Props> = args => <ExtendGrid {...args} />

export const FixedHeader = Template.bind({})
FixedHeader.args = {
  data,
  columns,
  isFixedHeader: true,
  height: '200px'
}

export const UnfixedHeader = Template.bind({})
UnfixedHeader.args = {
  data,
  columns,
  isFixedHeader: false,
  height: '200px'
}

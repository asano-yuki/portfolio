import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Breadcrumb, { Props } from './breadcrumb'
import './breadcrumb.scss'

export default {
  title     : 'UI/Breadcrumb',
  component : Breadcrumb,
  argTypes  : {
    hierarchies : {},
    isHorizon   : {},
    linkColor   : { control: 'color' }
  }
} as Meta

const hierarchies = [
  { title: 'パンくず1', path: './' },
  { title: 'パンくず2', path: './' },
  { title: 'パンくず3' },
]

const Template: Story<Props> = args => <Breadcrumb {...args} />

export const Horizon = Template.bind({})
Horizon.args = {
  hierarchies,
  isHorizon : true
}

export const Vertical = Template.bind({})
Vertical.args = {
  hierarchies,
  isHorizon : false,
}

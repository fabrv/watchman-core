import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchControl } from './SearchControl'

export default {
  title: 'Core/SearchControl',
  component: SearchControl,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SearchControl>

const Template: ComponentStory<typeof SearchControl> = (args) => <SearchControl {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Search',
  value: ''
}

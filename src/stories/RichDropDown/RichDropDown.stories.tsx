import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RichDropDown } from './RichDropDown'

export default {
  title: 'Core/RichDropDown',
  component: RichDropDown,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof RichDropDown>

const Template: ComponentStory<typeof RichDropDown> = (args) => <RichDropDown {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  children: <div>Hello</div>,
  caption: 'Hello',
  variant: 'light'
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ActionBar } from './ActionBar'

export default {
  title: 'Core/ActionBar',
  component: ActionBar,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof ActionBar>

const Template: ComponentStory<typeof ActionBar> = (args) => <ActionBar/>

export const Basic = Template.bind({})
Basic.args = {}

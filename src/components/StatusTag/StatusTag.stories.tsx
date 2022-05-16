import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StatusTag } from './StatusTag'

export default {
  title: 'Core/StatusTag',
  component: StatusTag,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof StatusTag>

const Template: ComponentStory<typeof StatusTag> = (args) => <StatusTag {...args}/>

export const Finished = Template.bind({})
Finished.args = {
  finished: true,
  duration: 0,
  labels: {
    finished: 'Finished',
    running: 'Running',
    overtime: 'Overtime'
  }
}

export const Running = Template.bind({})
Running.args = {
  finished: false,
  duration: 5,
  labels: {
    finished: 'Finished',
    running: 'Running',
    overtime: 'Overtime'
  }
}

export const Overtime = Template.bind({})
Overtime.args = {
  finished: false,
  duration: 3.6e6 * 9,
  labels: {
    finished: 'Finished',
    running: 'Running',
    overtime: 'Overtime'
  }
}

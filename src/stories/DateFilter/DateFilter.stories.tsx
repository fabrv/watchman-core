import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DateFilter } from './DateFilter'

export default {
  title: 'Core/DateFilter',
  component: DateFilter,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof DateFilter>

const Template: ComponentStory<typeof DateFilter> = (args) => <DateFilter {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  labels: {
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',
    thisYear: 'This Year',
    lastYear: 'Last Year'
  }
}

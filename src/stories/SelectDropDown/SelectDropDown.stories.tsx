import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiUser } from 'react-icons/fi'

import { SelectDropDown } from './SelectDropDown'

export default {
  title: 'Core/SelectDropDown',
  component: SelectDropDown,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SelectDropDown>

const Template: ComponentStory<typeof SelectDropDown> = (args) => <SelectDropDown {...args}/>

export const Text = Template.bind({})
Text.args = {
  caption: 'Client',
  labels: {
    search: 'Search',
    all: 'Select All'
  },
  searchValue: '',
  data: [
    { id: 1, value: 'Microsoft' },
    { id: 2, value: 'Google' },
    { id: 3, value: 'Amazon' },
    { id: 4, value: 'Oracle' },
    { id: 5, value: 'Apple' },
    { id: 6, value: 'Facebook' },
    { id: 7, value: 'Twitter' },
    { id: 8, value: 'Youtube' },
    { id: 9, value: 'Linkedin' },
    { id: 10, value: 'Instagram' }
  ]
}

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  caption: <FiUser />,
  labels: {
    search: 'Search',
    all: 'Select All'
  },
  searchValue: '',
  data: [
    { id: 1, value: 'Microsoft' },
    { id: 2, value: 'Google' },
    { id: 3, value: 'Amazon' },
    { id: 4, value: 'Oracle' },
    { id: 5, value: 'Apple' },
    { id: 6, value: 'Facebook' },
    { id: 7, value: 'Twitter' },
    { id: 8, value: 'Youtube' },
    { id: 9, value: 'Linkedin' },
    { id: 10, value: 'Instagram' }
  ]
}

export const TextAndIcon = Template.bind({})
TextAndIcon.args = {
  caption: <><FiUser/> Client</>,
  labels: {
    search: 'Search',
    all: 'Select All'
  },
  searchValue: '',
  data: [
    { id: 1, value: 'Microsoft' },
    { id: 2, value: 'Google' },
    { id: 3, value: 'Amazon' },
    { id: 4, value: 'Oracle' },
    { id: 5, value: 'Apple' },
    { id: 6, value: 'Facebook' },
    { id: 7, value: 'Twitter' },
    { id: 8, value: 'Youtube' },
    { id: 9, value: 'Linkedin' },
    { id: 10, value: 'Instagram' }
  ]
}

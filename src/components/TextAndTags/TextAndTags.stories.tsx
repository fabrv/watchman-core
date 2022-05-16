import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextAndTags } from './TextAndTags'

export default {
  title: 'Core/TextAndTags',
  component: TextAndTags,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TextAndTags>

const Template: ComponentStory<typeof TextAndTags> = (args) => <TextAndTags {...args}/>

export const TagsAndText = Template.bind({})
TagsAndText.args = {
  tags: ['tag1', 'tag2', 'tag3'],
  text: 'Tags and Text'
}

export const OneTag = Template.bind({})
OneTag.args = {
  tags: ['tag1']
}

export const NameAndEmail = Template.bind({})
NameAndEmail.args = {
  tags: ['nameLastname@email.com'],
  text: 'Name Lastname'
}

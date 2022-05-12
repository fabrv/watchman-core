import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FormModal } from './FormModal'

export default {
  title: 'Core/FormModal',
  component: FormModal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof FormModal>

const Template: ComponentStory<typeof FormModal> = (args) => <FormModal {...args}>Open Modal</FormModal>

export const Text = Template.bind({})
Text.args = {
  title: 'Title',
  fields: [
    {
      name: 'field1',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Name of user',
      value: 'John'
    },
    {
      name: 'field2',
      label: 'Lastname',
      type: 'text',
      required: true,
      placeholder: 'Lastname of user',
      value: 'Doe'
    }
  ],
  labels: {
    submit: 'Submit',
    cancel: 'Cancel',
    invalidFieldValue: 'Invalid field value'
  }
}

export const Select = Template.bind({})
Select.args = {
  title: 'Title',
  fields: [
    {
      name: 'field1',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Name of user',
      value: 'John'
    },
    {
      name: 'field2',
      label: 'Role',
      type: 'select',
      options: [{ id: 1, value: 'Administrator' }, { id: 2, value: 'User' }],
      required: true,
      placeholder: 'Role of user',
      value: 'Doe'
    }
  ],
  labels: {
    submit: 'Submit',
    cancel: 'Cancel',
    invalidFieldValue: 'Invalid field value'
  }
}

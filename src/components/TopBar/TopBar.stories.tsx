import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiLogOut, FiSettings } from 'react-icons/fi'

import { TopBar } from './TopBar'

export default {
  title: 'Core/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TopBar>

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args}/>

export const Light = Template.bind({})
Light.args = {
  brand: '⏱ Watchman',
  links: [
    {
      title: '',
      Icon: FiLogOut,
      href: '#'
    },
    {
      title: '',
      Icon: FiSettings,
      href: '#'
    }
  ],
  variant: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
  brand: '⏱ Watchman',
  links: [
    {
      title: '',
      Icon: FiLogOut,
      href: '#'
    },
    {
      title: '',
      Icon: FiSettings,
      href: '#'
    }
  ],
  variant: 'light'
}

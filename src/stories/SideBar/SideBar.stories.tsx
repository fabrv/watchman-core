import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiActivity, FiBriefcase, FiClock, FiHome, FiInfo, FiList, FiUsers } from 'react-icons/fi'

import { SideBar } from './SideBar'

export default {
  title: 'Core/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SideBar>

const menuItems = {
  groups: [
    {
      name: 'Home',
      items: [
        {
          icon: FiHome,
          name: 'Track',
          url: '/',
          active: true
        },
        {
          icon: FiUsers,
          name: 'Team',
          url: '/team',
          active: true
        },
        {
          icon: FiActivity,
          name: 'Projects',
          url: '/projects',
          active: true
        },
        {
          icon: FiInfo,
          name: 'Change Log',
          url: '/changelog',
          active: true
        }
      ]
    },
    {
      name: 'Manage',
      items: [
        {
          icon: FiClock,
          name: 'Time Logs',
          url: '/admin/times',
          active: true
        },
        {
          icon: FiUsers,
          name: 'Users',
          url: '/admin/users',
          active: true
        },
        {
          icon: FiBriefcase,
          name: 'Projects',
          url: '/admin/projects',
          active: true
        },
        {
          icon: FiUsers,
          name: 'Teams',
          url: '/admin/teams',
          active: true
        },
        {
          icon: FiList,
          name: 'Types',
          url: '/admin/types',
          active: true
        }
      ]
    }
  ]
}

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  activeKey: '/',
  data: menuItems
}

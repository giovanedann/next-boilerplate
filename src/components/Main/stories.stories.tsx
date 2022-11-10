import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { control: { type: 'string' } },
    description: { control: 'string' }
  }
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
Basic.args = {}

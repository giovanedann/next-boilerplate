import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    // place your args types here (inputs of type color, radio, etc)
  }
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
Basic.args = {
  description: 'This is an example of description',
  title: 'This is an example of title'
}

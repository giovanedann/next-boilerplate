import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Storybook Basic Story title',
  description: 'Storybook Basic Story description'
}

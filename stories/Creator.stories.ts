
import type { Meta, StoryObj } from '@storybook/react';
import Creator from './Creator';

const meta: Meta<typeof Creator> = {
  title: 'Components/Creator',
  component: Creator,
  tags: ['autodocs'],
  argTypes: {
    
    backgroundColor: {
      control: 'color',
    },
  },
  
};

export default meta;

type Story = StoryObj<typeof Creator>;

export const Primary: Story = {
    args: {
        title: 'Write your homework for the day!',
        children: 'Save',
        lable: 'taskcreator',
        backgroundColor:'white'
    },
  };
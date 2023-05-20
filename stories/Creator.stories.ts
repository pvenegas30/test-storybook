
import type { Meta, StoryObj } from '@storybook/react';
import Creator from './Creator';

const meta: Meta<typeof Creator> = {
  title: 'Components/Creator',
  component: Creator,
  tags: ['autodocs']
  
};

export default meta;

type Story = StoryObj<typeof Creator>;

export const Primary: Story = {
    args: {
        title: 'Write your homework for the day!',
        children: 'Save',
        lable: 'taskcreator',
        background:'white',
        textcolor: 'black',
        inputcolor: '#aad5c0',
        buttoncolor: '#2cb72c'
    },
  };
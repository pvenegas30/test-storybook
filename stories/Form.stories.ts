import type { Meta, StoryObj } from '@storybook/react';
import Form from './Form';


const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Primary: Story = {
    args: {
      lable: 'Form',
      title: 'FORM',
      first: 'FIRST NAME', 
      last: 'LAST NAME', 
      mail: 'EMAIL', 
      tel: 'PHONE', 
      text: 'MESSAGE', 
      topic: 'SUBJECT'
    },
  };
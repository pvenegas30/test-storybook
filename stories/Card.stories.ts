
import Card from './Card';
import type { Meta, StoryObj } from '@storybook/react';
import './globals.css'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  
};

export default meta;
type Story = StoryObj<typeof Card>;

export const GreenCard: Story = {
  args: {
    title: "Hello World",

    showSub: false,
    background: "green-300",
    imgUrl:
      "https://images.unsplash.com/photo-1474843148229-3163319fcc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
  },
};

export const BlueCard: Story = {
  args: {
    title: "Hello World",
    showSub: true,
    background: "blue-300",
    imgUrl:
      "https://images.unsplash.com/photo-1474843148229-3163319fcc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
  },
};

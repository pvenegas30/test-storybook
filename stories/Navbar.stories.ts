import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';


const meta: Meta<typeof NavBar> = {
  title: 'Components/Navbar',
  component: NavBar,
  tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
    args: {
      lable: 'navbar',
      title: 'TITLE',
      about: 'About',
      contact: 'Contact',
      projects: 'Projects',
      blogs: 'Blogs',
      background: "black",
      textcolor: 'white'
    },
  };
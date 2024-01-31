/* eslint-disable react/function-component-definition */
import Button from '../../atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = (args) => <Button {...args} />;
Default.args = {
  children: 'Submit',
};

export const Link = (args) => <Button {...args} />;
Link.args = {
  children: 'Submit',
  href: '#',
};

/* eslint-disable react/function-component-definition */
import Button from '../../../components/blocks/Nav';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Blocks/Nav',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = (args) => <Button {...args} />;
Default.args = {
  brand: {
    label: 'B R A N D',
    href: '#',
  },
};

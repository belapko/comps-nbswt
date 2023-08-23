import type { Meta, StoryObj } from '@storybook/react';

import UnderlinedInput from '../components/underlined-input/underlined-input';

const meta = {
    title: 'Example/UnderlinedInput',
    component: UnderlinedInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
} satisfies Meta<typeof UnderlinedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        label: 'Перед инпутом',
        theme: 'dark',
        value: 'hello',
        onChange: () => {},
    },
};

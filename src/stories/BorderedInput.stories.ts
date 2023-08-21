import type { Meta, StoryObj } from '@storybook/react';

import BorderedInput from '../components/bordered-input/bordered-input';

const meta = {
    title: 'Example/BorderedInput',
    component: BorderedInput,
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
} satisfies Meta<typeof BorderedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        label: 'Светлая тема',
        theme: 'light',
        value: 'val to be changed',
        onChange: () => {},
    },
};

export const Dark: Story = {
    args: {
        label: 'Тёмная тема',
        theme: 'dark',
        value: 'val to be changed',
        onChange: () => {},
    },
};
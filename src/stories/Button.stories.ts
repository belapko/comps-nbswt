import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/button';

const meta = {
    title: 'Example/Button',
    component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Disabled: Story = {
    args: {
        text: 'disabled',
        disabled: true,
        theme: 'dark',
    },
};

export const Light: Story = {
    args: {
        text: 'Светлая кнопка',
        theme: 'light',
    },
};

export const Dark: Story = {
    args: {
        text: 'Тёмная кнопка',
        theme: 'dark',
    },
};
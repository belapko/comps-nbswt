import type { Meta, StoryObj } from '@storybook/react';

import Toggler from '../components/toggler/toggler';

const meta = {
    title: 'Example/Toggler',
    component: Toggler,
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
} satisfies Meta<typeof Toggler>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultLight: Story = {
    args: {
        id: '1',
        theme: 'light',
        checked: false,
    },
};

export const DefaultDark: Story = {
    args: {
        id: '2',
        theme: 'dark',
        checked: false,
    },
};

export const BothSideText: Story = {
    args: {
        id: '3',
        theme: 'dark',
        leftText: 'слева',
        rightText: 'справа',
        checked: false,
    },
};

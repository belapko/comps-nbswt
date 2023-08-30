import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Checkbox from '../components/checkbox/checkbox';

const meta = {
    title: 'Example/Checkbox',
    component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const CustomCheckbox = ({id}) => {
    const [checked, setChecked] = useState(false);

    return <Checkbox id={id} checked={checked} onChange={() => setChecked(!checked)}/>
};

export const DefaultDarkCheckbox : Story = {
    // args: {theme: 'dark', tabs: []},
    render: () => <CustomCheckbox id='1' />,
};

export const DefaultLightCheckbox : Story = {
    // args: {theme: 'dark', tabs: []},
    render: () => <CustomCheckbox id='2'/>,
};

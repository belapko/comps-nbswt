import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '../components/dropdown/dropdown';

const meta = {
    title: 'Example/Dropdown',
    component: Dropdown,
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const DarkDefaultDropdown: Story = {
    args: {
        list: [
                   {
                       _id: '1',
                       title: 'title 1',
                   },
                   {
                       _id: '2',
                       title: 'title 2',
                   },
                   {
                       _id: '3',
                       title: 'title 3',
                   },
              ],
        theme: 'dark',
        title: 'Выбрать что-то',
        chosen: {},
        setChosen: () => {},
    },
};

export const LightSearchDropdown: Story = {
    args: {
        list: [
                   {
                       _id: '1',
                       title: 'title 1',
                   },
                   {
                       _id: '2',
                       title: 'title 2',
                   },
                   {
                       _id: '3',
                       title: 'title 3',
                   },
              ],
        theme: 'light',
        title: 'Выбрать что-то',
        chosen: {},
        setChosen: () => {},
    },
};

export const DarkSearchAddDropdown: Story = {
    args: {
        list: [
                   {
                       _id: '1',
                       title: 'title 1',
                   },
                   {
                       _id: '2',
                       title: 'title 2',
                   },
                   {
                       _id: '3',
                       title: 'title 3',
                   },
              ],
        theme: 'dark',
        title: 'Выбрать что-то',
        chosen: {},
        setChosen: () => {},
    },
};
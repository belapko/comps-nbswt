import type {Meta, StoryObj} from '@storybook/react';

import ExtendedTabs from '../components/extended-tabs/extended-tabs';

const meta = {
    title: 'Example/ExtendedTabs',
    component: ExtendedTabs,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#222831',
                },
                {
                    name: 'light',
                    value: '#F9F7F7',
                },
            ],
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
} satisfies Meta<typeof ExtendedTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const ExtendedTabsExample = ({theme}) => {
    const tabs = [
        {
            name: 'test1',
            onClick: () => {},
        },
        {
            name: 'test2',
            onClick: () => console.log('Я вторая'),
        },
        {
            name: 'test3',
            onClick: () => {},
        },
    ]

    return <ExtendedTabs tabs={tabs} theme={theme}/>
};

export const DefaultDarkTabs : Story = {
    // args: {theme: 'dark', tabs: []},
    render: () => <ExtendedTabsExample theme='dark' />,
};

export const DefaultLightTabs : Story = {
    // args: {theme: 'dark', tabs: []},
    render: () => <ExtendedTabsExample theme='light'/>,
};
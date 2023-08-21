/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("../components/dropdown/dropdown").IDropdown>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DarkDefaultDropdown: Story;
export declare const LightSearchDropdown: Story;
export declare const DarkSearchAddDropdown: Story;

/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("../components/toggler/toggler").ISwitch>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultLight: Story;
export declare const DefaultDark: Story;
export declare const BothSideText: Story;

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Component } from './Component';
import { InfoIcon, PlusIcon } from '@primer/octicons-react';

const meta: Meta<typeof Component> = {
    component: Component,
    title: "Components/Component",
    parameters: {
        layout: "centered"
    },
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
    args: {
        content: "The content",
        Icon: InfoIcon
    }
}

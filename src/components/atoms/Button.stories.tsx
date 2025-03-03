import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { PlusIcon, ToolsIcon, TrashIcon } from '@primer/octicons-react';

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Components/Button",
    parameters: {
        layout : "centered"
    },
    argTypes: {
        label: {
            control: 'text'
        },
        size: {
            control: 'select',
            options: ["md", "sm", "lg"]
        },
        type: {
            control: 'select',
            options: ["primary", "secondary", "destructive", "link", "ghost"]
        },
        onClick: { control: 'object'}
    },
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        type: "primary",
        label: "Label",
        size: "md",
    }
}
export const PrimaryIcon: Story = {
    args: {
        type: "primary",
        label: "Label",
        size: "md",
        Icon: PlusIcon
    }
}
export const Destructive: Story = {
    args: {
        type: "destructive",
        label: "Supprimer",
        size: "md",
        Icon: TrashIcon
    }
}
export const Secondary: Story = {
    args: {
        type: "secondary",
        label: "Réglages",
        size: "md",
        Icon: ToolsIcon
    }
}
export const OnDark: Story = {
    // 👇 Story-level parameters
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
        type: "secondary",
        label: "Réglages",
        size: "md",
        Icon: ToolsIcon
    }
};

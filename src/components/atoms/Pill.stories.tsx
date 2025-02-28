import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import { InfoIcon, PillIcon, CacheIcon, CheckIcon, DotFillIcon, XIcon } from '@primer/octicons-react'

import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
    title: "Components/Pill",
    parameters: {
        layout: "padded"
    },
    component: Pill,
    argTypes: {
        content: {
            control: 'text'
        },
        style: {
            control: 'select',
            options: ["filled", "light", "stroke"]
        },
        type: {
            control: 'select',
            options: ["red", "amber", "blue", "green", "gray"]
        },
        Icon: {
            description: 'Icon component to display',
            control: { type: null }, // Disable control for component props
            table: {
                type: { summary: 'React.ComponentType<IconProps>' },
            },
        },
        // Other argTypes...
    },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const BluePill: Story = {
    args: {
        content: "En cours d'éxécution",
        type: "blue",
        style: "light",
        Icon: DotFillIcon
    }
}
export const GreenPill: Story = {
    args: {
        content: "Actif",
        type: "green",
        style: "stroke",
        Icon: CheckIcon
    }
}
export const RedPill: Story = {
    args: {
        content: "Erreur",
        type: "red",
        style: "filled",
        Icon: XIcon
    }
}
export const GrayPill: Story = {
    args: {
        content: "Default",
    }
}

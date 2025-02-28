import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import {InfoIcon, AlertIcon, CacheIcon, CheckIcon} from '@primer/octicons-react'

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
    title: "Components/Alert",
    parameters: {
        layout : "padded"
    },
    component: Alert,
    argTypes: {
        title: {
            control: 'text'
        },
        content: {
            control: 'text'
        },
        type: {
            control: 'select',
            options: ["info", "warning", "alert", "success"]
        },
        Icon: {
            description: 'Icon component to display',
            control: { type: null }, // Disable control for component props
            table: {
                type: { summary: 'React.ComponentType<IconProps>' },
            },
        },
        action: {
            control: "text"
        }
        // Other argTypes...
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
    args: {
        title: "Votre nom",
        content: "Vous pouvez retrouver votre nom sur votre carte d'identité",
        Icon: InfoIcon
    }
}
export const Warning: Story = {
    args: {
        title: "Limite bientôt atteinte",
        type: "warning",
        content: "Votre base de données est à 95% d'utilisation",
        Icon: CacheIcon
    }
}
export const CautionAndAction: Story = {
    title: "Caution and action",
    args: {
        title: "Votre abonnement est terminé",
        type: "alert",
        action: "Renouveller l'abonnement",
        content: "Votre abonnement est terminé depuis le 18 mars 2024",
        Icon: AlertIcon
    }
}
export const Success: Story = {
    title: "Success",
    args: {
        content: "Compte créé",
        type: "success",
        Icon: CheckIcon
    }
}

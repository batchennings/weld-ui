import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from './Button';
import { TrashIcon, PencilIcon, CopyIcon, DownloadIcon } from '@primer/octicons-react';

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: "Components/Dropdown",
    parameters: {
        layout: "centered"
    },
    argTypes: {
        trigger: {
            description: 'React component or element to use as the dropdown trigger',
            control: { type: null },
        },
        items: {
            description: 'Array of dropdown items to display',
            control: { type: 'object' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const WithButtonTrigger: Story = {
    args: {
        trigger: <Button label="Actions" type="secondary" size="md" />,
        items: [
            {
                type: 'item',
                label: 'Edit',
                description: 'Make changes to this item',
                Icon: PencilIcon,
                onSelect: () => console.log('Edit clicked'),
            },
            {
                type: 'item',
                label: 'Duplicate',
                Icon: CopyIcon,
                onSelect: () => console.log('Duplicate clicked'),
            },
            {
                type: 'separator',
            },
            {
                type: 'item',
                label: 'Download',
                shortcut: '⌘D',
                Icon: DownloadIcon,
                onSelect: () => console.log('Download clicked'),
            },
            {
                type: 'separator',
            },
            {
                type: 'item',
                label: 'Delete',
                Icon: TrashIcon,
                destructive: true,
                onSelect: () => console.log('Delete clicked'),
            },
        ],
    },
};

export const WithPrimaryButton: Story = {
    args: {
        trigger: <Button label="Menu" type="primary" size="lg" />,
        items: [
            {
                type: 'item',
                label: 'New File',
                shortcut: '⌘N',
                onSelect: () => console.log('New File'),
            },
            {
                type: 'item',
                label: 'Open',
                shortcut: '⌘O',
                onSelect: () => console.log('Open'),
            },
            {
                type: 'separator',
            },
            {
                type: 'item',
                label: 'Save',
                shortcut: '⌘S',
                onSelect: () => console.log('Save'),
            },
        ],
    },
};

export const WithCustomTrigger: Story = {
    args: {
        trigger: (
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Custom Trigger
            </button>
        ),
        items: [
            {
                type: 'item',
                label: 'Option 1',
                onSelect: () => console.log('Option 1'),
            },
            {
                type: 'item',
                label: 'Option 2',
                onSelect: () => console.log('Option 2'),
            },
        ],
    },
};

export const WithDisabledItems: Story = {
    args: {
        trigger: <Button label="Options" type="secondary" size="md" />,
        items: [
            {
                type: 'item',
                label: 'Available',
                onSelect: () => console.log('Available'),
            },
            {
                type: 'item',
                label: 'Disabled Item',
                disabled: true,
                onSelect: () => console.log('This should not fire'),
            },
            {
                type: 'separator',
            },
            {
                type: 'item',
                label: 'Another Available',
                onSelect: () => console.log('Another Available'),
            },
        ],
    },
};

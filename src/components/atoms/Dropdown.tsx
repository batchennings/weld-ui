import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { DropdownMenu as DropdownPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ListItem } from "./ListItem";

const contentVariants = cva(
    [
        "bg-base-bg-color-regular rounded-md border border-list-border-color py-1 min-w-40",
        "shadow-sm",
    ]
);

const itemVariants = cva(
    [
        "flex items-center justify-between w-full gap-3 px-3 py-2",
        "text-base-text-color-primary",
        "outline-none",
        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        "data-[highlighted]:bg-list-row-bg-color-hover",
    ],
    {
        variants: {
            tone: {
                default: "",
                destructive: "text-button-text-color-destructive",
            },
        },
        defaultVariants: {
            tone: "default",
        },
    }
);

export type DropdownItem = {
    type?: 'item' | 'separator';
    label?: string;
    description?: string;
    shortcut?: string;
    Icon?: React.ComponentType<{ size?: number; className?: string }>;
    disabled?: boolean;
    destructive?: boolean;
    onSelect?: () => void;
};

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> &
     {
        triggerLabel?: string;
        triggerElement?: React.ReactNode;
        items: DropdownItem[];
    };

const Dropdown: React.FunctionComponent<DropdownProps> = ({
    className,
    triggerLabel,
    triggerElement,
    items,
    ...props
}) => {
    return (
        <DropdownPrimitive.Root>
            {triggerElement ? (
                <DropdownPrimitive.Trigger asChild>
                    <Button label={triggerLabel} type="secondary" size="md" />
                </DropdownPrimitive.Trigger>
            ) : (
                <DropdownPrimitive.Trigger className={cn( className)}>
                    <Button label={triggerLabel} type="secondary" size="md" />
                </DropdownPrimitive.Trigger>
            )}
            <DropdownPrimitive.Portal>
                <DropdownPrimitive.Content className={contentVariants()} sideOffset={6} align="start">
                    {items.map((it, idx) => {
                        if (it.type === 'separator') {
                            return <DropdownPrimitive.Separator key={`sep-${idx}`} className="h-px my-1 bg-list-border-color" />
                        }
                        return (
                            <DropdownPrimitive.Item
                                key={`item-${idx}`}
                                onSelect={it.onSelect}
                                disabled={it.disabled}
                                asChild
                            >
                                <ListItem
                                    label={it.label}
                                    description={it.description}
                                    shortcut={it.shortcut}
                                    Icon={it.Icon}
                                    disabled={it.disabled}
                                    destructive={it.destructive}
                                    onSelect={it.onSelect}
                                    variant="dropdown"
                                />
                            </DropdownPrimitive.Item>
                        )
                    })}
                </DropdownPrimitive.Content>
            </DropdownPrimitive.Portal>
        </DropdownPrimitive.Root>
    );
};

Dropdown.displayName = 'Dropdown';
export { Dropdown };



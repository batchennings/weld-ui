import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { DropdownMenu as DropdownPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const triggerVariants = cva(
    [
        "transition ease-out duration-300 disabled:cursor-not-allowed",
        "border border-form-border-color rounded-md inline-flex justify-between items-center px-3 h-8",
        "bg-none text-button-text-color-outline",
        "hover:border-button-border-color-outline-hover hover:text-button-border-color-outline-hover",
        "disabled:border-button-border-color-outline-disabled disabled:text-button-text-color-outline-disabled",
        "focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)]",
    ],
    {
        variants: {
            size: {
                sm: "text-sm gap-1 h-6 px-2",
                md: "text-base gap-2 h-8 px-3",
                lg: "text-lg gap-2 h-10 px-4",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

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
    shortcut?: string;
    Icon?: React.ComponentType<{ size?: number; className?: string }>;
    disabled?: boolean;
    destructive?: boolean;
    onSelect?: () => void;
};

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof triggerVariants> & {
        triggerLabel?: string;
        triggerElement?: React.ReactNode;
        items: DropdownItem[];
    };

const Dropdown: React.FunctionComponent<DropdownProps> = ({
    className,
    triggerLabel,
    triggerElement,
    items,
    size,
    ...props
}) => {
    return (
        <DropdownPrimitive.Root>
            {triggerElement ? (
                <DropdownPrimitive.Trigger asChild>
                    {triggerElement}
                </DropdownPrimitive.Trigger>
            ) : (
                <DropdownPrimitive.Trigger className={cn(triggerVariants({ size }), className)}>
                    {triggerLabel}
                </DropdownPrimitive.Trigger>
            )}
            <DropdownPrimitive.Portal>
                <DropdownPrimitive.Content className={contentVariants()} sideOffset={6} align="start">
                    {items.map((it, idx) => {
                        if (it.type === 'separator') {
                            return <DropdownPrimitive.Separator key={`sep-${idx}`} className="h-px my-1 bg-list-border-color" />
                        }
                        const Tone = it.destructive ? 'destructive' : 'default';
                        return (
                            <DropdownPrimitive.Item
                                key={`item-${idx}`}
                                className={itemVariants({ tone: Tone })}
                                onSelect={it.onSelect}
                                disabled={it.disabled}
                            >
                                <span className="flex items-center gap-2">
                                    {it.Icon ? <it.Icon size={16} className="text-base-icon-color-secondary" /> : null}
                                    <span>{it.label}</span>
                                </span>
                                {it.shortcut ? (
                                    <span className="text-xs text-base-text-color-secondary">
                                        {it.shortcut}
                                    </span>
                                ) : null}
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



import { cva, type VariantProps } from "class-variance-authority";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const tabsVariants = cva(
    [
        "flex border-b border-form-border-color",
    ],
    {
        variants: {
            size: {
                sm: "gap-1",
                md: "gap-2",
                lg: "gap-3",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const tabVariants = cva(
    [
        "px-3 py-2 text-sm font-medium border-b-2 border-transparent",
        "transition-colors duration-200",
        "hover:text-base-text-color-primary",
        "focus:outline-none focus:ring-2 focus:ring-base-accent-400 focus:ring-offset-2",
    ],
    {
        variants: {
            state: {
                active: "text-base-text-color-primary border-base-accent-400",
                inactive: "text-base-text-color-secondary hover:border-base-text-color-muted",
                disabled: "text-base-text-color-muted cursor-not-allowed hover:text-base-text-color-muted",
            },
        },
        defaultVariants: {
            state: "inactive",
        },
    }
);

export type TabItem = {
    id: string;
    label: string;
    disabled?: boolean;
    content?: React.ReactNode;
};

export type TabsProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof tabsVariants> & {
        items: TabItem[];
        defaultValue?: string;
        value?: string;
        onValueChange?: (value: string) => void;
        orientation?: "horizontal" | "vertical";
    };

const Tabs: React.FunctionComponent<TabsProps> = ({
    items,
    defaultValue,
    value,
    onValueChange,
    orientation = "horizontal",
    size,
    className,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.id || "");
    const currentValue = value !== undefined ? value : internalValue;

    const handleTabClick = (tabId: string) => {
        if (onValueChange) {
            onValueChange(tabId);
        } else {
            setInternalValue(tabId);
        }
    };

    const currentTab = items.find(item => item.id === currentValue);

    return (
        <div className={cn("w-full", className)} {...props}>
            <div className={cn(tabsVariants({ size }), orientation === "vertical" && "flex-col border-b-0 border-r")}>
                {items.map((item) => {
                    const isActive = item.id === currentValue;
                    const state = item.disabled ? 'disabled' : isActive ? 'active' : 'inactive';

                    return (
                        <button
                            key={item.id}
                            className={cn(tabVariants({ state }))}
                            onClick={() => !item.disabled && handleTabClick(item.id)}
                            disabled={item.disabled}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`tabpanel-${item.id}`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>

            {currentTab?.content && (
                <div
                    id={`tabpanel-${currentTab.id}`}
                    role="tabpanel"
                    className="mt-4"
                >
                    {currentTab.content}
                </div>
            )}
        </div>
    );
};

Tabs.displayName = 'Tabs';
export { Tabs };

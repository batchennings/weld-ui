import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { cn } from "@/lib/utils";
import { CheckIcon } from '@primer/octicons-react';

const listItemVariants = cva(
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
            variant: {
                dropdown: "",
                select: "flex flex-row justify-between",
            },
        },
        defaultVariants: {
            tone: "default",
            variant: "dropdown",
        },
    }
);

export type ListItemProps = React.HTMLAttributes<HTMLDivElement> & 
    VariantProps<typeof listItemVariants> & {
        label?: string;
        description?: string;
        shortcut?: string;
        Icon?: React.ComponentType<{ size?: number; className?: string }>;
        disabled?: boolean;
        destructive?: boolean;
        onSelect?: () => void;
        value?: string;
        showIndicator?: boolean;
        children?: React.ReactNode;
    };
const ListItem: React.FunctionComponent<ListItemProps> = ({
    label,
    description,
    shortcut,
    Icon,
    disabled,
    destructive,
    onSelect,
    value,
    showIndicator = false,
    children,
    variant,
    tone,
    className,
    ...props
}) => {
    const finalTone = destructive ? 'destructive' : tone;
    
    return (
        <div
            className={cn(listItemVariants({ tone: finalTone, variant }), className)}
            onClick={onSelect}
            data-disabled={disabled}
            {...props}
        >
            <div className="flex items-center gap-2">
                {Icon && <Icon size={16} className="text-base-icon-color-secondary" />}
                {children || label}
                {description && (
                    <div className="text-sm text-base-text-color-secondary">
                        {description}
                    </div>
                )}
            </div>
            
            {shortcut && (
                <span className="text-xs text-base-text-color-secondary">
                    {shortcut}
                </span>
            )}
            
            {showIndicator && (
                <div className="SelectItemIndicator">
                    <CheckIcon />
                </div>
            )}
        </div>
    );
};

ListItem.displayName = 'ListItem';
export { ListItem };

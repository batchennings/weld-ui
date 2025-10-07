import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from 'react';
import { IconProps } from '@/types/icons'
import { log } from "console";

const buttonVariants = cva("button transition justify-start items-center rounded-md inline-flex flex-nowrap flex-row w-auto transition ease-out duration-300 disabled:cursor-not-allowed", {
    variants: {
        type: {
            primary: [
                "bg-button-bg-color-filled",
                "text-button-text-color-filled",
                "border-transparent",
                "hover:bg-button-bg-color-filled-hover",
                "disabled:bg-button-bg-color-filled-disabled",
                "disabled:text-button-text-color-filled-disabled",
                "focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)]",
            ],
            secondary: [
                "bg-none",
                "text-button-text-color-outline",
                "border-button-border-color-outline",
                "border",
                "text-button-text-color-outline",
                "hover:border-button-border-color-outline-hover",
                "hover:text-button-border-color-outline-hover",
                "disabled:border-button-border-color-outline-disabled",
                "disabled:text-button-text-color-outline-disabled",
                "focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)]",
            ],
            destructive: [
                "bg-button-bg-color-destructive",
                "text-button-text-color-destructive",
                "border-transparent",
                "hover:bg-button-bg-color-destructive-hover",
                "disabled:bg-button-bg-color-destructive-disabled",
                "disabled:text-button-text-color-destructive-disabled",
                "focus:shadow-[0_0_0_4px_rgba(239,68,68,0.25)]",
            ],
            ghost: [
                "bg-button-bg-color-outline",
                "border",
                "border-button-border-color-outline/0",
                "text-button-text-color-outline",
                "hover:border",
                "hover:border-button-border-color-outline-hover",
                "hover:text-button-border-color-outline-hover",
                "disabled:border-button-border-color-outline-disabled",
                "disabled:text-button-text-color-outline-disabled",
                "focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)]",
            ],
            link: [
                "focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)]",
            ],
        },
        size: {
            sm: ["text-sm", "px-2", "gap-1", "h-6"],
            md: ["text-base", "px-3", "gap-2", "h-8"],
            lg: ["text-lg", "px-4", "gap-2", "h-10"],
        },
    },
    compoundVariants: [
        {
            type: "link",
            size: "md",
            className: "px-0.5 text-button-text-color-link hover:text-button-text-color-link-hover"
        }
    ],
    defaultVariants: {
        type: "primary",
        size: "md",
    },
});

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    label?: string;
    Icon?: React.ComponentType<IconProps>;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label, Icon, onClick, type, size, ...rest }) => {
    return (
        <button {...rest} className={buttonVariants({ type, size })} onClick={onClick}>
            {Icon && <Icon />}
            {label}
        </button>
    )
}


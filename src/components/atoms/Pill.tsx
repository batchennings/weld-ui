import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { IconProps } from '@/types/icons';
const pillVariants = cva('rounded-full justify-start items-center inline-flex text-sm',
    {
        variants: {
            type: {
                red: "",
                green: "",
                amber: "",
                blue: "",
                gray: "",
            },
            style: {
                light: "",
                filled: "",
                stroke: "",
            },
            size: {
                md: "px-2 gap-1.5 h-6",
                sm: "px-1.5 gap-1 h-5",
            }
        },
        compoundVariants: [
            {
                style: "filled", type: "red",
                className: "text-pill-text-color-filled-red bg-pill-bg-color-filled-red"
            },
            {
                style: "light", type: "red",
                className: "text-pill-text-color-light-red bg-pill-bg-color-light-red"
            },
            {
                style: "stroke", type: "red",
                className: "text-pill-text-color-stroke-red bg-pill-bg-color-stroke-red border border-pill-border-color-stroke-red"
            },
            {
                style: "filled", type: "green",
                className: "text-pill-text-color-filled-green bg-pill-bg-color-filled-green"
            },
            {
                style: "light", type: "green",
                className: "text-pill-text-color-light-green bg-pill-bg-color-light-green"
            },
            {
                style: "stroke", type: "green",
                className: "text-pill-text-color-stroke-green bg-pill-bg-color-stroke-green border border-pill-border-color-stroke-green"
            },
            {
                style: "filled", type: "amber",
                className: "text-pill-text-color-filled-amber bg-pill-bg-color-filled-amber"
            },
            {
                style: "light", type: "amber",
                className: "text-pill-text-color-light-amber bg-pill-bg-color-light-amber"
            },
            {
                style: "stroke", type: "amber",
                className: "text-pill-text-color-stroke-amber bg-pill-bg-color-stroke-amber border border-pill-border-color-stroke-amber"
            },
            {
                style: "filled", type: "blue",
                className: "text-pill-text-color-filled-blue bg-pill-bg-color-filled-blue"
            },
            {
                style: "light", type: "blue",
                className: "text-pill-text-color-light-blue bg-pill-bg-color-light-blue"
            },
            {
                style: "stroke", type: "blue",
                className: "text-pill-text-color-stroke-blue bg-pill-bg-color-stroke-blue border border-pill-border-color-stroke-blue"
            },
            {
                style: "filled", type: "gray",
                className: "text-pill-text-color-filled-gray bg-pill-bg-color-filled-gray"
            },
            {
                style: "light", type: "gray",
                className: "text-pill-text-color-light-gray bg-pill-bg-color-light-gray"
            },
            {
                style: "stroke", type: "gray",
                className: "text-pill-text-color-stroke-gray bg-pill-bg-color-stroke-gray border border-pill-border-color-stroke-gray"
            },
        ],
        defaultVariants: {
            style: 'light',
            type: "gray",
            size: "md"
        },
    },
);

export type PillProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof pillVariants> & {
        type: string;
        Icon?: React.ComponentType<IconProps>
        style: string;
        size: string;
        content: string;
    };


const Pill: React.FunctionComponent<PillProps> =
    ({ className, type, style, Icon, title, size, content, ...props }, ref) => (
        <div
            role="alert"
            className={cn(pillVariants({ type, style, size }), className, "")}
        {...props}
    >
        {Icon ? <div className=""><Icon size={12} /></div> : null}
        <p>{content}</p>
    </div>
)
Pill.displayName = 'Pill';
export { Pill };

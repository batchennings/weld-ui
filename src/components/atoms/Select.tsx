import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Select as SelectPrimitive } from "radix-ui";
import { ChevronDownIcon, CheckIcon, InfoIcon, AlertIcon, DotFillIcon, SearchIcon, XIcon } from '@primer/octicons-react'
import { cn } from "@/lib/utils";
import { SelectItemProps } from "@radix-ui/react-select";
import { IconProps } from "@/types/icons";

const SelectVariants = cva(
    [
        "transition ease-out duration-300 disabled:cursor-not-allowed",
        "border border-form-border-color rounded-md inline-flex justify-between items-center w-64",
        "bg-none",
        "text-button-text-color-outline",
        "border-button-border-color-outline",
        "border",
        "text-button-text-color-outline",
        "hover:border-button-border-color-outline-hover",
        "hover:text-button-border-color-outline-hover",
        "disabled:border-button-border-color-outline-disabled",
        "disabled:text-button-text-color-outline-disabled",
        "focus:shadow-[0_0_0_4px_#bfdbfe]",
    ], {
    variants: {
        size: {
            sm: ["text-sm", "px-2", "gap-1", "h-6"],
            md: ["text-base", "px-3", "gap-2", "h-8"],
            lg: ["text-lg", "px-4", "gap-2", "h-10"],
        },
    }
})
export type SelectProps = VariantProps<typeof SelectVariants> & {
    content: string;
    placeholder: string;
    options: object;
};
export const Select: React.FunctionComponent<SelectProps> = ({ content, size, placeholder, options, children, ...rest }) => {
    return (
        <SelectPrimitive.Root>
            <SelectPrimitive.Trigger aria-label="Food" className={SelectVariants({ size })}>
                <SelectPrimitive.Value className="text-base-accent-400" placeholder={placeholder} >{children}</SelectPrimitive.Value>
                <SelectPrimitive.Icon >
                    <ChevronDownIcon />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content className="bg-base-bg-color-regular rounded-md border border-list-border-color w-64" position="popper" align="center">
                    <SelectPrimitive.Viewport>
                        <SelectPrimitive.Group>
                            {options.map(option => (
                                <>
                                    <SelectItem key={option.value} value={option.value} details={option.details} detailsPosition="newline">{option.value}</SelectItem>
                                </>
                            ))}
                        </SelectPrimitive.Group>
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

    )
}
export type SelectItemProps = React.HTMLAttributes<HTMLButtonElement> & {
    value: string;
    details?: string;
    detailsPosition?: "newline" | "inlineAfter" | "inlineBefore";
    pillValue?: string;
}

const SelectItem: React.FunctionComponent<SelectItemProps> =
    ({ children, className, value, details, detailsPosition = "newline", ...props }) => {
        return (
            <SelectPrimitive.Item
                className={cn("SelectItem flex flex-row px-3 py-2 justify-between", className)}
                {...props}
                value={value}
            >
                <div className="flex flex-col">
                    <SelectPrimitive.ItemText className="flex flex-col">{children}</SelectPrimitive.ItemText>
                    {details && <div className="text-sm text-base-text-color-secondary">{details}</div>}
                </div>
                <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
        )
    }
//const SelectItem = React.forwardRef<SelectItemProps>(({ value, children, ...rest }, ref) => {
//    <SelectPrimitive.Item value={value} className="" ref={ref}>
//        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//        <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
//            <CheckIcon />
//        </SelectPrimitive.ItemIndicator>
//    </SelectPrimitive.Item>
//}
//)

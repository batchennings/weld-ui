import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Select as SelectPrimitive } from "radix-ui";
import { ChevronDownIcon, CheckIcon, InfoIcon, AlertIcon, DotFillIcon, SearchIcon, XIcon } from '@primer/octicons-react'
import { cn } from "@/lib/utils";
import { SelectItemProps } from "@radix-ui/react-select";

const SelectVariants = cva("border border-form-border-color rounded-md flex flex-row justify-start items-center", {
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
};
export const Select = React.forwardRef<SelectProps> (({ content, size, placeholder, children, ...rest }, ref) => {
    return (
        <SelectPrimitive.Root>
            <SelectPrimitive.Trigger aria-label="Food" className={SelectVariants({size})}>
                <SelectPrimitive.Value className="text-base-accent-400" placeholder={placeholder}/>
                <SelectPrimitive.Icon >
                    <ChevronDownIcon />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content className="top-30 relative">
                    <SelectPrimitive.Viewport>
                        <SelectPrimitive.Group>
                            <SelectItem value="avion" details="Un truc qui vole">Avion</SelectItem>
                            <SelectItem value="voiture" details="Un truc qui roule">Voiture</SelectItem>
                        </SelectPrimitive.Group>
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

    )
})
export type SelectItemProps = {
    value: string;
    details?: string;
}

const SelectItem = React.forwardRef<SelectItemProps>(
    ({ children, className, value, details, ...props }, ref) => {
        return (
            <SelectPrimitive.Item
                className={cn("SelectItem flex flex-row", className)}
                {...props}
                ref={ref}
                value={value}
            >
                <SelectPrimitive.ItemText className="flex flex-grow">{children}{details && details}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
        )
    },
);
//const SelectItem = React.forwardRef<SelectItemProps>(({ value, children, ...rest }, ref) => {
//    <SelectPrimitive.Item value={value} className="" ref={ref}>
//        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//        <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
//            <CheckIcon />
//        </SelectPrimitive.ItemIndicator>
//    </SelectPrimitive.Item>
//}
//)

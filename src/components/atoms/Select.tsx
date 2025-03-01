import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Select as SelectPrimitive } from "radix-ui";
import { ChevronDownIcon, CheckIcon, InfoIcon, AlertIcon, DotFillIcon, SearchIcon, XIcon } from '@primer/octicons-react'
import { cn } from "@/lib/utils";
import { SelectItemProps } from "@radix-ui/react-select";
import { warn } from "console";

export type SelectProps = {
    content: string;
};

export const Select: React.FunctionComponent<SelectProps> = ({ content, ...rest }) => {
    return (
        <SelectPrimitive.Root>
            <SelectPrimitive.Trigger className="border p-4 flex flex-row w-40 gap-8" aria-label="Food">
                <SelectPrimitive.Value className="flex-grow" placeholder="Select a fruit…" />
                <SelectPrimitive.Icon >
                    <ChevronDownIcon />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content>
                    <SelectPrimitive.Viewport>
                        <SelectPrimitive.Group>
                            <SelectItem value="Avrion" details="Un truc qui vole">Avion</SelectItem>
                            <SelectItem value="Voiture" details="Un truc qui roule">Voiture</SelectItem>
                        </SelectPrimitive.Group>
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

    );
};
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

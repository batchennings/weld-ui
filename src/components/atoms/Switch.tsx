import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Switch as SwitchPrimitive } from "radix-ui";
import { Label } from "@/components/atoms/Label";

const SwitchVariants = cva(
    [
        "relative h-5 w-8 cursor-default rounded-full outline-none bg-switch-bg-color data-[state=checked]:bg-switch-bg-color-active transition",
        "focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)]",
    ], {
    variants: {
        size: {
            sm: [],
            md: [],
            lg: [],
        },
    }
})
export type SwitchProps = React.HTMLAttributes<HTMLFormElement> & VariantProps<typeof SwitchVariants> & {
    label?: string;
    description?: string;
};
export const Switch: React.FunctionComponent<SwitchProps> = ({ id, label, description, onCheckedChange, ...props }) => {
    return (
        <div className="flex flex-row gap-3">
            <SwitchPrimitive.Root className={SwitchVariants()} id={id} onCheckedChange={onCheckedChange}>
                <SwitchPrimitive.Thumb className="SwitchThumb block size-3.5 translate-x-1 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-3.5" />
            </SwitchPrimitive.Root>
            <div className="flex flex-col">
                <Label htmlFor={id}>{label}</Label>
                <div className="text-base-text-color-secondary">{description}</div>
            </div>
        </div>
    )
}

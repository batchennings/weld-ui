import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Label } from "./Label";
import { Switch } from "./Switch";

const SwitchGroupVariants = cva(
    [
        "flex flex-row gap-4 items-center"
    ], {
        variants: {
            size: {
                sm: [],
                md: [],
                lg: [],
            },
        }
    })
export type SwitchGroupProps = React.ComponentPropsWithoutRef & VariantProps<typeof SwitchGroupVariants> & {
    label?: string;
    description?: string;
};
export const SwitchGroup: React.FunctionComponent<SwitchGroupProps> = ({ label, description, onCheckedChange }) => {
    return (
        <form className={SwitchGroupVariants()}>
            <Switch id="darkModeSelector" onCheckedChange={onCheckedChange}/>
            <Label htmlFor="darkModeSelector" description={description}>{label}</Label>
        </form>
    )
}

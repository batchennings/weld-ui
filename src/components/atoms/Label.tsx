import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Label as LabelPrimitive } from "radix-ui";

const LabelVariants = cva(
    [
        "flex flex-col text-base-text-color-primary text-base"
    ], {
    variants: {
        size: {
            sm: [],
            md: [],
            lg: [],
        },
    }
})
export type LabelProps = React.HTMLAttributes<HTMLFormElement> & VariantProps<typeof LabelVariants> & {
    htmlFor?: string;
};
export const Label: React.FunctionComponent<LabelProps> = ({ htmlFor, description, children }) => {
    return (
        <LabelPrimitive.Root htmlFor={htmlFor} className={LabelVariants()} >
            {children}
        </LabelPrimitive.Root>
    )
}

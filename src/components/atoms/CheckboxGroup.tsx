import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { Label } from "@/components/atoms/Label";
import { cn } from "@/lib/utils";

const checkboxRootVariants = cva(
    [
        "flex flex-row gap-3 items-start",
    ],
    {
        variants: {
            size: {
                sm: "",
                md: "",
                lg: "",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const checkboxBoxVariants = cva(
    [
        "flex items-center justify-center rounded-[4px] border border-form-border-color bg-form-bg-color",
        "data-[state=checked]:bg-button-bg-color-filled data-[state=checked]:border-button-bg-color-filled",
        "transition focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)] outline-none",
    ],
    {
        variants: {
            size: {
                sm: "size-3",
                md: "size-4",
                lg: "size-5",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export type CheckboxGroupProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof checkboxBoxVariants> & {
        id?: string;
        label?: string;
        description?: string;
        checked?: boolean;
        defaultChecked?: boolean;
        disabled?: boolean;
        onCheckedChange?: (checked: boolean) => void;
    };

const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = ({
    id,
    className,
    label,
    description,
    checked,
    defaultChecked,
    disabled,
    onCheckedChange,
    size,
    ...props
}) => {
    return (
        <div className={cn(checkboxRootVariants({ size }), className)} {...props}>
            <CheckboxPrimitive.Root
                id={id}
                disabled={disabled}
                checked={checked}
                defaultChecked={defaultChecked}
                onCheckedChange={onCheckedChange}
                className={checkboxBoxVariants({ size, disabled })}
            >
                <CheckboxPrimitive.Indicator>
                    <svg viewBox="0 0 24 24" className="text-white fill-current" width="16" height="16" aria-hidden="true">
                        <path d="M20.285 6.709a1 1 0 010 1.414l-9.193 9.193a1 1 0 01-1.414 0L3.715 11.55a1 1 0 111.414-1.414l5.257 5.257 8.486-8.486a1 1 0 011.414 0z"/>
                    </svg>
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            <div className="flex flex-col">
                {label && (
                    <Label htmlFor={id}>{label}</Label>
                )}
                {description && (
                    <div className={cn("text-base-text-color-secondary text-sm", { 'text-base-text-color-muted': disabled })}>{description}</div>
                )}
            </div>
        </div>
    );
};

CheckboxGroup.displayName = 'CheckboxGroup';
export { CheckboxGroup };



import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { Label } from "@/components/atoms/Label";

const radioRootVariants = cva(
    [
        "flex flex-col gap-2",
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

const radioItemVariants = cva(
    [
        "relative flex items-center justify-center rounded-full border border-form-border-color bg-form-bg-color",
        "transition focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)] outline-none",
        "data-[state=checked]:bg-form-checkbox-bg-color-active",
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

const radioIndicatorVariants = cva(
    [
        "after:content-[''] after:block after:rounded-full after:bg-white",
    ],
    {
        variants: {
            size: {
                sm: "after:size-1",
                md: "after:size-1.5",
                lg: "after:size-2.5",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export type RadioOption = {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
};

export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof radioItemVariants> & {
        id?: string;
        label?: string;
        description?: string;
        options: RadioOption[];
        value?: string;
        defaultValue?: string;
        onValueChange?: (value: string) => void;
        disabled?: boolean;
    };

const RadioGroup: React.FunctionComponent<RadioGroupProps> = ({
    id,
    className,
    label,
    description,
    options,
    value,
    defaultValue,
    onValueChange,
    size,
    disabled,
    ...props
}) => {
    return (
        <div className={cn(radioRootVariants({ size }), className)} {...props}>
            {label && <Label htmlFor={id}>{label}</Label>}
            {description && <div className="text-base-text-color-secondary text-sm">{description}</div>}
            <RadioGroupPrimitive.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
                <div className="flex flex-col gap-2">
                    {options.map((opt) => (
                        <label key={opt.value} className={cn("flex items-start gap-2 cursor-pointer", { 'cursor-not-allowed': opt.disabled })}>
                            <RadioGroupPrimitive.Item className={radioItemVariants({ size, disabled: opt.disabled || disabled })} value={opt.value} disabled={opt.disabled || disabled}>
                                <RadioGroupPrimitive.Indicator className={radioIndicatorVariants({ size })} />
                            </RadioGroupPrimitive.Item>
                            <div className="flex flex-col -mt-0.5">
                                <span className={cn("text-base-text-color-primary text-base", { 'text-base-text-color-muted': opt.disabled || disabled })}>{opt.label}</span>
                                {opt.description && <span className={cn("text-sm text-base-text-color-secondary", { 'text-base-text-color-muted': opt.disabled || disabled })}>{opt.description}</span>}
                            </div>
                        </label>
                    ))}
                </div>
            </RadioGroupPrimitive.Root>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';
export { RadioGroup };



import * as React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { IconProps } from '@/types/icons'
import { Label } from '@/components/atoms/Label';

const inputVariants = cva(
    'px-2.5 bg-form-bg-color rounded-md focus:shadow-[0_0_0_4px_rgba(37,99,235,0.25)] focus:border-form-border-color-focus border disabled:cursor-not-allowed border-form-border-color justify-start items-center gap-2 inline-flex focus:outline-none disabled:bg-form-bg-color-disabled text-base text-base-text-color-primary transition ease-out w-full',
    {
        variants: {
            variant: {
                default: '',
            },
            disabled: {
                true: "text-table-text-color-secondary"
            },
            isError: {
                true: "",
                false: "",
            },
            size: {
                sm: 'p-2 h-6',
                md: 'p-2.5 h-8',
                lg: 'p-3.5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    },
);

export type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> &
VariantProps<typeof inputVariants> & {
    IconHeading?: React.ComponentType<IconProps>;
    IconTrailing?: React.ComponentType<IconProps>;
    actionAssociated?: React.ReactNode;
    actionAssociatedOnClick?: () => void;
    maxLength?: number;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    size?: string;
    length?: string;
    shortcut?: string;
    label?: string;
    isError?: string;
    description?: string;
};
const InputText: React.FunctionComponent<InputTextProps> = ({
    className,
    variant,
    id,
    type,
    isError,
    IconHeading,
    IconTrailing,
    actionAssociated,
    actionAssociatedOnClick,
    maxLength,
    length,
    size,
    shortcut,
    label,
    description,
    onInput,
    ...props
}) => {
    return (
        <div className={cn(
            "flex-col justify-start items-start gap-1 inline-flex",
            {
                'w-full' : (length == 'full'),
                'w-100' : (length == 'xl'),
                'w-75' : (length == 'lg'),
                'w-25' : (length == 'sm'),
                'w-10' : (length == 'xs'),
                'w-50' : (length == 'md'),
            }
        )}
        >

            {label && (
                <Label htmlFor={id} className={cn(
                    {
                        'text-base-text-color-muted' : props.disabled
                    }
                )}>{label}</Label>
            )}
            <div className="flex items-center gap-2 relative w-full">
                {IconHeading && (
                    <div className="absolute left-0 pl-2">
                        <IconHeading size={18} className="text-base-icon-color-secondary" />
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        inputVariants({ variant, size }),
                        className,
                        {
                            'pl-8': IconHeading,
                            'pr-8': actionAssociated,
                            'lr-8': IconTrailing,
                        },
                        {
                            'text-base-text-color-muted' : props.disabled
                        }
                    )}
                    maxLength={maxLength}
                    onInput={onInput}
                    id={id}
                    {...props}
                />
                {IconTrailing && (
                    <div className="absolute right-0 pr-2"><IconTrailing size={18} className="text-base-icon-color-secondary" /></div>
                )}
                {shortcut && (
                    <div className="absolute right-2 pr-2 bg-kbd-bg-color text-kbd-text-color text-xs font-bold px-1.5 py-1 rounded-sm">{shortcut}</div>
                )}
                {actionAssociated && (
                    <div
                        className="absolute right-0 pr-2"
                        onClick={actionAssociatedOnClick}
                        style={{
                            cursor: actionAssociatedOnClick ? 'pointer' : 'default',
                        }}
                    >
                        {actionAssociated}
                    </div>
                )}
            </div>
            {description && (
                <div className={cn(
                    "text-base-text-color-secondary text-sm",
                    {
                        "text-base-text-color-muted" : props.disabled
                    }
                )}>{description}</div>
            )}
        </div>
    )
}
InputText.displayName = 'InputText';

export { InputText };

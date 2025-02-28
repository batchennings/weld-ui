import * as React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
    'px-2.5 bg-form-bg-color rounded-md focus:shadow-[0_0_0_4px_rgba(18,0,108,0.22)] focus:border-form-border-color-focus border disabled:cursor-not-allowed border-form-border-color justify-start items-center gap-2 inline-flex focus:outline-none disabled:bg-form-bg-color-disabled text-base transition ease-out',
    {
        variants: {
            variant: {
                default: '',
            },
            isError: {
                true: "",
                false: "",
            },
            variantSize: {
                lg: 'p-3.5',
                md: 'p-2.5',
            },
        },
        defaultVariants: {
            variant: 'default',
            variantSize: 'md',
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
    size: number;
    shortcut?: string;
};

type IconProps = {
    size?: number;
    color?: string;
    className: string;
}
const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
    (
        {
            className,
            variant,
            type,
            variantSize,
            isError,
            IconHeading,
            IconTrailing,
            actionAssociated,
            actionAssociatedOnClick,
            maxLength,
            size,
            shortcut,
            onInput,
            ...props
        },
        ref,
    ) => {
        return (
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="flex items-center gap-2 relative">

                    {IconHeading && (
                        <div className="absolute left-0 pl-2">
                            <IconHeading size={18} className="text-base-icon-color-secondary"/>
                        </div>
                    )}
                    <input
                        type={type}
                        size={size}
                        className={cn(
                            inputVariants({ variant, variantSize }),
                            className,
                            {
                                'pl-8': IconHeading,
                                'pr-8': actionAssociated,
                                'lr-8': IconTrailing,
                            },
                        )}
                        ref={ref}
                        maxLength={maxLength}
                        onInput={onInput}
                        {...props}
                    />

                    {IconTrailing && (
                        <div className="absolute right-0 pr-2"><IconTrailing size={18} className="text-base-icon-color-secondary"/></div>
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
            </div>
        );
    },
);
InputText.displayName = 'InputText';

export { InputText };

import * as React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
    'px-2.5 bg-form-bgColor rounded focus:shadow-[0_0_0_4px_rgba(18,0,108,0.22)] focus:border-form-borderColor-focus border disabled:cursor-not-allowed border-form-borderColor justify-start items-center gap-2 inline-flex focus:outline-none disabled:bg-form-bgColor-disabled text-base transition ease-out',
    {
        variants: {
            variant: {
                default: 'border-form-border ',
                short: 'w-14 border border-gray-300',
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
    iconHeading?: React.ReactNode;
    iconEnding?: React.ReactNode;
    actionAssociated?: React.ReactNode;
    actionAssociatedOnClick?: () => void;
    maxLength?: number;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    description?: string;
};

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
    (
        {
            className,
            variant,
            type,
            variantSize,
            isError,
            iconHeading,
            iconEnding,
            actionAssociated,
            actionAssociatedOnClick,
            maxLength,
            onInput,
            description,
            ...props
        },
        ref,
    ) => {
        return (
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="flex items-center gap-2 relative">
                    {iconHeading && (
                        <div className="absolute left-0 pl-2">{iconHeading}</div>
                    )}
                    <input
                        type={type}
                        className={cn(
                            inputVariants({ variant, variantSize }),
                            className,
                            {
                                'pl-8': iconHeading,
                                'pr-8': actionAssociated,
                                'lr-8': iconEnding,
                            },
                        )}
                        ref={ref}
                        maxLength={maxLength}
                        onInput={onInput}
                        {...props}
                    />

                    {iconEnding && (
                        <div className="absolute right-0 pr-2">{iconEnding}</div>
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
                {description && <p className="text-sm text-slate-500">{description}</p>}
            </div>
        );
    },
);
InputText.displayName = 'InputText';

export { InputText };

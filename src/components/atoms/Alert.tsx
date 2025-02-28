import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Button } from "@/components/atoms/Button"

import { cn } from '@/lib/utils';
const alertVariants = cva(
    'border-l-4 px-5 w-full py-3.5 rounded-md justify-start items-center inline-flex',
    {
        variants: {
            type: {
                info: 'bg-message-bg-color-info border-message-text-color-info text-message-text-color-info',
                warning:
                    'border-message-text-color-warning bg-message-bg-color-warning text-message-text-color-warning',
                alert:
                    'border-message-text-color-alert bg-message-bg-color-alert text-message-text-color-alert',
                success:
                    'border-message-text-color-success bg-message-bg-color-success text-message-text-color-success',
            },
        },
        defaultVariants: {
            type: 'info',
        },
    },
);

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
VariantProps<typeof alertVariants> & {
    Icon?: React.ComponentType<IconProps>;
    title?: string;
    content: string;
    action?: string;
};

type IconProps = {
    size?: number;
    color?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, type, Icon, title, content, action, ...props }, ref) => (
        <div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ type }), className, "flex flex-row gap-2.5")}
            {...props}
        >
            {Icon ? <div className=""><Icon size={24} /></div> : null}
            <div className="flex flex-col grow">
                <h5 className="font-bold">{title}</h5>
                <p>{content}</p>
            </div>
            {action ? <div className="flex"><Button label={action} type="secondary" size="md" /></div> : null}
        </div>
    ),
);
Alert.displayName = 'Alert';
export { Alert };

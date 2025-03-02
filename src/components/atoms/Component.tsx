import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { IconProps } from '@/types/icons'

const ComponentVariants = cva("bg-base-bg-color-light rounded-md p-4 flex flex-row gap-2", {
    variants: {
        type: {
            main: "",
            toto: ""
        },
    },
    defaultVariants: {
    },
});

export type ComponentProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof ComponentVariants> & {
    content: string;
    Icon?: React.ComponentType<IconProps>;
};

export const Component: React.FunctionComponent<ComponentProps> = ({ type, Icon, content, ...rest }) => {
    return (
        <div {...rest} className={ComponentVariants({ type })} >
            {Icon && <Icon />}
            {content}
        </div>
    )
}


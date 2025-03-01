import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';

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

type IconProps = {
    size?: number;
    color?: string;
}
export const Component = React.forwardRef<ComponentProps>(({ type, Icon, content, ...rest }, ref) => {
    return (
        <div {...rest} className={ComponentVariants({ type })} ref={ref}>
            {Icon && <Icon />}
            {content}
        </div>
    )
}
)


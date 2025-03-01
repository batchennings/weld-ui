import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';

const ComponentVariants = cva("border p-4 flex flex-row gap-2", {
    variants: {
        type: {
            main: "bg-badge-bg-color text-white",
            toto: ""
        },
    },
    defaultVariants: {
    },
});

export type ComponentProps = VariantProps<typeof ComponentVariants> & {
    content: string;
    Icon?: React.ComponentType<IconProps>;
};

type IconProps = {
    size?: number;
    color?: string;
}
export const Component: React.FunctionComponent<ComponentProps> = ({ type, Icon, content, ...rest }) => {
    return (
        <div {...rest} className={ComponentVariants({ type })} >
            {Icon && <Icon />}
            {content}
        </div>
    );
};


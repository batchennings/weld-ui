import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "@/icons";

const breadcrumbVariants = cva(
    [
        "flex items-center gap-1 text-sm",
    ],
    {
        variants: {
            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const breadcrumbItemVariants = cva(
    [
        "flex items-center gap-1",
    ],
    {
        variants: {
            state: {
                current: "text-base-text-color-primary font-medium",
                default: "text-base-text-color-secondary hover:text-base-text-color-primary",
                disabled: "text-base-text-color-muted cursor-not-allowed",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export type BreadcrumbItem = {
    label: string;
    href?: string;
    disabled?: boolean;
    current?: boolean;
};

export type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement> & 
    VariantProps<typeof breadcrumbVariants> & {
        items: BreadcrumbItem[];
        separator?: React.ReactNode;
    };

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
    items,
    separator,
    size,
    className,
    ...props
}) => {
    const defaultSeparator = <ChevronRight size={12} className="text-base-icon-color-muted" />;
    const finalSeparator = separator || defaultSeparator;

    return (
        <nav className={cn(breadcrumbVariants({ size }), className)} {...props}>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const itemState = item.current ? 'current' : item.disabled ? 'disabled' : 'default';
                
                return (
                    <React.Fragment key={index}>
                        <div className={breadcrumbItemVariants({ state: itemState })}>
                            {item.href && !item.disabled && !item.current ? (
                                <a 
                                    href={item.href}
                                    className="hover:underline"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </div>
                        {!isLast && (
                            <span className="flex items-center">
                                {finalSeparator}
                            </span>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

Breadcrumb.displayName = 'Breadcrumb';
export { Breadcrumb };

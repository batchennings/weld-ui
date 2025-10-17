import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { cn } from "@/lib/utils";
import { NavigationBar } from "@/components/organisms/NavigationBar";
import { Breadcrumb } from "@/components/atoms/Breadcrumb";
import { Tabs } from "@/components/atoms/Tabs";

const pageVariants = cva(
    [
        "min-h-screen bg-base-bg-color-regular",
    ],
    {
        variants: {
            layout: {
                default: "",
                sidebar: "flex",
                fullscreen: "h-screen overflow-hidden",
            },
        },
        defaultVariants: {
            layout: "default",
        },
    }
);

const contentVariants = cva(
    [
        "flex-1 p-6",
    ],
    {
        variants: {
            padding: {
                none: "p-0",
                sm: "p-4",
                md: "p-6",
                lg: "p-8",
            },
        },
        defaultVariants: {
            padding: "md",
        },
    }
);

const headerVariants = cva(
    [
        "mb-6",
    ],
    {
        variants: {
            spacing: {
                none: "mb-0",
                sm: "mb-4",
                md: "mb-6",
                lg: "mb-8",
            },
        },
        defaultVariants: {
            spacing: "md",
        },
    }
);

export type BreadcrumbItem = {
    label: string;
    href?: string;
    disabled?: boolean;
    current?: boolean;
};

export type TabItem = {
    id: string;
    label: string;
    disabled?: boolean;
    content?: React.ReactNode;
};

export type MetadataItem = {
    label: string;
    value: string | React.ReactNode;
    type?: "text" | "badge" | "status";
};

export type PageProps = React.HTMLAttributes<HTMLDivElement> & 
    VariantProps<typeof pageVariants> & 
    VariantProps<typeof contentVariants> & 
    VariantProps<typeof headerVariants> & {
        // Navigation
        navigationProps?: React.ComponentProps<typeof NavigationBar>;
        
        // Header content
        breadcrumbs?: BreadcrumbItem[];
        title?: string;
        subtitle?: string;
        metadata?: MetadataItem[];
        tabs?: TabItem[];
        headerActions?: React.ReactNode;
        
        // Main content
        children?: React.ReactNode;
        
        // Layout options
        showNavigation?: boolean;
        showHeader?: boolean;
        showBreadcrumbs?: boolean;
        showMetadata?: boolean;
        showTabs?: boolean;
    };

const Page: React.FunctionComponent<PageProps> = ({
    // Navigation
    navigationProps,
    
    // Header content
    breadcrumbs,
    title,
    subtitle,
    metadata,
    tabs,
    headerActions,
    
    // Main content
    children,
    
    // Layout options
    showNavigation = true,
    showHeader = true,
    showBreadcrumbs = true,
    showMetadata = true,
    showTabs = true,
    
    // Styling
    layout,
    padding,
    spacing,
    className,
    ...props
}) => {
    return (
        <div className={cn(pageVariants({ layout }), className)} {...props}>
            {/* Navigation Bar */}
            {showNavigation && (
                <NavigationBar {...navigationProps} />
            )}
            
            {/* Main Content Area */}
            <main className={cn(contentVariants({ padding }))}>
                {/* Page Header */}
                {showHeader && (
                    <header className={cn(headerVariants({ spacing }))}>
                        {/* Breadcrumbs */}
                        {showBreadcrumbs && breadcrumbs && breadcrumbs.length > 0 && (
                            <div className="mb-4">
                                <Breadcrumb items={breadcrumbs} />
                            </div>
                        )}
                        
                        {/* Title and Subtitle */}
                        {(title || subtitle) && (
                            <div className="mb-6">
                                {title && (
                                    <h1 className="text-2xl font-semibold text-base-text-color-primary mb-2">
                                        {title}
                                    </h1>
                                )}
                                {subtitle && (
                                    <p className="text-base-text-color-secondary">
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                        )}
                        
                        {/* Metadata */}
                        {showMetadata && metadata && metadata.length > 0 && (
                            <div className="mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {metadata.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <span className="text-sm text-base-text-color-secondary mb-1">
                                                {item.label}
                                            </span>
                                            <span className="text-base text-base-text-color-primary">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Header Actions */}
                        {headerActions && (
                            <div className="mb-6">
                                {headerActions}
                            </div>
                        )}
                        
                        {/* Tabs */}
                        {showTabs && tabs && tabs.length > 0 && (
                            <Tabs items={tabs} />
                        )}
                    </header>
                )}
                
                {/* Main Content */}
                <div className="flex-1">
                    {children || (
                        <div className="flex items-center justify-center h-64 bg-base-bg-color-hover rounded-lg border-2 border-dashed border-form-border-color">
                            <p className="text-base-text-color-secondary">
                                Content placeholder - Replace with your page content
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

Page.displayName = 'Page';
export { Page };

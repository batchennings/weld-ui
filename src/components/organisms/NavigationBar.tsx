import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/InputText";
import { Dropdown } from "@/components/atoms/Dropdown";
import { Search, Bell, UserFilled, Menu, Logout } from "@/icons";

const navigationBarVariants = cva(
    [
        "flex items-center justify-between px-4 py-3 bg-base-bg-color-regular border-b border-form-border-color",
        "sticky top-0 z-50 backdrop-blur-sm bg-base-bg-color-regular/95",
    ],
    {
        variants: {
            size: {
                sm: "h-12 px-3 py-2",
                md: "h-14 px-4 py-3",
                lg: "h-16 px-6 py-4",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const navItemVariants = cva(
    [
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        "hover:bg-base-bg-color-hover",
    ],
    {
        variants: {
            active: {
                true: "bg-base-bg-color-hover text-base-text-color-primary",
                false: "text-base-text-color-secondary hover:text-base-text-color-primary",
            },
        },
        defaultVariants: {
            active: false,
        },
    }
);

export type NavItem = {
    label: string;
    href?: string;
    active?: boolean;
    disabled?: boolean;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
};

export type NavigationBarProps = React.HTMLAttributes<HTMLDivElement> & 
    VariantProps<typeof navigationBarVariants> & {
        logo?: React.ReactNode;
        searchPlaceholder?: string;
        userMenu?: React.ReactNode;
        notifications?: React.ReactNode;
        actions?: React.ReactNode;
        navItems?: NavItem[];
        showSearch?: boolean;
        showNotifications?: boolean;
        showUserMenu?: boolean;
        user?: {
            name: string;
            email: string;
            avatar?: string;
        };
    };

const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({
    logo,
    searchPlaceholder = "Search...",
    userMenu,
    notifications,
    actions,
    navItems = [],
    showSearch = true,
    showNotifications = true,
    showUserMenu = true,
    user,
    size,
    className,
    ...props
}) => {
    const defaultUserMenu = (
        <Dropdown
            triggerElement={
                <Button
                    type="ghost"
                    size="sm"
                    Icon={UserFilled}
                />
            }
            items={[
                {
                    label: user?.name || "User",
                    type: "item",
                    disabled: true,
                },
                {
                    label: user?.email || "user@example.com",
                    type: "item",
                    disabled: true,
                },
                { type: "separator" },
                {
                    label: "Profile",
                    Icon: UserFilled,
                    onSelect: () => console.log("Profile clicked"),
                },
                {
                    label: "Settings",
                    onSelect: () => console.log("Settings clicked"),
                },
                { type: "separator" },
                {
                    label: "Sign out",
                    Icon: Logout,
                    destructive: true,
                    onSelect: () => console.log("Sign out clicked"),
                },
            ]}
        />
    );

    const defaultNotifications = (
        <Button
            type="ghost"
            size="sm"
            Icon={Bell}
        />
    );

    return (
        <header className={cn(navigationBarVariants({ size }), className)} {...props}>
            {/* Left section - Logo and Navigation */}
            <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="flex items-center">
                    {logo || (
                        <div className="text-xl font-bold text-base-text-color-primary">
                            Weld UI
                        </div>
                    )}
                </div>

                {/* Navigation Items */}
                {navItems.length > 0 && (
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={cn(
                                    navItemVariants({ active: item.active }),
                                    item.disabled && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {item.icon && <item.icon size={16} />}
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>

            {/* Center section - Search */}
            {showSearch && (
                <div className="flex-1 max-w-md mx-4">
                    <InputText
                        placeholder={searchPlaceholder}
                        IconHeading={Search}
                    />
                </div>
            )}

            {/* Right section - Actions, Notifications, User Menu */}
            <div className="flex items-center gap-2">
                {/* Custom Actions */}
                {actions}
                
                {/* Mobile Menu Button */}
                <Button
                    type="ghost"
                    size="sm"
                    Icon={Menu}
                    className="md:hidden"
                />
                
                {/* Notifications */}
                {showNotifications && (
                    <div className="hidden md:block">
                        {notifications || defaultNotifications}
                    </div>
                )}
                
                {/* User Menu */}
                {showUserMenu && (
                    <div className="hidden md:block">
                        {userMenu || defaultUserMenu}
                    </div>
                )}
            </div>
        </header>
    );
};

NavigationBar.displayName = 'NavigationBar';
export { NavigationBar };

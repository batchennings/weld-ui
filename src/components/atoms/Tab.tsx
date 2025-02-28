import { cva, type VariantProps } from 'class-variance-authority';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

const tabVariants = cva(
  'cursor-pointer p-3 flex items-center gap-2 text-base relative',
  {
    variants: {
      variant: {
        default:
          'text-base-textColor-secondary transition hover:text-tab-textColor-active',
        active:
          'text-tab-textColor-active border-t-2 border-t-tab-borderColor-active',
        disabled: 'text-base-textColor-disabled cursor-not-allowed opacity-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type TabProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof tabVariants> & {
    icon?: ReactNode;
    notification?: boolean;
    disabled?: boolean;
  };

const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ className, variant, icon, notification, disabled, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center',
          tabVariants({ variant: disabled ? 'disabled' : variant, className }),
        )}
        ref={ref}
        {...props}
      >
        {icon && <div className="relative w-6 h-6">{icon}</div>}
        {props.children}
      </div>
    );
  },
);

Tab.displayName = 'Tab';

export { Tab };

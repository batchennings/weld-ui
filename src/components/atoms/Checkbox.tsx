import { SpecialCheckboxFull } from '@/components/icons';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

export type CheckboxShape = 'default' | 'rounded';

const checkboxVariant = cva<{ shape: Record<CheckboxShape, string> }>(
  'h-5 w-5 bg-white border border-form-borderColor transition ease-out duration-300 focus:shadow-[0_0_0_4px_rgba(18,0,108,0.22)] focus:border-form-borderColor-focus focus-visible:outline-none disabled:cursor-not-allowed aria-checked:bg-base-accent-600 aria-checked:border-none disabled:bg-form-bgColor-disabled disabled:opacity-50',
  {
    variants: {
      shape: {
        default: 'rounded-lg',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      shape: 'default',
    },
  },
);

type CheckboxProps = {
  shape?: CheckboxShape;
} & ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, shape = 'default', ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariant({ shape }), className, 'relative')}
    {...props}
  >
    {shape === 'rounded' ? (
      <div className="absolute inset-1.5 bg-white rounded-full" />
    ) : (
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center')}
      >
        <SpecialCheckboxFull
          className="h-5 w-5 data-disabled:opacity-50"
          color="white"
        />
      </CheckboxPrimitive.Indicator>
    )}
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

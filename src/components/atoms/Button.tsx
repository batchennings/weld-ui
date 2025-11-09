import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { IconProps } from '@/types/icons';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = Omit<MuiButtonProps, 'variant' | 'size' | 'color'> & {
  label?: string;
  Icon?: React.ComponentType<IconProps>;
  type?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  Icon,
  onClick,
  type = 'primary',
  size = 'md',
  disabled,
  children,
  ...rest
}) => {
  const theme = useTheme();

  // Size configuration
  const sizeConfig = {
    sm: {
      fontSize: theme.typography.body2.fontSize,
      px: 2,
      gap: 1,
      height: 24,
    },
    md: {
      fontSize: theme.typography.body1.fontSize,
      px: 3,
      gap: 2,
      height: 32,
    },
    lg: {
      fontSize: theme.typography.h5.fontSize,
      px: 4,
      gap: 2,
      height: 40,
    },
  };

  // Variant configuration
  const getVariantSx = () => {
    const baseStyles = {
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: '4px',
      display: 'inline-flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      width: 'auto',
      transition: 'all 0.3s ease-out',
      textTransform: 'none',
      ...sizeConfig[size],
    };

    switch (type) {
      case 'primary':
        return {
          ...baseStyles,
          backgroundColor: theme.custom.button.filled.bg,
          color: theme.custom.button.filled.text,
          border: 'none',
          '&:hover': {
            backgroundColor: theme.custom.button.filled.bgHover,
            color: theme.custom.button.filled.textHover,
          },
          '&:disabled': {
            backgroundColor: theme.custom.button.filled.bgDisabled,
            color: theme.custom.button.filled.textDisabled,
            cursor: 'not-allowed',
          },
          '&:focus': {
            boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
          },
        };

      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: theme.custom.button.outline.text,
          border: `1px solid ${theme.custom.button.outline.border}`,
          '&:hover': {
            borderColor: theme.custom.button.outline.borderHover,
            color: theme.custom.button.outline.textHover,
            backgroundColor: 'transparent',
          },
          '&:disabled': {
            borderColor: theme.custom.button.outline.border,
            color: theme.custom.button.outline.textDisabled,
            cursor: 'not-allowed',
          },
          '&:focus': {
            boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
          },
        };

      case 'destructive':
        return {
          ...baseStyles,
          backgroundColor: theme.custom.button.destructive.bg,
          color: theme.custom.button.destructive.text,
          border: 'none',
          '&:hover': {
            backgroundColor: theme.custom.button.destructive.bgHover,
            color: theme.custom.button.destructive.textHover,
          },
          '&:disabled': {
            backgroundColor: theme.custom.button.destructive.bgDisabled,
            color: theme.custom.button.destructive.textDisabled,
            cursor: 'not-allowed',
          },
          '&:focus': {
            boxShadow: '0 0 0 4px rgba(239,68,68,0.25)',
          },
        };

      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: theme.custom.button.outline.bg,
          color: theme.custom.button.outline.text,
          border: `1px solid transparent`,
          '&:hover': {
            borderColor: theme.custom.button.outline.borderHover,
            color: theme.custom.button.outline.textHover,
            backgroundColor: theme.custom.button.outline.bg,
          },
          '&:disabled': {
            borderColor: 'transparent',
            color: theme.custom.button.outline.textDisabled,
            cursor: 'not-allowed',
          },
          '&:focus': {
            boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
          },
        };

      case 'link':
        return {
          ...baseStyles,
          px: 0.5,
          backgroundColor: 'transparent',
          color: theme.custom.button.link.text,
          border: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.custom.button.link.textHover,
          },
          '&:disabled': {
            color: theme.custom.button.link.textDisabled,
            cursor: 'not-allowed',
          },
          '&:focus': {
            boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
          },
        };

      default:
        return baseStyles;
    }
  };

  return (
    <MuiButton
      {...rest}
      sx={getVariantSx()}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      disabled={disabled}
      disableRipple
      disableElevation
    >
      {Icon && <Icon />}
      {label || children}
    </MuiButton>
  );
};

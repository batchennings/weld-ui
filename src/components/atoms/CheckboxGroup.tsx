import React from 'react';
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Label } from '@/components/atoms/Label';
import CheckIcon from '@mui/icons-material/Check';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxGroupProps = Omit<MuiCheckboxProps, 'size'> & {
  id?: string;
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: CheckboxSize;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  id,
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onCheckedChange,
  size = 'md',
  ...props
}) => {
  const theme = useTheme();

  // Size configuration
  const sizeConfig = {
    sm: { size: 12, iconSize: 10 },
    md: { size: 16, iconSize: 14 },
    lg: { size: 20, iconSize: 18 },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        alignItems: 'flex-start',
      }}
    >
      <MuiCheckbox
        id={id}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        icon={
          <Box
            sx={{
              width: sizeConfig[size].size,
              height: sizeConfig[size].size,
              borderRadius: '4px',
              border: `1px solid ${theme.custom.form.border}`,
              backgroundColor: theme.custom.form.bg,
            }}
          />
        }
        checkedIcon={
          <Box
            sx={{
              width: sizeConfig[size].size,
              height: sizeConfig[size].size,
              borderRadius: '4px',
              border: `1px solid ${theme.custom.button.filled.bg}`,
              backgroundColor: theme.custom.button.filled.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckIcon sx={{ fontSize: sizeConfig[size].iconSize, color: '#ffffff' }} />
          </Box>
        }
        sx={{
          padding: 0,
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
          '&:focus-visible': {
            boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
            borderRadius: '4px',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        {...props}
      />
      {(label || description) && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {label && <Label htmlFor={id}>{label}</Label>}
          {description && (
            <Box
              sx={{
                color: disabled
                  ? theme.custom.base.text.muted
                  : theme.custom.base.text.secondary,
                fontSize: theme.typography.body2.fontSize,
              }}
            >
              {description}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

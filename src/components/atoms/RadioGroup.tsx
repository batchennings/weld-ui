import React from 'react';
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
import MuiRadio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Label } from '@/components/atoms/Label';

export type RadioSize = 'sm' | 'md' | 'lg';

export type RadioOption = {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

export type RadioGroupProps = Omit<MuiRadioGroupProps, 'size'> & {
  id?: string;
  label?: string;
  description?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  size?: RadioSize;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  label,
  description,
  options,
  value,
  defaultValue,
  onValueChange,
  size = 'md',
  disabled,
  ...props
}) => {
  const theme = useTheme();

  // Size configuration
  const sizeConfig = {
    sm: { size: 12, dotSize: 4 },
    md: { size: 16, dotSize: 6 },
    lg: { size: 20, dotSize: 10 },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      {description && (
        <Box
          sx={{
            color: theme.custom.base.text.secondary,
            fontSize: theme.typography.body2.fontSize,
          }}
        >
          {description}
        </Box>
      )}
      <MuiRadioGroup
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onValueChange?.(e.target.value)}
        {...props}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled || disabled}
              control={
                <MuiRadio
                  icon={
                    <Box
                      sx={{
                        width: sizeConfig[size].size,
                        height: sizeConfig[size].size,
                        borderRadius: '50%',
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
                        borderRadius: '50%',
                        border: `1px solid ${theme.custom.form.checkbox.bgActive}`,
                        backgroundColor: theme.custom.form.checkbox.bgActive,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: sizeConfig[size].dotSize,
                          height: sizeConfig[size].dotSize,
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    padding: 0,
                    opacity: opt.disabled || disabled ? 0.5 : 1,
                    cursor: opt.disabled || disabled ? 'not-allowed' : 'pointer',
                    '&:focus-visible': {
                      boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
                      borderRadius: '50%',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: -0.5 }}>
                  <Box
                    sx={{
                      color:
                        opt.disabled || disabled
                          ? theme.custom.base.text.muted
                          : theme.custom.base.text.primary,
                      fontSize: theme.typography.body1.fontSize,
                    }}
                  >
                    {opt.label}
                  </Box>
                  {opt.description && (
                    <Box
                      sx={{
                        fontSize: theme.typography.body2.fontSize,
                        color:
                          opt.disabled || disabled
                            ? theme.custom.base.text.muted
                            : theme.custom.base.text.secondary,
                      }}
                    >
                      {opt.description}
                    </Box>
                  )}
                </Box>
              }
              sx={{
                alignItems: 'flex-start',
                gap: 2,
                margin: 0,
                cursor: opt.disabled || disabled ? 'not-allowed' : 'pointer',
              }}
            />
          ))}
        </Box>
      </MuiRadioGroup>
    </Box>
  );
};

RadioGroup.displayName = 'RadioGroup';

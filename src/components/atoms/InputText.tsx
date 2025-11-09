import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Box, Typography, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconProps } from '@/types/icons';
import { Label } from '@/components/atoms/Label';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputLength = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type InputTextProps = Omit<TextFieldProps, 'size' | 'variant'> & {
  IconHeading?: React.ComponentType<IconProps>;
  IconTrailing?: React.ComponentType<IconProps>;
  actionAssociated?: React.ReactNode;
  actionAssociatedOnClick?: () => void;
  maxLength?: number;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: InputSize;
  length?: InputLength;
  shortcut?: string;
  label?: string;
  isError?: boolean;
  description?: string;
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  type,
  isError,
  IconHeading,
  IconTrailing,
  actionAssociated,
  actionAssociatedOnClick,
  maxLength,
  length = 'full',
  size = 'md',
  shortcut,
  label,
  description,
  onInput,
  disabled,
  ...props
}) => {
  const theme = useTheme();

  // Size configuration
  const sizeConfig = {
    sm: { padding: '8px', height: '24px', fontSize: theme.typography.body2.fontSize },
    md: { padding: '10px', height: '32px', fontSize: theme.typography.body1.fontSize },
    lg: { padding: '14px', height: 'auto', fontSize: theme.typography.body1.fontSize },
  };

  // Length configuration (width)
  const widthConfig = {
    xs: '40px',
    sm: '100px',
    md: '200px',
    lg: '300px',
    xl: '400px',
    full: '100%',
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 1,
        width: widthConfig[length],
      }}
    >
      {label && (
        <Label
          htmlFor={id}
          sx={{
            color: disabled ? theme.custom.base.text.muted : theme.custom.base.text.primary,
          }}
        >
          {label}
        </Label>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative', width: '100%' }}>
        <TextField
          id={id}
          type={type}
          disabled={disabled}
          error={isError}
          fullWidth
          {...props}
          inputProps={{
            maxLength,
            onInput,
            ...props.inputProps,
          }}
          InputProps={{
            startAdornment: IconHeading && (
              <InputAdornment position="start">
                <IconHeading size={18} sx={{ color: theme.custom.base.icon.secondary }} />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {IconTrailing && (
                  <InputAdornment position="end">
                    <IconTrailing size={18} sx={{ color: theme.custom.base.icon.secondary }} />
                  </InputAdornment>
                )}
                {shortcut && (
                  <InputAdornment position="end">
                    <Box
                      sx={{
                        backgroundColor: theme.custom.kbd.bg,
                        color: theme.custom.kbd.text,
                        fontSize: theme.typography.caption.fontSize,
                        fontWeight: 'bold',
                        px: 1.5,
                        py: 1,
                        borderRadius: '3px',
                      }}
                    >
                      {shortcut}
                    </Box>
                  </InputAdornment>
                )}
                {actionAssociated && (
                  <InputAdornment
                    position="end"
                    onClick={actionAssociatedOnClick}
                    sx={{ cursor: actionAssociatedOnClick ? 'pointer' : 'default' }}
                  >
                    {actionAssociated}
                  </InputAdornment>
                )}
              </>
            ),
            ...props.InputProps,
          }}
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              backgroundColor: disabled ? theme.custom.form.bgDisabled : theme.custom.form.bg,
              borderRadius: '4px',
              fontSize: sizeConfig[size].fontSize,
              height: sizeConfig[size].height,
              '& fieldset': {
                borderColor: theme.custom.form.border,
              },
              '&:hover fieldset': {
                borderColor: theme.custom.form.border,
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.custom.form.borderFocus,
                borderWidth: '1px',
              },
              '&.Mui-focused': {
                boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
              },
              '&.Mui-disabled': {
                cursor: 'not-allowed',
                backgroundColor: theme.custom.form.bgDisabled,
              },
              '&.Mui-error fieldset': {
                borderColor: theme.custom.form.borderAlertFocus,
              },
              '&.Mui-error.Mui-focused': {
                boxShadow: '0 0 0 4px rgba(220,38,38,0.25)',
              },
            },
            '& .MuiOutlinedInput-input': {
              color: disabled
                ? theme.custom.form.text.secondary
                : theme.custom.form.text.primary,
              padding: sizeConfig[size].padding,
              '&::placeholder': {
                color: theme.custom.form.text.secondary,
                opacity: 1,
              },
            },
            '& .MuiInputAdornment-root': {
              marginLeft: 0,
              marginRight: 0,
            },
          }}
        />
      </Box>

      {description && (
        <Typography
          variant="body2"
          sx={{
            color: disabled
              ? theme.custom.base.text.muted
              : theme.custom.base.text.secondary,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

InputText.displayName = 'InputText';

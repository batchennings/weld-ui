import React from 'react';
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Label } from '@/components/atoms/Label';

export type SwitchProps = Omit<MuiSwitchProps, 'size'> & {
  label?: string;
  description?: string;
  onCheckedChange?: (checked: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  description,
  onCheckedChange,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
      <MuiSwitch
        id={id}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        {...props}
        sx={{
          width: 32,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: '2px',
            transitionDuration: '100ms',
            '&.Mui-checked': {
              transform: 'translateX(12px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.custom.switch.bgActive,
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: theme.custom.switch.thumb.bgActiveDisabled,
                opacity: 1,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: theme.custom.switch.bgActive,
              border: `6px solid #fff`,
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              backgroundColor: theme.custom.switch.thumb.bgDisabled,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 1,
            },
            '&:focus-visible': {
              boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
              borderRadius: '128px',
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 14,
            height: 14,
            backgroundColor: theme.custom.switch.thumb.bg,
            boxShadow: 'none',
          },
          '& .MuiSwitch-track': {
            borderRadius: '128px',
            backgroundColor: theme.custom.switch.bg,
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 100,
            }),
          },
        }}
      />
      {(label || description) && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {label && <Label htmlFor={id}>{label}</Label>}
          {description && (
            <Box sx={{ color: theme.custom.base.text.secondary, fontSize: theme.typography.body1.fontSize }}>
              {description}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

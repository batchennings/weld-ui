import React from 'react';
import { Box, MenuItem, MenuItemProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

export type ListItemVariant = 'dropdown' | 'select';
export type ListItemTone = 'default' | 'destructive';

export type ListItemProps = Omit<MenuItemProps, 'children'> & {
  label?: string;
  description?: string;
  shortcut?: string;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  disabled?: boolean;
  destructive?: boolean;
  onSelect?: () => void;
  value?: string;
  showIndicator?: boolean;
  children?: React.ReactNode;
  variant?: ListItemVariant;
  tone?: ListItemTone;
};

export const ListItem: React.FC<ListItemProps> = ({
  label,
  description,
  shortcut,
  Icon,
  disabled,
  destructive,
  onSelect,
  value,
  showIndicator = false,
  children,
  variant = 'dropdown',
  tone = 'default',
  ...props
}) => {
  const theme = useTheme();
  const finalTone = destructive ? 'destructive' : tone;

  return (
    <MenuItem
      onClick={onSelect}
      disabled={disabled}
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: variant === 'select' ? 'space-between' : 'flex-start',
        width: '100%',
        gap: 3,
        px: 3,
        py: 2,
        color:
          finalTone === 'destructive'
            ? theme.custom.button.destructive.text
            : theme.custom.base.text.primary,
        '&:hover': {
          backgroundColor: theme.custom.list.bgHover,
        },
        '&.Mui-disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        ...props.sx,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {Icon && <Icon size={16} className="text-base-icon-color-secondary" />}
        <Box>
          {children || label}
          {description && (
            <Box
              sx={{
                fontSize: theme.typography.body2.fontSize,
                color: theme.custom.base.text.secondary,
              }}
            >
              {description}
            </Box>
          )}
        </Box>
      </Box>

      {shortcut && (
        <Box
          component="span"
          sx={{
            fontSize: theme.typography.caption.fontSize,
            color: theme.custom.base.text.secondary,
          }}
        >
          {shortcut}
        </Box>
      )}

      {showIndicator && (
        <Box>
          <CheckIcon sx={{ fontSize: 16 }} />
        </Box>
      )}
    </MenuItem>
  );
};

ListItem.displayName = 'ListItem';

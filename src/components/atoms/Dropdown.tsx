import React from 'react';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ListItem } from './ListItem';

export type DropdownItem = {
  type?: 'item' | 'separator';
  label?: string;
  description?: string;
  shortcut?: string;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  disabled?: boolean;
  destructive?: boolean;
  onSelect?: () => void;
};

export type DropdownProps = Omit<MuiMenuProps, 'open'> & {
  trigger: React.ReactElement;
  items: DropdownItem[];
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  ...props
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleClick })}
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...props}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: theme.custom.base.bg.regular,
              borderRadius: '4px',
              border: `1px solid ${theme.custom.list.border}`,
              py: 1,
              minWidth: 160,
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
            },
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {items.map((item, idx) => {
          if (item.type === 'separator') {
            return (
              <Divider
                key={`sep-${idx}`}
                sx={{
                  my: 1,
                  borderColor: theme.custom.list.border,
                }}
              />
            );
          }

          return (
            <ListItem
              key={`item-${idx}`}
              label={item.label}
              description={item.description}
              shortcut={item.shortcut}
              Icon={item.Icon}
              disabled={item.disabled}
              destructive={item.destructive}
              onSelect={() => {
                item.onSelect?.();
                handleClose();
              }}
              variant="dropdown"
            />
          );
        })}
      </MuiMenu>
    </>
  );
};

Dropdown.displayName = 'Dropdown';

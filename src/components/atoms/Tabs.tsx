import React, { useState } from 'react';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type TabSize = 'sm' | 'md' | 'lg';

export type TabItem = {
  id: string;
  label: string;
  disabled?: boolean;
  content?: React.ReactNode;
};

export type TabsProps = Omit<MuiTabsProps, 'children' | 'value' | 'onChange'> & {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  size?: TabSize;
};

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultValue,
  value,
  onValueChange,
  orientation = 'horizontal',
  size = 'md',
  ...props
}) => {
  const theme = useTheme();
  const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.id || '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleTabClick = (_event: React.SyntheticEvent, newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const sizeConfig = {
    sm: { gap: 1 },
    md: { gap: 2 },
    lg: { gap: 3 },
  };

  const currentTab = items.find((item) => item.id === currentValue);

  return (
    <Box sx={{ width: '100%' }}>
      <MuiTabs
        value={currentValue}
        onChange={handleTabClick}
        orientation={orientation}
        {...props}
        sx={{
          borderBottom: orientation === 'horizontal' ? `1px solid ${theme.custom.form.border}` : 'none',
          borderRight: orientation === 'vertical' ? `1px solid ${theme.custom.form.border}` : 'none',
          gap: sizeConfig[size].gap,
          '& .MuiTabs-indicator': {
            backgroundColor: theme.custom.tab.borderActive,
          },
          ...props.sx,
        }}
      >
        {items.map((item) => (
          <MuiTab
            key={item.id}
            value={item.id}
            label={item.label}
            disabled={item.disabled}
            sx={{
              px: 3,
              py: 2,
              fontSize: theme.typography.body2.fontSize,
              fontWeight: 'medium',
              textTransform: 'none',
              minHeight: 'auto',
              color: item.disabled
                ? theme.custom.base.text.muted
                : currentValue === item.id
                ? theme.custom.tab.textActive
                : theme.custom.tab.text,
              '&:hover': {
                color: !item.disabled ? theme.custom.base.text.primary : undefined,
              },
              '&.Mui-selected': {
                color: theme.custom.tab.textActive,
              },
              '&.Mui-disabled': {
                color: theme.custom.base.text.muted,
                cursor: 'not-allowed',
              },
              '&:focus': {
                outline: `2px solid ${theme.custom.base.accent[400]}`,
                outlineOffset: '2px',
              },
            }}
          />
        ))}
      </MuiTabs>

      {currentTab?.content && (
        <Box
          role="tabpanel"
          sx={{ mt: 4 }}
        >
          {currentTab.content}
        </Box>
      )}
    </Box>
  );
};

Tabs.displayName = 'Tabs';

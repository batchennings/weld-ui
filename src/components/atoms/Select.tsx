import React from 'react';
import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { ChevronDownIcon } from '@primer/octicons-react';
import { ListItem } from './ListItem';

export type SelectSize = 'sm' | 'md' | 'lg';

export type SelectProps = Omit<MuiSelectProps, 'size'> & {
  content: string;
  placeholder: string;
  options: Array<{ value: string; details?: string }>;
  onValueChange?: (value: string) => void;
  value?: string;
  size?: SelectSize;
};

export const Select: React.FC<SelectProps> = ({
  content,
  size = 'md',
  placeholder,
  options,
  onValueChange,
  value,
  ...rest
}) => {
  const theme = useTheme();

  const sizeConfig = {
    sm: { fontSize: theme.typography.body2.fontSize, px: 2, gap: 1, height: 24 },
    md: { fontSize: theme.typography.body1.fontSize, px: 3, gap: 2, height: 32 },
    lg: { fontSize: theme.typography.h5.fontSize, px: 4, gap: 2, height: 40 },
  };

  return (
    <MuiSelect
      value={value}
      onChange={(e) => onValueChange?.(e.target.value as string)}
      displayEmpty
      IconComponent={ChevronDownIcon}
      renderValue={(selected) => {
        if (!selected) {
          return <span style={{ color: theme.custom.base.text.muted }}>{placeholder}</span>;
        }
        return selected as string;
      }}
      {...rest}
      sx={{
        width: 256,
        height: sizeConfig[size].height,
        fontSize: sizeConfig[size].fontSize,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.custom.button.outline.border}`,
        borderRadius: '4px',
        color: theme.custom.button.outline.text,
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover': {
          borderColor: theme.custom.button.outline.borderHover,
          color: theme.custom.button.outline.textHover,
        },
        '&.Mui-focused': {
          boxShadow: '0 0 0 4px rgba(37,99,235,0.25)',
          borderColor: theme.custom.button.outline.borderFocus,
        },
        '&.Mui-disabled': {
          borderColor: theme.custom.button.outline.border,
          color: theme.custom.button.outline.textDisabled,
          cursor: 'not-allowed',
        },
        '& .MuiSelect-select': {
          px: sizeConfig[size].px,
          py: 0,
          display: 'flex',
          alignItems: 'center',
        },
        ...rest.sx,
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: theme.custom.base.bg.regular,
            borderRadius: '4px',
            border: `1px solid ${theme.custom.list.border}`,
            width: 256,
            mt: 1,
          },
        },
      }}
    >
      {options.map((option) => (
        <ListItem
          key={option.value}
          value={option.value}
          label={option.value}
          description={option.details}
          showIndicator={true}
          variant="select"
        />
      ))}
    </MuiSelect>
  );
};

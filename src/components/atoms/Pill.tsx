import React from 'react';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { IconProps } from '@/types/icons';

export type PillType = 'red' | 'green' | 'amber' | 'blue' | 'gray';
export type PillStyle = 'light' | 'filled' | 'stroke';
export type PillSize = 'sm' | 'md';

export type PillProps = Omit<MuiChipProps, 'size' | 'color' | 'variant'> & {
  type: PillType;
  Icon?: React.ComponentType<IconProps>;
  style: PillStyle;
  size: PillSize;
  content: string;
};

export const Pill: React.FC<PillProps> = ({
  type,
  style,
  Icon,
  size,
  content,
  ...props
}) => {
  const theme = useTheme();

  // Size configuration
  const sizeConfig = {
    sm: { px: 1.5, gap: 1, height: 20, fontSize: theme.typography.body2.fontSize },
    md: { px: 2, gap: 1.5, height: 24, fontSize: theme.typography.body2.fontSize },
  };

  // Get color configuration based on type and style
  const getColorConfig = () => {
    const pillColors = theme.custom.pill[type];
    if (!pillColors) return theme.custom.pill.gray[style];
    return pillColors[style];
  };

  const colors = getColorConfig();

  return (
    <MuiChip
      label={content}
      icon={Icon ? <Icon size={12} /> : undefined}
      {...props}
      sx={{
        borderRadius: '128px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'inline-flex',
        px: sizeConfig[size].px,
        height: sizeConfig[size].height,
        fontSize: sizeConfig[size].fontSize,
        backgroundColor: colors.bg,
        color: colors.text,
        border: style === 'stroke' ? `1px solid ${colors.border}` : 'none',
        '& .MuiChip-label': {
          padding: 0,
          px: Icon ? 0.5 : 0,
        },
        '& .MuiChip-icon': {
          margin: 0,
          color: colors.icon || colors.text,
          fontSize: 12,
        },
        ...props.sx,
      }}
    />
  );
};

Pill.displayName = 'Pill';

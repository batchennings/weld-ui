import React from 'react';
import MuiBreadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import { Link, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ChevronRight } from '@/icons';

export type BreadcrumbSize = 'sm' | 'md' | 'lg';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  disabled?: boolean;
  current?: boolean;
};

export type BreadcrumbProps = Omit<MuiBreadcrumbsProps, 'children'> & {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  size?: BreadcrumbSize;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  size = 'md',
  ...props
}) => {
  const theme = useTheme();

  const sizeConfig = {
    sm: theme.typography.body2.fontSize,
    md: theme.typography.body1.fontSize,
    lg: theme.typography.h5.fontSize,
  };

  const defaultSeparator = <ChevronRight size={12} className="text-base-icon-color-muted" />;
  const finalSeparator = separator || defaultSeparator;

  return (
    <MuiBreadcrumbs
      separator={finalSeparator}
      {...props}
      sx={{
        fontSize: sizeConfig[size],
        ...props.sx,
      }}
    >
      {items.map((item, index) => {
        const itemState = item.current ? 'current' : item.disabled ? 'disabled' : 'default';

        const getColor = () => {
          switch (itemState) {
            case 'current':
              return theme.custom.base.text.primary;
            case 'disabled':
              return theme.custom.base.text.muted;
            default:
              return theme.custom.base.text.secondary;
          }
        };

        if (item.href && !item.disabled && !item.current) {
          return (
            <Link
              key={index}
              href={item.href}
              underline="hover"
              sx={{
                color: getColor(),
                fontSize: 'inherit',
                '&:hover': {
                  color: theme.custom.base.text.primary,
                },
              }}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Typography
            key={index}
            sx={{
              color: getColor(),
              fontSize: 'inherit',
              fontWeight: item.current ? 'medium' : 'normal',
              cursor: item.disabled ? 'not-allowed' : 'default',
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

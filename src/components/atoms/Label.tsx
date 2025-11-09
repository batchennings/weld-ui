import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type LabelProps = Omit<TypographyProps<'label'>, 'component'> & {
  htmlFor?: string;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, children, sx, ...props }) => {
  const theme = useTheme();

  return (
    <Typography
      component="label"
      htmlFor={htmlFor}
      variant="body1"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: theme.custom.base.text.primary,
        fontSize: theme.typography.body1.fontSize,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

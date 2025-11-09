import React from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Button } from '@/components/atoms/Button';
import { IconProps } from '@/types/icons';

export type AlertType = 'info' | 'warning' | 'alert' | 'success';

export type AlertProps = Omit<MuiAlertProps, 'severity'> & {
  Icon?: React.ComponentType<IconProps>;
  title?: string;
  content: string;
  action?: string;
  type?: AlertType;
};

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  Icon,
  title,
  content,
  action,
  ...props
}) => {
  const theme = useTheme();

  // Map type to MUI severity (but we'll override colors)
  const severity = type === 'alert' ? 'error' : type;

  // Get color configuration based on type
  const getColorConfig = () => {
    switch (type) {
      case 'info':
        return {
          bg: theme.custom.message.info.bg,
          border: theme.custom.message.info.text,
          text: theme.custom.message.info.text,
        };
      case 'warning':
        return {
          bg: theme.custom.message.warning.bg,
          border: theme.custom.message.warning.text,
          text: theme.custom.message.warning.text,
        };
      case 'alert':
        return {
          bg: theme.custom.message.alert.bg,
          border: theme.custom.message.alert.text,
          text: theme.custom.message.alert.text,
        };
      case 'success':
        return {
          bg: theme.custom.message.success.bg,
          border: theme.custom.message.success.text,
          text: theme.custom.message.success.text,
        };
      default:
        return {
          bg: theme.custom.message.info.bg,
          border: theme.custom.message.info.text,
          text: theme.custom.message.info.text,
        };
    }
  };

  const colors = getColorConfig();

  return (
    <MuiAlert
      {...props}
      severity={severity as 'info' | 'warning' | 'error' | 'success'}
      icon={Icon ? <Icon size={24} /> : false}
      sx={{
        backgroundColor: colors.bg,
        borderLeft: `4px solid ${colors.border}`,
        borderRadius: '4px',
        color: colors.text,
        px: 5,
        py: 3.5,
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 2.5,
        '& .MuiAlert-icon': {
          color: colors.text,
          padding: 0,
          marginRight: 0,
        },
        '& .MuiAlert-message': {
          flexGrow: 1,
          padding: 0,
        },
        '& .MuiAlert-action': {
          padding: 0,
          marginRight: 0,
        },
      }}
      action={
        action ? (
          <Box display="flex">
            <Button label={action} type="secondary" size="md" />
          </Box>
        ) : null
      }
    >
      <Box display="flex" flexDirection="column" flexGrow={1}>
        {title && (
          <Typography variant="body1" fontWeight="bold">
            {title}
          </Typography>
        )}
        <Typography variant="body1">{content}</Typography>
      </Box>
    </MuiAlert>
  );
};

Alert.displayName = 'Alert';

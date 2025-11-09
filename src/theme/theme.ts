import { createTheme, ThemeOptions } from '@mui/material/styles';

// Design tokens from Tailwind config
const lightModeColors = {
  // Base colors
  base: {
    bg: {
      light: '#f8fafc',
      lighter: '#f1f5f9',
      regular: '#ffffff',
    },
    border: '#d1d5db',
    icon: {
      accent: '#2563eb',
      muted: '#94a3b8',
      primary: '#020617',
      secondary: '#64748b',
    },
    text: {
      accent: '#2563eb',
      muted: '#94a3b8',
      primary: '#020617',
      secondary: '#64748b',
    },
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
  },
  // Button colors
  button: {
    filled: {
      bg: '#2563eb',
      bgHover: '#3b82f6',
      bgDisabled: '#60a5fa',
      text: '#ffffff',
      textHover: '#ffffff',
      textDisabled: '#bfdbfe',
      icon: '#ffffff',
    },
    outline: {
      bg: '#ffffff',
      bgHover: '#ffffff',
      bgDisabled: '#93c5fd',
      border: '#d1d5db',
      borderHover: '#2563eb',
      borderFocus: '#2563eb',
      text: '#111827',
      textHover: '#2563eb',
      textDisabled: '#d1d5db',
      icon: '#111827',
    },
    destructive: {
      bg: '#dc2626',
      bgHover: '#EF4444',
      bgDisabled: '#f87171',
      text: '#ffffff',
      textHover: '#ffffff',
      textDisabled: '#fecaca',
      icon: '#ffffff',
    },
    link: {
      text: '#1d4ed8',
      textHover: '#3b82f6',
      textDisabled: '#93c5fd',
    },
    ghost: {
      text: '#111827',
      textHover: '#2563eb',
    },
    focus: {
      outline: '#dbeafe',
      outlineDestructive: '#fee2e2',
    },
  },
  // Form colors
  form: {
    bg: '#ffffff',
    bgActive: '#2563eb',
    bgAlert: '#fef2f2',
    bgDisabled: '#f3f4f6',
    border: '#d1d5db',
    borderFocus: '#2563eb',
    borderFocusOut: '#dbeafe',
    borderAlertFocus: '#dc2626',
    borderAlertFocusOut: '#fee2e2',
    text: {
      primary: '#111827',
      secondary: '#64748b',
      description: '#64748b',
      alert: '#dc2626',
      alertDescription: '#ffffff',
    },
    checkbox: {
      bgActive: '#2563eb',
      bgDisabled: '#60a5fa',
      iconFilled: '#ffffff',
      iconDisabled: '#93c5fd',
    },
    select: {
      bgHover: '#f3f4f6',
      iconActiveFilter: '#2563eb',
    },
  },
  // Message colors
  message: {
    info: {
      bg: '#ecfeff',
      border: '#0891b2',
      text: '#155e75',
    },
    warning: {
      bg: '#fffbeb',
      border: '#d97706',
      text: '#92400e',
    },
    alert: {
      bg: '#fef2f2',
      border: '#dc2626',
      text: '#991b1b',
    },
    success: {
      bg: '#f0fdf4',
      border: '#16a34a',
      text: '#15803d',
    },
  },
  // Pill colors
  pill: {
    red: {
      filled: { bg: '#dc2626', text: '#ffffff' },
      light: { bg: '#fee2e2', text: '#991b1b', icon: '#b91c1c' },
      stroke: { bg: '#fef2f2', border: '#f87171', text: '#b91c1c', icon: '#dc2626' },
    },
    green: {
      filled: { bg: '#166534', text: '#ffffff' },
      light: { bg: '#dcfce7', text: '#14532d', icon: '#166534' },
      stroke: { bg: '#f0fdf4', border: '#4ade80', text: '#14532d', icon: '#15803d' },
    },
    amber: {
      filled: { bg: '#d97706', text: '#ffffff' },
      light: { bg: '#fef3c7', text: '#92400e', icon: '#b45309' },
      stroke: { bg: '#fffbeb', border: '#fbbf24', text: '#b45309', icon: '#d97706' },
    },
    blue: {
      filled: { bg: '#2563eb', text: '#ffffff' },
      light: { bg: '#dbeafe', text: '#1e40af', icon: '#1d4ed8' },
      stroke: { bg: '#eff6ff', border: '#60a5fa', text: '#1d4ed8', icon: '#2563eb' },
    },
    gray: {
      filled: { bg: '#4b5563', text: '#ffffff' },
      light: { bg: '#f9fafb', text: '#1f2937', icon: '#374151' },
      stroke: { bg: '#f9fafb', border: '#d1d5db', text: '#374151', icon: '#4b5563' },
    },
  },
  // Table colors
  table: {
    bg: '#ffffff',
    bgHover: '#f3f4f6',
    bgOdd: '#f9fafb',
    bgHighlight: '#eff6ff',
    bgSelected: '#1d4ed8',
    bgSeparator: '#f3f4f6',
    border: '#e5e7eb',
    borderOdd: '#e5e7eb',
    borderHighlight: '#dbeafe',
    borderSelected: '#1e3a8a',
    text: {
      primary: '#020617',
      secondary: '#64748b',
      muted: '#64748b',
      highlight: '#1e3a8a',
      highlightMuted: '#64748b',
      selected: '#ffffff',
      selectedMuted: '#f1f5f9',
    },
  },
  // Tab colors
  tab: {
    bg: '#ffffff',
    border: '#ffffff',
    borderActive: '#2563eb',
    text: '#64748b',
    textActive: '#2563eb',
    textInactive: '#cbd5e1',
  },
  // Switch colors
  switch: {
    bg: '#d1d5db',
    bgActive: '#2563eb',
    borderFocusOut: '#dbeafe',
    thumb: {
      bg: '#ffffff',
      bgDisabled: '#e5e7eb',
      bgActiveDisabled: '#93c5fd',
    },
  },
  // List colors
  list: {
    bg: '#ffffff',
    bgHover: '#f3f4f6',
    border: '#d1d5db',
  },
  // KBD colors
  kbd: {
    bg: '#f3f4f6',
    text: '#64748b',
  },
};

const darkModeColors = {
  // Base colors
  base: {
    bg: {
      light: '#182333',
      lighter: '#1e293b',
      regular: '#0f172a',
    },
    border: '#374151',
    icon: {
      accent: '#ffffff',
      muted: '#94a3b8',
      primary: '#ffffff',
      secondary: '#cbd5e1',
    },
    text: {
      accent: '#ffffff',
      muted: '#94a3b8',
      primary: '#ffffff',
      secondary: '#cbd5e1',
    },
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
  },
  // Button colors
  button: {
    filled: {
      bg: '#2563eb',
      bgHover: '#3b82f6',
      bgDisabled: '#60a5fa',
      text: '#ffffff',
      textHover: '#ffffff',
      textDisabled: '#93c5fd',
      icon: '#ffffff',
    },
    outline: {
      bg: '#111827',
      bgHover: '#111827',
      bgDisabled: '#60a5fa',
      border: '#4b5563',
      borderHover: '#ffffff',
      borderFocus: '#3b82f6',
      text: '#ffffff',
      textHover: '#ffffff',
      textDisabled: '#4b5563',
      icon: '#ffffff',
    },
    destructive: {
      bg: '#dc2626',
      bgHover: '#dc2626',
      bgDisabled: '#f87171',
      text: '#ffffff',
      textHover: '#ffffff',
      textDisabled: '#fca5a5',
      icon: '#ffffff',
    },
    link: {
      text: '#93c5fd',
      textHover: '#dbeafe',
      textDisabled: '#64748b',
    },
    ghost: {
      text: '#ffffff',
      textHover: '#ffffff',
    },
    focus: {
      outline: '#1e3a8a',
      outlineDestructive: '#7f1d1d',
    },
  },
  // Form colors
  form: {
    bg: '#1f2937',
    bgActive: '#2563eb',
    bgAlert: '#450a0a',
    bgDisabled: '#374151',
    border: '#374151',
    borderFocus: '#2563eb',
    borderFocusOut: '#1e3a8a',
    borderAlertFocus: '#991b1b',
    borderAlertFocusOut: '#fee2e2',
    text: {
      primary: '#ffffff',
      secondary: '#cbd5e1',
      description: '#cbd5e1',
      alert: '#ef4444',
      alertDescription: '#fecaca',
    },
    checkbox: {
      bgActive: '#2563eb',
      bgDisabled: '#93c5fd',
      iconFilled: '#ffffff',
      iconDisabled: '#60a5fa',
    },
    select: {
      bgHover: '#475569',
      iconActiveFilter: '#2563eb',
    },
  },
  // Message colors
  message: {
    info: {
      bg: '#083344',
      border: '#0891b2',
      text: '#22d3ee',
    },
    warning: {
      bg: '#450a0a',
      border: '#dc2626',
      text: '#f87171',
    },
    alert: {
      bg: '#450a0a',
      border: '#dc2626',
      text: '#f87171',
    },
    success: {
      bg: '#052e16',
      border: '#16a34a',
      text: '#4ade80',
    },
  },
  // Pill colors
  pill: {
    red: {
      filled: { bg: '#dc2626', text: '#ffffff' },
      light: { bg: '#450a0a', text: '#fecaca', icon: '#fca5a5' },
      stroke: { bg: '#450a0a', border: '#991b1b', text: '#fecaca', icon: '#fca5a5' },
    },
    green: {
      filled: { bg: '#166534', text: '#ffffff' },
      light: { bg: '#052e16', text: '#bbf7d0', icon: '#86efac' },
      stroke: { bg: '#052e16', border: '#166534', text: '#bbf7d0', icon: '#86efac' },
    },
    amber: {
      filled: { bg: '#d97706', text: '#ffffff' },
      light: { bg: '#451a03', text: '#fde68a', icon: '#fcd34d' },
      stroke: { bg: '#451a03', border: '#92400e', text: '#fde68a', icon: '#fcd34d' },
    },
    blue: {
      filled: { bg: '#2563eb', text: '#ffffff' },
      light: { bg: '#172554', text: '#bfdbfe', icon: '#93c5fd' },
      stroke: { bg: '#172554', border: '#1e40af', text: '#bfdbfe', icon: '#93c5fd' },
    },
    gray: {
      filled: { bg: '#4b5563', text: '#ffffff' },
      light: { bg: '#030712', text: '#e5e7eb', icon: '#d1d5db' },
      stroke: { bg: '#030712', border: '#1f2937', text: '#e5e7eb', icon: '#d1d5db' },
    },
  },
  // Table colors
  table: {
    bg: '#1e293b',
    bgHover: '#1e293b',
    bgOdd: '#182333',
    bgHighlight: '#1e3a8a',
    bgSelected: '#1d4ed8',
    bgSeparator: '#182333',
    border: '#334155',
    borderOdd: '#64748b',
    borderHighlight: '#1d4ed8',
    borderSelected: '#1d4ed8',
    text: {
      primary: '#ffffff',
      secondary: '#cbd5e1',
      muted: '#94a3b8',
      highlight: '#dbeafe',
      highlightMuted: '#cbd5e1',
      selected: '#ffffff',
      selectedMuted: '#f1f5f9',
    },
  },
  // Tab colors
  tab: {
    bg: '#111827',
    border: '#111827',
    borderActive: '#ffffff',
    text: '#d1d5db',
    textActive: '#ffffff',
    textInactive: '#6b7280',
  },
  // Switch colors
  switch: {
    bg: '#374151',
    bgActive: '#2563eb',
    borderFocusOut: '#1e3a8a',
    thumb: {
      bg: '#ffffff',
      bgDisabled: '#4b5563',
      bgActiveDisabled: '#93c5fd',
    },
  },
  // List colors
  list: {
    bg: '#111827',
    bgHover: '#1f2937',
    border: '#374151',
  },
  // KBD colors
  kbd: {
    bg: '#1f2937',
    text: '#cbd5e1',
  },
};

// Create light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#64748b',
      light: '#94a3b8',
      dark: '#475569',
    },
    error: {
      main: '#dc2626',
      light: '#f87171',
      dark: '#b91c1c',
    },
    warning: {
      main: '#d97706',
      light: '#fbbf24',
      dark: '#b45309',
    },
    info: {
      main: '#0891b2',
      light: '#22d3ee',
      dark: '#155e75',
    },
    success: {
      main: '#16a34a',
      light: '#4ade80',
      dark: '#15803d',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#020617',
      secondary: '#64748b',
      disabled: '#94a3b8',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSize: 13,
    h1: { fontSize: '29px', lineHeight: 1.2 },
    h2: { fontSize: '24px', lineHeight: 1.3 },
    h3: { fontSize: '19px', lineHeight: 1.4 },
    h4: { fontSize: '18px', lineHeight: 1.4 },
    h5: { fontSize: '15px', lineHeight: 1.5 },
    h6: { fontSize: '13px', lineHeight: 1.5 },
    body1: { fontSize: '13px', lineHeight: 1.5 },
    body2: { fontSize: '11px', lineHeight: 1.5 },
    caption: { fontSize: '9px', lineHeight: 1.4 },
    button: { fontSize: '13px', textTransform: 'none' },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
    '0px 8px 24px rgba(0, 0, 0, 0.15)',
  ],
  custom: lightModeColors,
} as ThemeOptions & { custom: typeof lightModeColors });

// Create dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#cbd5e1',
      light: '#e2e8f0',
      dark: '#94a3b8',
    },
    error: {
      main: '#dc2626',
      light: '#f87171',
      dark: '#b91c1c',
    },
    warning: {
      main: '#d97706',
      light: '#fbbf24',
      dark: '#b45309',
    },
    info: {
      main: '#0891b2',
      light: '#22d3ee',
      dark: '#155e75',
    },
    success: {
      main: '#16a34a',
      light: '#4ade80',
      dark: '#15803d',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cbd5e1',
      disabled: '#94a3b8',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSize: 13,
    h1: { fontSize: '29px', lineHeight: 1.2 },
    h2: { fontSize: '24px', lineHeight: 1.3 },
    h3: { fontSize: '19px', lineHeight: 1.4 },
    h4: { fontSize: '18px', lineHeight: 1.4 },
    h5: { fontSize: '15px', lineHeight: 1.5 },
    h6: { fontSize: '13px', lineHeight: 1.5 },
    body1: { fontSize: '13px', lineHeight: 1.5 },
    body2: { fontSize: '11px', lineHeight: 1.5 },
    caption: { fontSize: '9px', lineHeight: 1.4 },
    button: { fontSize: '13px', textTransform: 'none' },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
    '0px 8px 24px rgba(0, 0, 0, 0.5)',
  ],
  custom: darkModeColors,
} as ThemeOptions & { custom: typeof darkModeColors });

// TypeScript module augmentation for custom theme properties
declare module '@mui/material/styles' {
  interface Theme {
    custom: typeof lightModeColors;
  }
  interface ThemeOptions {
    custom?: typeof lightModeColors;
  }
}

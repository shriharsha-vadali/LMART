import { Platform } from 'react-native';

const tintColorLight = '#4f46e5'; // Indigo 600
const tintColorDark = '#facc15'; // Amber 400 (Premium feel)

export const Colors = {
  light: {
    text: '#111827',
    background: '#ffffff',
    tint: tintColorLight,
    icon: '#6b7280',
    tabIconDefault: '#9ca3af',
    tabIconSelected: tintColorLight,
    card: '#f9fafb',
    border: '#e5e7eb',
    success: '#22c55e',
    error: '#ef4444',
    muted: '#6b7280',
  },
  dark: {
    text: '#f8fafc',
    background: '#020617', // Deeper blue-black
    tint: tintColorDark,
    icon: '#94a3b8',
    tabIconDefault: '#475569',
    tabIconSelected: tintColorDark,
    card: '#0f172a', // Slate 900
    border: '#1e293b',
    success: '#4ade80',
    error: '#f87171',
    muted: '#64748b',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'System',
    serif: 'Georgia',
    rounded: 'SF Pro Rounded',
    mono: 'Courier',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "Inter, system-ui, -apple-system, sans-serif",
    serif: "Georgia, serif",
    rounded: "system-ui, sans-serif",
    mono: "monospace",
  },
});

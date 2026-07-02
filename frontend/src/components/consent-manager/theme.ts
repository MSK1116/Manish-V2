import type { Theme } from '@c15t/nextjs';

/**
 * Minimal Theme
 *
 * A clean, light theme with subtle grays and refined typography.
 * Uses standard CSS (no Tailwind dependency).
 *
 * Customize the colors, typography, and slots below to match your design.
 *
 * @see https://c15t.com/docs/customization/theming
 */
export const theme: Theme = {
	colors: {
		primary: '#18181b',
		primaryHover: '#27272a',
		surface: '#ffffff',
		surfaceHover: '#fafafa',
		border: '#e4e4e7',
		borderHover: '#d4d4d8',
		text: '#18181b',
		textMuted: '#71717a',
		textOnPrimary: '#ffffff',
		switchTrack: '#d4d4d8',
		switchTrackActive: '#18181b',
		switchThumb: '#ffffff',
	},
	dark: {
		primary: '#fafafa',
		primaryHover: '#e4e4e7',
		surface: '#0a0a0a',
		surfaceHover: '#171717',
		border: '#27272a',
		borderHover: '#3f3f46',
		text: '#fafafa',
		textMuted: '#a1a1aa',
		textOnPrimary: '#09090b',
	},
	typography: {
		fontFamily: 'var(--font-inter), system-ui, sans-serif',
		fontSize: {
			sm: '0.8125rem',
			base: '0.875rem',
			lg: '1rem',
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			semibold: 500,
		},
		lineHeight: {
			tight: '1.3',
			normal: '1.5',
			relaxed: '1.7',
		},
	},
	radius: {
		sm: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		full: '9999px',
	},
	shadows: {
		sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
		md: '0 2px 8px rgba(0, 0, 0, 0.06)',
		lg: '0 4px 16px rgba(0, 0, 0, 0.08)',
	},
	slots: {
		consentBannerCard: {
			style: {
				border: '1px solid var(--c15t-border)',
				boxShadow: 'var(--c15t-shadow-sm)',
			},
		},
		consentDialogCard: {
			style: {
				border: '1px solid var(--c15t-border)',
				boxShadow: 'var(--c15t-shadow-lg)',
			},
		},
		buttonPrimary: {
			style: {
				borderRadius: 'var(--c15t-radius-sm)',
				boxShadow: 'none',
				fontWeight: 500,
			},
		},
		buttonSecondary: {
			style: {
				borderRadius: 'var(--c15t-radius-sm)',
				backgroundColor: 'transparent',
				border: '1px solid var(--c15t-border)',
				color: 'var(--c15t-text-muted)',
				boxShadow: 'none',
				fontWeight: 500,
			},
		},
	},
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        csred: '#CE3234',
        csgrey: '#222222',
        cslightgrey: '#484848',
        background: '#222222',
        foreground: '#353535',
        border: '#484848',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0A0',
        discordPurple: '#5865F2',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
        'tomorrow': ['"Tomorrow"', 'monospace'],
      },
      fontWeight: {
        'space-mono-light': '300',
        'space-mono-regular': '400',
        'space-mono-bold': '700',
        'tomorrow-bold': '700',
      },
    },
  },
  plugins: [],
}

export default config

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
        background: '#222222',
        foreground: '#353535',
        border: '#484848',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0A0',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

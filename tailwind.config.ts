import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#404040',
        surface: '#f5f5f5',
        accent: '#EB327F',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        background: '#282828',
      },
    },
  },
  plugins: [],
}
export default config

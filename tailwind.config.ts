import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif']
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        'primary-blue': 'var(--color-primary-blue)',
        lightGray: 'var(--color-lightGray)',
        deepGray: 'var(--color-deep-gray)'
      }
    }
  }
}

export default config

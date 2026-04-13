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
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        large: '1.125rem', // 18px
        huge: '2.25rem' // 36px
      }
    }
  }
}

export default config

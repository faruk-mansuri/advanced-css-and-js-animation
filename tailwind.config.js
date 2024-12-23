/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        social_links: {
          '0%': { left: '-110%', top: '90%' },
          '50%': { left: '15%', top: '-50%' },
          '100%': { left: '-10%', top: '-20%' },
        },
      },
      animation: {
        social_links_animation: 'social_links 0.7s 1 forwards',
      },
      transitionDelay: {
        1200: '1200ms',
      },
      // backgroundColor doesn’t support gradients directly. Instead, you should extend the backgroundImage property.
      backgroundImage: {
        'glassMorphism-before':
          'linear-gradient(to left, rgba(255, 255, 255, 0.149), transparent)',
      },
      boxShadow: {
        'custom-shadow-left': '-100px 0 0 #eab308',
        'hover-custom-shadow-left': '30px 0 0 #eab308',
        'custom-shadow-right': '100px 0 0 #eab308',
        'hover-custom-shadow-right': '-30px 0 0 #eab308',
        // position from element, vertical distance, blur effect, color
        'line-shadow-button':
          '0 0 10px #1e40af, 0 0 30px #1e40af, 0 0 60px #1e40af',
        'line-shadow-arrow':
          '0 0 10px #1e40af, 0 0 20px #1e40af, 0 0 30px #1e40af, 0 0 50px #1e40af, 0 0 100px #1e40af',
        'glass-morphism': '0 15px 35px rgba(0,0,0,0.2)',
        'glass-morphism-back-shadow':
          '0 0 5px #f43f5e, 0 0 15px #f43f5e, 0 0 30px #f43f5e, 0 0 60px #f43f5e',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // require('tailwindcss-3d')({ legacy: true }),
    require('@xpd/tailwind-3dtransforms'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-circle': {
          clipPath: 'circle(150px at 80% 20%)',
        },
        '.hover-clip-circle': {
          clipPath: 'circle(300px at 80% -20%)',
        },
      });
    },
  ],
};

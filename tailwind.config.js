/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
        fontSize: {
          'title-01': ['20px', {
            lineHeight: '140%',
            letterSpacing: '-0.005em',
          }],

          'title-02': ['18px', {
            lineHeight: '140%',
            letterSpacing: '-0.005em',
          }],

          'body-01': ['16px', {
            lineHeight: '150%',
            letterSpacing: '0em',
          }],

          'body-02': ['14px', {
            lineHeight: '150%',
            letterSpacing: '0em',
          }],

          'body-03': ['12px', {
            lineHeight: '150%',
            letterSpacing: '0em',
          }],

          'caption-01': ['10px', {
            lineHeight: '140%',
            letterSpacing: '0.2px',
          }],

          'caption-02': ['8px', {
            lineHeight: '140%',
            letterSpacing: '0.2px',
          }],
        },

        fontWeight: {
          medium: '500',
          semibold: '600',
          bold: '700',
        },

        colors: {
          black: "#222222",
          white: "#FDFDFD",
          background: "#F8F8F8",
          gray: {
            100: "#E2E2E2",
            300: "#CBCBCB",
            500: "#9C9C9C",
            700: "#787878",
          },
          green: {
            300: "#A8D881",
            500: "#7AAD51",
          },
          red: {
            300: "#F6A6A6",
            500: "#F16C6C"
          }
          
        },      
    },
  },
  plugins: [],
}


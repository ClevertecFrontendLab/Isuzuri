import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    xl: '1920px',
    lg: '1440px',
    md: '768px',
    sm: '360px',
};

const theme = extendTheme({
    breakpoints,
    colors: {
        white: '#ffffff',
        blackAlpha: {
            100: 'rgba(0, 0, 0, 0.06)',
            50: 'rgba(0, 0, 0, 0.04)',
        },
        lime: {
            light: '#eaffc7',
            dark: '#2db100',
            main: '#c4ff61',
            yellow: '#ffffd3',
            300: 'rgba(0, 0, 0, 0.16)',
            150: '#d7ff94',
            50: '#FFFFD3',
        },
        gray: {
            light: 'rgba(0, 0, 0, 0.24)',
            dark: 'rgba(0, 0, 0, 0.64)',
            main: '#2d3748',
        },
    },
    styles: {
        global: {
            '*': {
                scrollbarWidth: 'thin',
                scrollbarColor: 'blackAlpha.300 blackAlpha.50',
            },
            '&::-webkit-scrollbar': {
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'blackAlpha.50',
                borderRadius: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: 'blackAlpha.300',
                borderRadius: '8px',
            },
        },
    },
    components: {
        Badge: {
            baseStyle: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textTransform: 'none',
                borderRadius: '4px',
                padding: '2px 8px',
                height: '24px',
                fontWeight: '400',
            },
            variants: {
                lime: {
                    bg: 'lime.150',
                },
                black: {
                    bg: 'blackAlpha.100',
                },
            },
        },
    },
});

export default theme;

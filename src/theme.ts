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
        blackAlpha: 'rgba(0, 0, 0, 0.06)',
        lime: {
            light: '#eaffc7',
            dark: '#2db100',
            main: '#c4ff61',
            yellow: '#ffffd3',
            150: '#d7ff94',
        },
        gray: {
            light: 'rgba(0, 0, 0, 0.24)',
            dark: 'rgba(0, 0, 0, 0.64)',
            main: '#2d3748',
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
            },
            variants: {
                lime: {
                    bg: 'lime.150',
                },
                black: {
                    bg: 'blackAlpha',
                },
            },
        },
    },
});

export default theme;

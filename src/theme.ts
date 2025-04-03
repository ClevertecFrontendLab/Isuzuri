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
        lime: {
            light: '#eaffc7',
            dark: '#2db100',
            main: '#c4ff61',
            yellow: '#ffffd3',
        },
        gray: {
            light: 'rgba(0, 0, 0, 0.24)',
            dark: 'rgba(0, 0, 0, 0.64)',
        },
    },
});

export default theme;

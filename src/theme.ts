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
        whiteAlpha: {
            100: 'rgba(255, 255, 255, 0.06)',
        },
        blackAlpha: {
            900: 'rgba(0, 0, 0, 0.92)',
            800: 'rgba(0, 0, 0, 0.8)',
            600: 'rgba(0, 0, 0, 0.48)',
            200: 'rgba(0, 0, 0, 0.2)',
            100: 'rgba(0, 0, 0, 0.06)',
            50: 'rgba(0, 0, 0, 0.04)',
        },
        lime: {
            light: '#eaffc7',
            dark: '#2db100',
            main: '#c4ff61',
            yellow: '#ffffd3',
            600: 'rgba(45, 177, 0, 1)',
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
                w: '8px',
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
                p: '2px 8px',
                h: '24px',
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
        Card: {
            parts: ['container', 'header', 'body', 'footer', 'stack'],
            baseStyle: {
                borderRadius: '8px',
                container: {
                    gap: '24px',
                    overflow: 'hidden',
                },
                header: {
                    p: '0px',
                },
                body: {
                    p: '0px',
                    '& > .chakra-heading': {
                        fontSize: '20px',
                        lineHeight: '28px',
                    },
                    '& > .chakra-text': {
                        marginTop: '8px',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: '400',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                },
                footer: {
                    p: '0px',
                },
            },
            variants: {
                withImageUp: {
                    container: {
                        maxW: '320px',
                    },
                    body: {
                        p: '16px 0px 0px 0px',
                    },
                    footer: {
                        justifyContent: 'space-between',
                    },
                },
                withImageLeft: {
                    container: {
                        maxW: '668px',
                        maxH: '244px',
                        gap: '0px',
                        p: '0px',
                        '& > .chakra-stack': {
                            p: '20px 24px',
                        },
                    },
                    header: {
                        display: 'flex',
                        justifyContent: 'space-between',
                    },

                    footer: {
                        gap: '8px',
                        justifyContent: 'end',
                    },
                },
                withUser: {
                    container: {
                        maxW: '320px',
                    },
                    body: {
                        p: '16px 0px 0px 0px',
                    },
                    footer: {
                        gap: '8px',
                    },
                },
                withoutImage: {
                    container: {
                        maxW: '320px',
                    },
                    header: {
                        display: 'flex',
                        justifyContent: 'space-between',
                    },
                    footer: {
                        gap: '8px',
                        justifyContent: 'end',
                    },
                },
                withText: {
                    container: {
                        maxW: '668px',
                        p: {
                            md: '24px',
                            sm: '16px 12px',
                        },
                    },
                },
                withTextAndTag: {
                    container: {
                        maxW: '320px',
                        p: {
                            md: '24px 24px 20px 24px',
                            sm: '12px',
                        },
                    },
                    footer: {
                        display: 'flex',
                        justifyContent: 'space-between',
                    },
                },
            },
        },
        Button: {
            baseStyle: {
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                p: '6px 12px',
            },
            variants: {
                black: {
                    bg: 'blackAlpha.900',
                    border: '1px solid',
                    borderColor: 'blackAlpha.200',
                    color: 'white',
                },
                white: {
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blackAlpha.600',
                    color: 'blackAlpha.800',
                },
                lime: {
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'lime.600',
                    color: 'lime.600',
                },
            },
            sizes: {
                16: {
                    h: '16px',
                    p: '4px 8px',
                    fontSize: '12px',
                    lineHeight: '16px',
                },
                24: {
                    h: '24px',
                    p: '4px 8px',
                },
            },
        },
    },
});

export default theme;

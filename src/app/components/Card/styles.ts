export const cardStyles = {
    parts: ['container', 'header', 'body', 'footer', 'heading', 'text'], // добавляем новые части
    baseStyle: {
        borderRadius: '8px',
        container: {
            overflow: 'hidden',
            maxW: '320px',
        },
        heading: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '500',
        },
        text: {
            marginTop: '8px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
        },
    },
    variants: {
        withImageUp: {
            header: {
                p: '0',
            },
            body: {
                p: '16px 24px',
            },
            footer: {
                p: '24px 24px 20px 24px',
                justifyContent: 'space-between',
            },
            // Можно также определить варианты для heading и text
            heading: {
                color: 'gray.main',
            },
            text: {
                color: 'gray.dark',
            },
        },
    },
};

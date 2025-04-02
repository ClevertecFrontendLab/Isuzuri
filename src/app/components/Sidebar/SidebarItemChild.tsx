import { Box } from '@chakra-ui/react';

const SidebarItemChild = ({
    child,
    activeChild,
    setActiveChild,
}: {
    child: string;
    activeChild: string;
    setActiveChild: (child: string) => void;
}) => (
    <Box
        key={child}
        padding='0.375rem 0.5rem'
        onClick={() => setActiveChild(child)}
        cursor='pointer'
        fontWeight={activeChild === child ? 'bold' : 'normal'}
    >
        <Box
            as='span'
            width='0px'
            borderLeft={activeChild === child ? '8px solid var(--lime)' : '1px solid var(--lime)'}
            marginLeft={activeChild === child ? '1.5rem' : '2rem'}
            marginRight='0.75rem'
        />
        {child}
    </Box>
);

export default SidebarItemChild;

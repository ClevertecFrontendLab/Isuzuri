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
    <Box key={child} padding='6px 8px' onClick={() => setActiveChild(child)} cursor='pointer'>
        <Box
            as='span'
            width='0px'
            borderLeft={activeChild === child ? '8px solid #C4FF61' : '1px solid #C4FF61'}
            marginLeft={activeChild === child ? '24px' : '32px'}
            marginRight='12px'
        ></Box>
        {child}
    </Box>
);

export default SidebarItemChild;

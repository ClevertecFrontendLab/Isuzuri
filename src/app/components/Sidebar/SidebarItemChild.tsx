import { Box, Text } from '@chakra-ui/react';

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
        padding='6px 8px'
        onClick={() => setActiveChild(child)}
        cursor='pointer'
        _hover={{ bgColor: 'lime.50' }}
    >
        <Box
            as='span'
            width='0px'
            borderLeft={activeChild === child ? '8px solid' : '1px solid'}
            borderColor='lime.main'
            marginLeft={activeChild === child ? '24px' : '32px'}
            marginRight='11px'
        />
        <Text as='span' fontWeight={activeChild === child ? 'bold' : 'normal'}>
            {child}
        </Text>
    </Box>
);

export default SidebarItemChild;

import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    Text,
} from '@chakra-ui/react';

import SidebarItemChild from './SidebarItemChild';

const SidebarItem = ({
    item,
    activeItem,
    setActiveItem,
    activeChild,
    setActiveChild,
}: {
    item: { icon: string; label: string; children: string[] };
    activeItem: string;
    setActiveItem: (item: string) => void;
    activeChild: string;
    setActiveChild: (child: string) => void;
}) => (
    <AccordionItem key={item.label} border='none'>
        <AccordionButton
            gap='12px'
            p='12px 8px'
            bgColor={activeItem === item.label ? 'lime.light' : 'white'}
            cursor='pointer'
            onClick={() => setActiveItem(item.label === activeItem ? '' : item.label)}
        >
            <Image src={item.icon} />
            <Box as='span' flex='1' textAlign='left'>
                <Text fontSize='16px' fontWeight={activeItem === item.label ? '700' : '500'}>
                    {item.label}
                </Text>
            </Box>
            <AccordionIcon size='16px' />
        </AccordionButton>
        <AccordionPanel p='0px'>
            {item.children.map((child: string) => (
                <SidebarItemChild
                    key={child}
                    child={child}
                    activeChild={activeChild}
                    setActiveChild={setActiveChild}
                />
            ))}
        </AccordionPanel>
    </AccordionItem>
);

export default SidebarItem;

import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
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
    <AccordionItem key={item.label} onClick={() => setActiveItem(item.label)}>
        <AccordionButton
            border='0px'
            p='12px 8px'
            bgColor={activeItem === item.label ? '#EAFFC7' : 'white'}
            cursor='pointer'
        >
            <Image src={item.icon} />
            <Box as='span' flex='1' textAlign='left' margin='auto 12px'>
                {item.label}
            </Box>
            <AccordionIcon size='16px' />
        </AccordionButton>
        <AccordionPanel>
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

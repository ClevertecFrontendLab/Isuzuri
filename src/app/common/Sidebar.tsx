import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box } from '@chakra-ui/react';
import React from 'react';

import { items } from '../constants/sidebar';

const Sidebar = () => (
    <Accordion allowToggle>
        {items.map((item: { icon: React.ReactNode; label: string }) => (
            <AccordionItem key={item.label}>
                <h2>
                    <AccordionButton>
                        {item.icon}
                        <Box as='span' flex='1' textAlign='left'>
                            {item.label}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
            </AccordionItem>
        ))}
    </Accordion>
);

export default Sidebar;

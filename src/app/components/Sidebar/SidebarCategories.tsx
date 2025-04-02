import { Accordion } from '@chakra-ui/react';
import { useState } from 'react';

import { items } from '../../constants/sidebar';
import SidebarItem from './SidebarItem';

const SidebarCategories = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const [activeChild, setActiveChild] = useState<string>('');

    return (
        <Accordion
            allowToggle
            p='0.625rem 1rem 0.625rem 0.625rem'
            bgColor='white'
            overflowY='scroll'
        >
            {items.map((item: { icon: string; label: string; children: string[] }) => (
                <SidebarItem
                    key={item.label}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    activeChild={activeChild}
                    setActiveChild={setActiveChild}
                />
            ))}
        </Accordion>
    );
};

export default SidebarCategories;

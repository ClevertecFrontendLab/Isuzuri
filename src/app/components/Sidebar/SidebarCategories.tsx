import { Accordion } from '@chakra-ui/react';
import { useState } from 'react';

import { items } from '../../constants/sidebarItems';
import SidebarItem from './SidebarItem';

const SidebarCategories = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const [activeChild, setActiveChild] = useState<string>('');

    return (
        <Accordion
            allowToggle
            p='10px 16px 10px 10px'
            overflowY='auto'
            boxShadow={activeItem && '0px 2px 4px -1px #0000000F, 0px 4px 6px -1px #0000001A'}
            borderBottomRadius={activeItem && '12px'}
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

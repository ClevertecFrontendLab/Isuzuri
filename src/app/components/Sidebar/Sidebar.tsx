import { Accordion } from '@chakra-ui/react';
import { useState } from 'react';

import { items } from '../../constants/sidebar';
import SidebarItem from './SidebarItem';
const Sidebar = () => {
    const [activeItem, setActiveItem] = useState<string>('');

    return (
        <Accordion allowToggle p='10px 16px 10px 10px' bgColor='white'>
            {items.map((item: { icon: string; label: string; children: string[] }) => (
                <SidebarItem
                    key={item.label}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            ))}
        </Accordion>
    );
};

export default Sidebar;

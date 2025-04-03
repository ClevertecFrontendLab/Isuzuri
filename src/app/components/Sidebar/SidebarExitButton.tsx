import { Button, Image, Text } from '@chakra-ui/react';

import LogoutIcon from '../../assets/icons/door-out.svg';

const SidebarExitButton = () => (
    <Button
        variant='ghost'
        leftIcon={<Image src={LogoutIcon} margin='2px 6px 2px 0' />}
        bgColor='transparent'
        border='none'
    >
        <Text fontSize='12px' fontWeight='bold'>
            Выйти
        </Text>
    </Button>
);

export default SidebarExitButton;

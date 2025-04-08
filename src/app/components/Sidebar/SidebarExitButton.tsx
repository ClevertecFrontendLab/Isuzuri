import { Button, Image, Text } from '@chakra-ui/react';

import LogoutIcon from '../../assets/icons/door-out.svg';

const SidebarExitButton = () => (
    <Button
        variant='unstyled'
        display='flex'
        p='0px'
        leftIcon={<Image src={LogoutIcon} margin='2px 6px 2px 0' />}
        bgColor='transparent'
        border='none'
    >
        <Text fontSize='12px' fontWeight='600' lineHeight='133%'>
            Выйти
        </Text>
    </Button>
);

export default SidebarExitButton;

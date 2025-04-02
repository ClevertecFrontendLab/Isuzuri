import { Button, Image } from '@chakra-ui/react';

import LogoutIcon from '../../icons/door-out.svg';

const SidebarExitButton = () => (
    <Button
        variant='ghost'
        leftIcon={<Image src={LogoutIcon} margin='0.125rem 0.375rem 0.125rem 0' />}
        fontWeight='bold'
        bgColor='transparent'
        border='none'
        fontSize='0.75rem'
    >
        Выйти
    </Button>
);

export default SidebarExitButton;

import { Stack, useMediaQuery } from '@chakra-ui/react';

import OverviewHeader from '../PageHeader';
import NewRecipes from './NewRecipes/NewRecipes';

const Overview = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');
    return (
        <Stack gap={isDesktop ? '24px' : '32px'}>
            <OverviewHeader />
            <NewRecipes />
        </Stack>
    );
};

export default Overview;

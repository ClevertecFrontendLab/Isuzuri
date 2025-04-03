import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

const Breadcrumbs = () => (
    <Breadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/'>
                <Text color='gray.main'>Главная</Text>
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/vegan'>
                <Text color='gray.main'>Веганская кухня</Text>
            </BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);

export default Breadcrumbs;

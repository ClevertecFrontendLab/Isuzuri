import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router';

const Breadcrumbs = () => (
    <Breadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/'>
                Главная
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to='/vegan'>
                Веганская кухня
            </BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);

export default Breadcrumbs;

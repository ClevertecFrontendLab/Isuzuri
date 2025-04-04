import './App.css';

import { Box, Flex } from '@chakra-ui/react';

import CardAvatar from './components/Card/CardAvatar';
import CustomCard from './components/Card/CustomCard';
import CustomBadge from './components/common/CustomBadge';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />
            <Flex>
                <Sidebar />
                <Box w='900px'>
                    <CustomBadge />
                    <CardAvatar />
                    <CustomCard />
                </Box>
            </Flex>
        </Flex>
    );
}

export default App;

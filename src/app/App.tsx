import './App.css';

import { Box, Flex } from '@chakra-ui/react';

import FloatButton from './components/common/FloatButton';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />
            <Flex>
                <Sidebar />
                <Box w='900px'>
                    <MobileMenu />
                    <FloatButton />
                </Box>
            </Flex>
        </Flex>
    );
}

export default App;

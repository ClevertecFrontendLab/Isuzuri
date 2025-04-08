import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';

import RootLayout from '~/app/layouts/Root';
import Overview from '~/app/pages/Overview/Overview';
import { store } from '~/store/configure-store.ts';
import theme from '~/theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path='/'
                            element={<RootLayout />}
                            children={[<Route path='/' element={<Overview />} />]}
                        />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import SignInPage from './pages/SignInPage';

const App: React.FC = () => {
    const str = 'Hello';

    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/register" element={<div>{str}</div>} />
            </Routes>
        </>
    );
};

export default App;

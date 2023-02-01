import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInPage from './SignInPage/ui';
import SignUpPage from './SignUpPage/ui';
import HomePage from './HomePage/ui';

const Routing: React.FC = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
    </Routes>
);

export default Routing;

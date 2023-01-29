import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInPage from './SignIn/ui';

const Routing: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/register" element={<div>Hello!</div>} />
    </Routes>
);

export default Routing;
export { signInReducer } from './SignIn/model';

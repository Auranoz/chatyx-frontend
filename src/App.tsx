import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import fingerPrint from '@fingerprintjs/fingerprintjs';

import AuthSignInPage from './features/Auth/AuthSignInPage/AuthSignInPage';
import useAppActions from './hooks/useAppActions';

const App: React.FC = () => {
    const { setFingerprint } = useAppActions();

    React.useEffect(() => {
        (async () => {
            const fp = await fingerPrint.load();
            const { visitorId } = await fp.get();
            setFingerprint(visitorId);
        })();
    }, []);

    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<AuthSignInPage />} />
                <Route path="/register" element={<div>Hello!</div>} />
            </Routes>
        </>
    );
};

export default App;

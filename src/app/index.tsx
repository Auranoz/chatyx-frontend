import * as React from 'react';
import { CssBaseline } from '@mui/material';
import fingerPrint from '@fingerprintjs/fingerprintjs';

import useActions from 'shared/hooks/useActions';
import { fingerprintActions } from 'shared/api';
import Routing from 'pages';

const App = () => {
    const { setFingerprint } = useActions(fingerprintActions);

    React.useEffect(() => {
        (async () => {
            const fp = await fingerPrint.load();
            const { visitorId } = await fp.get();
            setFingerprint(visitorId);
        })();
    }, []);

    return (
        <CssBaseline>
            <Routing />
        </CssBaseline>
    );
};

export default App;

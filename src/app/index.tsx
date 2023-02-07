import * as React from 'react';
import { CssBaseline } from '@mui/material';
import fingerPrint from '@fingerprintjs/fingerprintjs';

import { useActions, useAppSelector } from 'shared/hooks';
import { fingerprintActions, userTokenAction } from 'entities/user';
import Routing from 'pages';
import { useRefreshMutation } from 'features/sign-in';
import { calculateRefreshTimeout } from '../entities/user/utils/parse-token';

const App = () => {
    const fingerprint = useAppSelector(state => state.fingerprintSlice);
    const { setFingerprint } = useActions(fingerprintActions);
    const { setUserToken } = useActions(userTokenAction);
    const [fetchRefresh, { isSuccess, data, requestId }] = useRefreshMutation();

    React.useEffect(() => {
        (async () => {
            const fp = await fingerPrint.load();
            const { visitorId } = await fp.get();
            setFingerprint(visitorId);
            fetchRefresh({ fingerprint: visitorId });
        })();
    }, []);

    // TODO: Think about replace this code to new app level (lower than this)
    // For example: withAuthWorking
    React.useEffect(() => {
        if (isSuccess) {
            setUserToken(data?.access_token ?? '');

            const timeToRefresh = calculateRefreshTimeout(data?.access_token ?? '');
            setTimeout(() => fetchRefresh({ fingerprint }), timeToRefresh);
        }
    }, [isSuccess, requestId]);

    return (
        <CssBaseline>
            <Routing />
        </CssBaseline>
    );
};

export default App;

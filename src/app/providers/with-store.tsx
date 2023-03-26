import * as React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../store';

// eslint-disable-next-line react/display-name
const withStore = (component: () => React.ReactNode) => () =>
    <Provider store={setupStore()}>{component()}</Provider>;

export default withStore;

import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

// eslint-disable-next-line react/display-name
const withStore = (component: () => React.ReactNode) => () =>
    <Provider store={store}>{component()}</Provider>;

export default withStore;

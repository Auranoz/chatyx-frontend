import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary';

const node = document.createElement('div');
node.id = 'app';
document.body.appendChild(node);

const root = createRoot(node);
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>
);

import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';

// breaking a rule of FSD
import { setupStore } from 'app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
    routeProps?: MemoryRouterProps;
}

// TODO: write a renderWithRouter and then export compose-function with renderWithProvider
export const renderWithProvider = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = setupStore(preloadedState),
        routeProps = {},
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => {
        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={routeProps?.initialEntries}>{children}</MemoryRouter>
            </Provider>
        );
    };

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

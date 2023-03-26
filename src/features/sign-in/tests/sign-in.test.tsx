import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProvider } from 'shared/utils/test-utils';
import { UserLogin } from 'entities/user';
import SignIn from '../ui';

const loginInitialState: UserLogin = { username: 'test-username', password: 'test-password' };

describe('Sign in test suite', () => {
    test('Not empty input fields', () => {
        renderWithProvider(<SignIn />, {
            preloadedState: { signInSlice: loginInitialState }
        });

        expect(screen.getByLabelText(/username/i)).toHaveValue('test-username');
        expect(screen.getByLabelText(/password/i)).toHaveValue('test-password');
    });

    test('Success sign-in by click', async () => {
        renderWithProvider(<SignIn />, {
            preloadedState: { signInSlice: loginInitialState, fingerprintSlice: 'test-fingerprint' }
        });

        await userEvent.click(screen.getByRole('button', { name: /Sign in/i }));

        expect(await screen.getByLabelText(/username/i)).not.toHaveValue('test-username');
        expect(screen.getByLabelText(/password/i)).not.toHaveValue('test-password');
    });
});

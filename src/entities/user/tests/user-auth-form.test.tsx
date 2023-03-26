import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProvider } from 'shared/utils/test-utils';
import { UserAuthForm } from '../ui/user-auth-form';

describe('User auth form test suite', () => {
    test('Common render', () => {
        renderWithProvider(
            <UserAuthForm
                imageLabel="Image label"
                bottomLeft="Bottom left "
                bottomRight="Bottom right"
            />
        );
        const bottomLabels = screen.getByText(/Bottom/i);

        expect(screen.getByText('Image label')).toBeInTheDocument();
        expect(bottomLabels.textContent).toEqual('Bottom left Bottom right');
    });

    test('Render with auth error', () => {
        renderWithProvider(
            <UserAuthForm
                imageLabel="Image label"
                bottomLeft="Bottom left "
                bottomRight="Bottom right"
            />,
            { routeProps: { initialEntries: [{ state: { msg: 'Not authorized!' } }] } }
        );

        expect(screen.getByText('Not authorized!')).toBeInTheDocument();
    });
});

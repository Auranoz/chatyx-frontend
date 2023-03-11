import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { UserAuthForm } from './index';

describe('User auth form tests', () => {
    test('render test', () => {
        render(
            <MemoryRouter>
                <UserAuthForm
                    imageLabel="Image label"
                    bottomLeft="Bottom left "
                    bottomRight="Bottom right"
                />
            </MemoryRouter>
        );
        const bottomLabels = screen.getByText(/Bottom/i);

        expect(screen.getByText('Image label')).toBeInTheDocument();
        expect(bottomLabels.textContent).toEqual('Bottom left Bottom right');
    });

    test('render with auth error', () => {
        render(
            <MemoryRouter initialEntries={[{ state: { msg: 'Not authorized!' } }]}>
                <UserAuthForm
                    imageLabel="Image label"
                    bottomLeft="Bottom left "
                    bottomRight="Bottom right"
                />
            </MemoryRouter>
        );

        expect(screen.getByText('Not authorized!')).toBeInTheDocument();
    });
});

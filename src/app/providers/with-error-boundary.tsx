import React from 'react';
import ErrorBoundary from 'shared/ui/error-boundary';

// eslint-disable-next-line react/display-name
const withErrorBoundary = (component: () => React.ReactNode) => () =>
    <ErrorBoundary>{component()}</ErrorBoundary>;

export default withErrorBoundary;

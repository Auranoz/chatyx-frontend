import React, { PureComponent, PropsWithChildren } from 'react';

interface ErrorState {
    error: boolean;
}

// TODO: Make a layout of error component
export default class ErrorBoundary extends PureComponent<PropsWithChildren, ErrorState> {
    readonly state: ErrorState = {
        error: false
    };

    componentDidCatch(): void {
        this.setState({
            error: true
        });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;

        if (error) {
            return <>The unexpected error was occurred!</>;
        }

        return children;
    }
}

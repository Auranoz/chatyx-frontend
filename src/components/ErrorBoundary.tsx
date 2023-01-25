import React, { PureComponent, PropsWithChildren } from 'react';

interface ErrorState {
    error: boolean;
}

// TODO: Сверстать компонент вывода ошибки
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
            return <>Произошла ошибка</>;
        }

        return children;
    }
}

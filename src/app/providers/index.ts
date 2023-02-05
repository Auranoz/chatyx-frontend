import compose from 'compose-function';
import withStore from './with-store';
import withErrorBoundary from './with-error-boundary';
import withRouter from './with-router';

const withProviders = compose(withRouter, withErrorBoundary, withStore);

export default withProviders;

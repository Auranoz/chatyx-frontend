import compose from 'compose-function';
import withStore from './withStore';
import withErrorBoundary from './withErrorBoundary';
import withRouter from './withRouter';

const withProviders = compose(withRouter, withErrorBoundary, withStore);

export default withProviders;

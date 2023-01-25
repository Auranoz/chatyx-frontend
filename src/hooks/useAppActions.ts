import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { authSignInActions } from 'features/Auth/AuthSignInPage/auth-sign-in-slice';
import { authFingerprintActions } from 'features/Auth/auth-fingerprint-slice';

const actions = {
    ...authSignInActions,
    ...authFingerprintActions
};

const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useAppActions;

import { useDispatch } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

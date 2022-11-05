import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { TStoreState } from '../store';

const useAppSelector: TypedUseSelectorHook<TStoreState> = useSelector;
export default useAppSelector;

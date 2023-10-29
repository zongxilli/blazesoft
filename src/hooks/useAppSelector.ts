import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../reducers/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

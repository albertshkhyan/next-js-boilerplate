import { combineReducers } from 'redux';

import { AppState, StoreReducersEnum } from './types';
import testsReducer, { initialState as initialTestState } from './test/reducer';

const rootReducer = combineReducers<AppState>({
  [StoreReducersEnum.TEST]: testsReducer,
});

export const initialAppState: AppState = {
  [StoreReducersEnum.TEST]: initialTestState,
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

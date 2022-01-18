// import { IAuthState } from './auth/types';
// import { IMediaDataState } from './mediaUplaod/types';
// import { ISellItemsDataState } from './sellItems/types';
// import type { MapTypeAllowedData } from './payment/reducer';

import { ITestState } from './test/types';

export interface IHydrateAction {
  type: '__NEXT_REDUX_WRAPPER_HYDRATE__';
  payload: any;
}

// eslint-disable-next-line no-shadow
export enum StoreReducersEnum {
  TEST = 'test'
}

export interface AppState {
  [StoreReducersEnum.TEST]: ITestState;
}

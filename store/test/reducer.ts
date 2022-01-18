import { HYDRATE } from 'next-redux-wrapper';

import { ITestState, TEST_ACTION, TestActionPayloadType } from './types';
import { StoreReducersEnum } from '../types';

export const initialState: ITestState = {
  isTest: false,
};

const testReducer = (state: ITestState = initialState, action: TestActionPayloadType): ITestState => {
  switch (action.type) {
    case HYDRATE:
      return action.payload[StoreReducersEnum.TEST] || initialState;

    case TEST_ACTION.IS_TEST: {
      return {
        isTest: action.payload.isTest,
      };
    }

    default:
      return state;
  }
};

export default testReducer;

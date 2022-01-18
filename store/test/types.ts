import { IHydrateAction } from '../types';

// eslint-disable-next-line no-shadow
export enum TEST_ACTION {
  IS_TEST = '@TEST/IS_TEST',
}

export type TestPayloadType = {
isTest: boolean;
}

export interface ITestAction {
  type: TEST_ACTION.IS_TEST;
  payload: Required<TestPayloadType>;
}

export interface ITestState {
  isTest: boolean;
}

export type TestActionPayloadType = IHydrateAction | ITestAction;

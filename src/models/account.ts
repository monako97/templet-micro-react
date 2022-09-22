import { loginByUserName } from '@/services/user';
import type { ModelType, ModelActionType, ModelEffectMap } from 'PackageNameByCore';
import type { ResponseBody } from 'PackageNameByRequest';

export interface UserInfo {
  address?: string;
  avatar?: string;
  birthday?: number;
  code?: string;
  comment?: string;
  create_time?: number;
  email?: string;
  id: number;
  last_active_ip?: string;
  last_active_time?: number;
  password?: string;
  phone?: string;
  status?: number;
  update_time?: number;
  description?: string;
  username: string;
}

export type UserModelType = {
  info?: UserInfo;
};

const model: ModelType<UserModelType> = {
  namespace: 'account',
  state: {},
  effects: {
    // 用户名登录
    *fetchLoginByUserName(
      { payload }: Partial<ModelActionType>,
      { call, put }: ModelEffectMap
    ): Generator<unknown, void, ResponseBody> {
      const resp: ResponseBody = yield call(() => loginByUserName(payload.data));

      yield put({
        type: 'account/saveUserInfo',
        payload: resp.result,
      });
    },
    // Email登录
    *fetchLoginByEmail(
      { payload }: Partial<ModelActionType>,
      { call, put }: ModelEffectMap
    ): Generator<unknown, void, ResponseBody> {
      const resp: ResponseBody = yield call(() => loginByUserName(payload.data));

      yield put({
        type: 'account/saveUserInfo',
        payload: resp.result,
      });
    },
  },
  reducers: {
    saveUserInfo(state: UserModelType, action: ModelActionType): UserModelType {
      return { ...state, info: action.payload };
    },
    logout(): UserModelType {
      return {};
    },
    reset(): UserModelType {
      return {};
    },
  },
};

export default model;

import { combineReducers, createStore } from 'redux';
import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

/**
 * store のデータ型を定義する。（親state）
 *
 * プロパティには、管理する child_state を指定する
 */
export interface IState {
  User: IUser;
}

// 複数の reducer を束ねる
const combinedReducer = combineReducers<IState>({
  User: UserReducer,
  // reducer が増えたら足していく
});

export const store = createStore(combinedReducer);

export default store;

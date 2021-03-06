import { AnyAction, combineReducers, createStore } from 'redux';

import { TaskReducer } from './reducers/TaskReducer';
import { ITaskList } from './states/ITask';

/**
 * store のデータ型を定義する。（親state）
 *
 * プロパティには、管理する child_state を指定する
 */
export interface IState {
  taskList: ITaskList;
  // state が増えたら足していく
}

// 複数の reducer を束ねる
const combinedReducer = combineReducers<IState>({
  taskList: TaskReducer,
  // reducer が増えたら足していく
});

export const store = createStore(combinedReducer);

export default store;

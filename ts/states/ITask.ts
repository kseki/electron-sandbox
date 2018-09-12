import { v4 as UUID } from 'uuid';

/**
 * タスク
 */
export interface ITask {
  complete: boolean;
  deadline: Date;
  id: string;
  taskName: string;
}

/**
 * タスクのリスト
 */
export interface ITaskList {
  tasks: ITask[];
}

/**
 * タスクリストの初期値
 */
export const initTaskList: ITaskList = {
  tasks: [],
};

/**
 * タスクを作成する
 * @param taskName タスク名
 * @param deadline 期限
 */
export const createTask = (taskName: string, deadline: Date): ITask => {
  return {
    complete: false,
    deadline,
    id: UUID(),
    taskName,
  };
};

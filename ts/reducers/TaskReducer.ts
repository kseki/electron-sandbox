import * as Clone from 'clone';
import * as Redux from 'redux';

import * as Action from '../actions/TaskActions';
import { createTask, initTaskList, ITaskList } from '../states/ITask';
import createA2RMapper from '../utils/ActionToReducerMapper';

const a2RMapper = createA2RMapper<ITaskList>();

/** タスク一覧を表示する */
a2RMapper.addWork<Action.IShowTaskAction>(
    Action.SHOW_TASKS,
    (state, action) => {
        state.tasks = Clone(action.tasks);
    },
);

/** タスクを追加する */
a2RMapper.addWork<Action.IAddTaskAction>(
  Action.ADD_TASK,
  (state, action) => {
    state.tasks.push(createTask(action.taskName, action.deadline));
  },
);

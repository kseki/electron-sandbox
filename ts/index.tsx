import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import TaskList from './components/TaskList';
import Store from './Store';

const container = document.getElementById('contents');

ReactDom.render(
  <Provider store={Store}>
    <TaskList/>
  </Provider>,
  container,
);

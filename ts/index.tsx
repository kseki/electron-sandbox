import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import UserForm from './components/UserForm';
import Store from './Store';

const container = document.getElementById('contents');

ReactDom.render(
  <Provider store={Store}>
    <UserForm />
  </Provider>,
  container,
);

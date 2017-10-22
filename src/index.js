/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.jsx';

let e = document.getElementById('app');
if (e instanceof HTMLElement) {
  ReactDOM.render(
    <Main message='and GoodBye World' date={new Date()} />,
    e
  );
}

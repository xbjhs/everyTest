import React from 'react';
// import { render } from 'mirrorx'
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// 使用mirrorx要用render包裹,不然不行
// render(
//   <App />,
//   document.getElementById('root')
// )
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


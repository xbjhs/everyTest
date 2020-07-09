import React from 'react';
// import { actions } from 'mirrorx';
// import mirror from 'mirrorx';
// import model from  './models/model';
// 将mobx与react连接起来
import { Provider } from 'mobx-react'
import store from './store/index'
import Router from './router/index'
import Test from './components/Test'
import './App.scss';

function App() {
  return (
    // <Provider store={store}>
    //   <Test />
    // </Provider>
    <Router>
      <Provider store={store}>
        <Test />
      </Provider>
    </Router>
  );
}

export default App;

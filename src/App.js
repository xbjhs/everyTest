import React from 'react';
// import { actions } from 'mirrorx';
// import mirror from 'mirrorx';
// import model from  './models/model';
// 将mobx与react连接起来
import { Provider } from 'mobx-react'
import store from './store/index'
import Router from './router/index'
import './App.scss';
// mirror.model(model)

function App() {
  return (
    <Router>
      <Provider store ={store}></Provider>
    </Router>
  );
}

export default App;

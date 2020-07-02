import React from 'react';
import Borrow from './components/borrow'
import axios from 'axios'
import './App.scss';

function App() {
  // React.useEffect(() => {
  //   // 更优雅的方式
  //    (async () => {
  //      try{
  //       const result = await axios.get(
  //         'https://api.pizzadex.io/v1/lend/market/value',
  //       );
  //      console.log('ttt',result);
  //      }
  //      catch(err){
  //        console.log('err信息',err)
  //      }
     
  //   })();
  // }, []);


  return (
    <div className="App">
    <Borrow />
    </div>
  );
}

export default App;

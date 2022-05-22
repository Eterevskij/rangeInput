import React from 'react';
import 'antd/dist/antd.css';
import { } from '@ant-design/icons';
import './App.css';

import RangeInput from './components/RangeInput';

function App() {
  return (
    <div className="App">

      <RangeInput min={0} max={12000000} pointCount={1} error />

      <br/>

      <RangeInput min={0} max={12000000} pointCount={2}  />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import ReactRouter from './R089_reactRouter'
import ReactRouter2 from './R089_reactRouter2'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Routes>
        <Route exact path='/' element={<ReactRouter/>} />
        <Route exact path='/ReactRouter2' element={<ReactRouter2/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
import React from 'react';
import './App.css';
import { Header } from './layout/Header'
export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { Provider } from 'react-redux'

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.store = createStore(rootReducer);
  }



  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;

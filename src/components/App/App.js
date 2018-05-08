import React, { Component } from 'react';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { Provider } from 'react-redux'
import { Lang } from '../../actions/creators'

import Cover from '../Cover';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.store = createStore(rootReducer);
  }

  componentDidMount() {
    this.store.dispatch(Lang.setLang('zh-TW')); // default language.
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <Cover />
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

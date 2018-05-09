import React, { Component } from 'react';
import { translate } from 'react-i18next';

import Cover from '../Cover';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // pass
  }

  render() {
    const { t } = this.props;

    return (
      <div className="App">
          <div className="container-fluid">
            { t("key") }

            <button
              onClick={() => this.props.changeLanguage('en-US')}>en-US
            </button>
            <button
              onClick={() => this.props.changeLanguage('zh-TW')}>zh-TW
            </button>
            <Cover />

            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
      </div>
    );
  }
}

export default translate()(App);

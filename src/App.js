import React, { Component } from 'react';
import Header from './common/header/index'
import { GlobalStyle } from "./style";
import {GlobalStyle2} from './statics/iconfont/iconfont'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <GlobalStyle/>
        <GlobalStyle2/>
          <Header />
      </div>
      </Provider>
    );
  }
}

export default App;

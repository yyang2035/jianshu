import React, { Component } from 'react';
import Header from './common/header/index'
import { GlobalStyle } from "./style";
import {GlobalStyle2} from './statics/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <GlobalStyle2/>
          <Header />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './common/header/index'
import { GlobalStyle } from "./style";
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
          <Header />
      </div>
    );
  }
}

export default App;

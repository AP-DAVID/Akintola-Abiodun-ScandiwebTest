import React, { Component } from 'react'
import Routerr from "./Router";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Router page for the routing logic */}
        <Routerr />
      </div>
    );
  }
}

export default App
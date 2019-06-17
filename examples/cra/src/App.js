import React, { Component } from 'react'
import { Eclipse } from 'react-loading-io'

class App extends Component {
  render () {
    return <Eclipse size={200} color="red" thickness={2} speed={1} />
  }
}

export default App

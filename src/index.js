import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.scss'

export default class HelloWorld extends Component {
  render() {
    return (
      <h1 className="greeting">Hello World</h1>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))

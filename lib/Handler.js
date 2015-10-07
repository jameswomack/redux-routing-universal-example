import React, { Component } from 'react'
import { navigate } from 'redux-routing'

export default class Handler extends Component {
  render () {
    const olStyle = {
      listStyleType : 'none'
    }

    return <div>
      <h1>Routes: An Isomorphic Redux + Mousetrap Production</h1>
      <h2>(press mod+left or mod+right to swap font size)</h2>
      <code>
        <pre>{JSON.stringify(this.props.route)}</pre>
      </code>
      <ol style={olStyle}>
        <li><a href='/' onClick={this.onNavigate.bind(this)}>/</a></li>
        <li><a href='/foo' onClick={this.onNavigate.bind(this)}>/foo</a></li>
        <li><a href='/foo/bar' onClick={this.onNavigate.bind(this)}>/foo/bar</a></li>
        <li><a href='/foo/bar?baz=quux#123' onClick={this.onNavigate.bind(this)}>/foo/bar?baz=quux#123</a></li>
        <li><a href='/foo/bar/baz' onClick={this.onNavigate.bind(this)}>/foo/bar/baz</a></li>
        <li><a href='/baz' onClick={this.onNavigate.bind(this)}>/baz</a></li>
      </ol>
    </div>
  }

  onNavigate (event) {
    event.preventDefault()
    this.props.dispatch(navigate(event.target.href))
  }
}

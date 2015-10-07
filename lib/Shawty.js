import React, { Component } from 'react'
import { connect } from 'react-redux'
import { match } from 'redux-routing'
import routes from './routes'

@connect(command => ({ command }))
export default class Shawty extends Component {
  propTypes: {
    command: React.PropTypes.string
  }

  render () {
    return <div style={{
      border : '1px solid black',
      width  : '200px',
      margin : '0 auto'
    }}>{this.props.command}</div>
  }
}

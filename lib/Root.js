import React, { Component } from 'react'
import { connect } from 'react-redux'
import { match } from 'redux-routing'
import routes from './routes'

@connect(route => ({ route }))
export default class Root extends Component {
  constructor () {
    super()
    this.render = this.render.bind(this)
    this.state = {
      style: {
        fontSize : '1em'
      }
    }
  }

  handleShortcut (fontSize) {
    this.setState({
      style : {
        fontSize : fontSize
      }
    })
  }

  componentDidMount () {
    const shortcutStore = require('./shortcutStore')

    return shortcutStore.subscribe(() => {
      const state = shortcutStore.getState()
      let fontSize = '2em'

      if (state === 'mod+left') {
        fontSize = '.5em'
      }

      return this.handleShortcut(fontSize)
    })
  }

  render () {
    const matched = match(this.props.route.href, routes)

    if (matched) {
      return <section style={this.state.style}><matched.handler {...this.props} /></section>
    } else {
      return <div>404 not found</div>
    }
  }
}

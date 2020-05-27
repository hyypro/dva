import React, { Component } from 'react'
import { connect } from 'dva'

@connect(({ home }) => ({
  data: home.data
}))

export default class Home extends Component {
  render() {
    const { name, data } = this.props
    return (
      <div className="pages-home">
       
      </div>
    )
  }
}

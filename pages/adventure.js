import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/header'

export default class extends Component {
  static async getInitialProps({ query }) {
    const config = {
      baseURL: process.env.WP_API,
      params: {
        slug: query.slug,
      },
    }

    const response = await axios.get('/wp-json/wp/v2/posts', config);
    return { ...response.data[0] }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{this.props.title.rendered}</h1>
        <h2>{this.props.acf.location}</h2>
        <h3>{this.props.acf.fly}</h3>
      </div>
    )
  }
}

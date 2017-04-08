import React, { Component } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { Link } from '../routes'
import Header from '../components/header'

export default class extends Component {
  static async getInitialProps () {
    const url = ""+process.env.WP_API+"/wp-json/wp/v2/posts"
    const response = await axios.get(url);
    return { articles: response.data }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>All posts</h1>
          {this.props.articles.map(article => {
            return (
              <div>
                <Link route='adventure' params={{slug: `${article.slug}`}}><h1>{article.title.rendered}</h1></Link>
                <h2>{article.date}</h2>
              </div>
            )
          })}
      </div>
    )
  }
}

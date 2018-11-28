import React, { Component } from 'react'
// // import NewsItem from "./newsItem"

export default class NewsList  extends Component {
  render() {
      return (
        <section className="news list">
        {
            this.props.news.map(news =>
                <div key={news.id}>
                    {news.name}
                    {news.synopsis}
                    {news.url}
                </div>
            )
        }
        </section>
    )
  }
}
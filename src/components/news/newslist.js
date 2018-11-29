import React, { Component } from 'react'
import "./news.css"
// // import NewsItem from "./newsItem"

export default class NewsList extends Component {
  render() {
    return (
      <React.Fragment>

      <div className="newsButton">
          <button type="button"
                  className="btn btn-success"
                  onClick={() => {
                      this.props.history.push("/news/new")}
                  }>
              Add New Article
          </button>
      </div>
      <section className="news list">
        {
          this.props.news.map(news =>
            <div key={news.id}>
              {news.name}<br />
              {news.synopsis}<br />
              {news.url}<br />
              <a href="#foo"
                onClick={() => this.props.deleteNews("news", news.id)}
                className="card-link">Delete </a>
            </div>
            )
        }
      </section>
      </React.Fragment>
    )
  }
}
import React, { Component } from 'react'
import "./news.css"


export default class NewsList extends Component {
  render() {
    return (
      <React.Fragment>

      <div className="newsButton list">
          <button type="button"
                  className="btn btn-success"
                  onClick={() => {
                      this.props.history.push("/news/new")}
                  }>
              Add New Article
          </button>
      </div>
      <div className="article-list">
      <section className="news">
        {
          this.props.news.map(news =>
            <div key={news.id}>
             <h5>{news.name}</h5>
              {news.synopsis}<br />
              {news.url}<br />
              <a href="#foo"
                onClick={() => this.props.deleteNews("news", news.id)}
                className="card-link">Delete </a>
            </div>
            )
        }
      </section>
      </div>
      </React.Fragment>
    )
  }
}
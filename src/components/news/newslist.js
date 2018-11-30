import React, { Component } from 'react'
import "./news.css"
import { Image, Container } from 'semantic-ui-react'

export default class NewsList extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="newsButton list">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/news/new")
            }
            }>
            Add New Article
          </button>
        </div>
        <div className="article-list">
          <section className="news">
            {
              this.props.news.map(news =>
                <div className="eachArticle">
                <div key={news.id}>
                  <Image className="newsImage" src={news.picLink} rounded/>
                </div>
                <div className="articleDetails">
                  <h2>{news.name}</h2>
                  <h3>{news.synopsis}</h3><br />
                  {news.url}<br />
                  <a href="#foo"
                    onClick={() => this.props.deleteNews("news", news.id)}
                    className="card-link">Delete </a>
                </div>
                </div>
              )
            }
          </section>
        </div>
      </React.Fragment>
    )
  }
}
import React, { Component } from 'react'
import "./news.css"
import { Image } from 'semantic-ui-react'
import DataManager from '../../module/DataManager'

export default class NewsList extends Component {
  credentials = JSON.parse(localStorage.getItem('credentials'))

  state = {
    news: []
  }

  componentDidMount() {
    const newState = {}
    DataManager.getAllByUser("news", this.credentials.id)
      .then(allNews => {
        newState.news = allNews
      })
      .then(() =>
        this.setState(newState))
  }

  render() {
    return (
      <React.Fragment>
        <div className="newsButton list">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/news/new")
            }}>
            Add New Article
          </button>
        </div>
        <div className="article-list">
          <section className="news">
            {
              this.state.news.map(news =>
                <div className="eachArticle" key={news.id}>
                  <div>
                    <Image className="newsImage" src={news.picLink} rounded />
                  </div>
                  <div className="article-Details">
                    <h2>{news.name}</h2>
                    <h3>{news.synopsis}</h3><br />
                    <a href={news.url}>{news.url}</a><br />
                    <a href="#foo"
                      onClick={() => this.props.deleteNews("news", news.id)}
                      className="btn btn-danger">Delete </a>
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
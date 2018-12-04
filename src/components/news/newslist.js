import React, { Component } from 'react'
import "./news.css"
import DataManager from '../../module/DataManager'
import { Button, Image, Header, Icon } from 'semantic-ui-react'

export default class NewsList extends Component {
  // Grabbing logged in credentials
  credentials = JSON.parse(localStorage.getItem('credentials'))

  // Only monitoring news state here
  state = {
    news: []
  }

  // Delete button uses this function to delete item for current user
  deleteNews = (news, id) => {
    return DataManager.delete(news, id)
      .then(() => DataManager.getAllByUser("news", this.credentials.id))
      .then(news => this.setState({
        news: news
      })
      )
  }

  // Getting all news item for current user and setting state
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
      // News icon
      <React.Fragment>
        <Header color="blue" as='h2' icon textAlign='center'>
          <Icon name='newspaper outline' />
          <Header.Content>News</Header.Content>
        </Header>
      {/* New news button */}
        <div className="profileBtn">
          <Button color="blue" fluid onClick={() => {this.props.history.push("/news/new")}}>
            <Button.Content>Add News Item</Button.Content>
            </Button>
        </div>
        {/* Iterating over news state in current js file */}
        <div className="article-list">
          <section className="news">
            {this.state.news.map(news =>
              <div className="eachArticle" key={news.id}>
                <div>
                  <Image className="newsImage" src={news.picLink} rounded />
                </div>
                <div className="article-Details">
                  <h2>{news.name}</h2>
                  <h3>{news.synopsis}</h3><br />
                  <a href={news.url}>{news.url}</a><br />
                  {news.date}<br />
                  {/* Edit button */}
                  <Button.Group size="mini" >
                    <Button
                      color="teal"
                      onClick={() => this.props.history.push(`/news/edit/${news.id}`)}
                    >Edit</Button>
                    <Button.Or />
                    {/* Delete button */}
                    <Button
                      color="red"
                      onClick={() => this.deleteNews("news", news.id)} className="card-link">
                      Delete</Button>
                  </Button.Group>
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
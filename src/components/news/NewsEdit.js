import React, { Component } from 'react'


export default class NewsEdit extends Component {

  state = {

  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  componentDidMount() {
    const news = this.props.news.find(a => a.id === parseInt(this.props.match.params.newsId))
    this.setState(news)
  }

  constructNewNews = (evt) => {
    evt.preventDefault()

    let editedText = {
      name: this.state.name,
      synopsis: this.state.synopsis,
      picLink: this.state.picLink,
      url: this.state.dueDate
    }
    this.props.editNews(this.state.id, editedText)
      .then(() => {
        this.props.history.push("/news")
      })
  }

  render() {
    return (
      <React.Fragment>
        <form className="newsForm list">
          <div className="form-group">
            <label htmlFor="newsName">Name</label>
            <input type="text"
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder={this.state.name} />
          </div>
          <div className="form-group ">
            <label htmlFor="synopsis">Synopsis</label>
            <input type="text"
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
              placeholder={this.state.synopsis} />
          </div>
          <div className="form-group ">
            <label htmlFor="picLink">Picture Link</label>
            <input type="text"
              className="form-control"
              onChange={this.handleFieldChange}
              id="picLink"
              placeholder={this.state.picLink} />
          </div>
          <div className="form-group ">
            <label htmlFor="url">URL</label>
            <input type="text"
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              placeholder={this.state.url} />
          </div>
          <button type="submit" onClick={this.constructNewNews} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
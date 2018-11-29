import React, { Component } from "react"
import "./news.css"

export default class NewsForm extends Component {
  // Set initial state
  state = {
    name: "",
    synopsis: "",
    url: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  /*
      Local method for validation, creating news object, and
      invoking the function reference passed from parent component
   */
  constructNewNews = evt => {
    evt.preventDefault()

      const news = {
        name: this.state.name,
        synopsis: this.state.synopsis,
        url: this.state.url
      }

      // Create the news and redirect user to news list
      this.props.addNews("news", news).then(() => this.props.history.push("/news"))

  }

  render() {
    return (
      <React.Fragment>
        <form className="newsForm list">
          <div className="form-group">
            <label htmlFor="articleName">Article name</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Article name" />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis" placeholder="Synopsis" />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL for article</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url" placeholder="URL" />
          </div>
          <button type="submit" onClick={this.constructNewNews} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
// import ProfileList from "./profiles/Profiles"
import NewsList from "./news/newslist"
import EventForm from "./events/EventList"
import EventItem from "./events/EventItem"
import EventList from "./events/EventList"
export default class ApplicationViews extends Component {

  newsFromAPI = [
    { id: 1, name: "News Item 1", synopsis: "Synopsis #1", url: "URL#1" },
    { id: 2, name: "News Item 2", synopsis: "Synopsis #2", url: "URL#2" }
  ]

  state = {
    news: this.newsFromAPI
  }

  render() {
    return (
      <article className="news">
      <NewsList news={this.state.news} />

  </article>
    )
  }
}
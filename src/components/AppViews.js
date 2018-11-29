
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import NewsList from "./news/newslist"
import EventForm from "./events/EventList"
import EventItem from "./events/EventItem"
import EventList from "./events/EventList"

export default class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null



  newsFromAPI = [
    { id: 1, name: "News Item 1", synopsis: "Synopsis #1", url: "URL#1" },
    { id: 2, name: "News Item 2", synopsis: "Synopsis #2", url: "URL#2" }
  ]

  state = {
    users: [],
    news: this.newsFromAPI,
    events: []
  }
  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

    addEvent = events => DataManager.add("events", events)
    .then(() => DataManager.getAll("events"))
    .then(events => this.setState({
      events: events
    }))

  componentDidMount() {
    console.log(this.state.news)

    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })

      DataManager.getAll("events")
        .then(allEvents => {
          newState.events = allEvents
        })
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" render={(props) => {
          return <Register {...props}
            addUser={this.addUser}
            users={this.state.users} />

        }} />
        <Route exact path="/news" render={(props) => {
          return <NewsList {...props}
            news={this.state.news} />
        }} />
        <Route exact path="/events" render={(props) => {
          return <EventList {...props}
            events={this.state.events} />
        }}/>

            </React.Fragment>

    )
}
}


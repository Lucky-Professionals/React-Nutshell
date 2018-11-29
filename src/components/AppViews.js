
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import NewsList from "./news/newslist"
import NewsForm from "./news/newsForm"
import ProfilePage from "./profile/profile"


export default class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    news: [],
    profile: [],
  }

  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

  addNews = (news, item) => DataManager.add(news, item)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  componentDidMount() {
    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })
    DataManager.getAll("news")
      .then(allNews => {
        newState.news = allNews
      })
      .then(() =>
        this.setState(newState))
  }

  deleteNews = (news, id) => {
    return DataManager.delete(news, id)
      .then(() => DataManager.getAll("news"))
      .then(news => this.setState({
        news: news
      })
      )
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


        <Route exact path="/profile" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProfilePage {...props}
              profile={this.state.profile} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />


        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props} deleteNews={this.deleteNews}
              news={this.state.news} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        < Route path="/news/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsForm {...props}
              addNews={this.addNews} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />

      </React.Fragment>

    )
  }
}



import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"

export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    state = {
        users: [],
    }

    addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

    componentDidMount() {

        const newState = {}

        DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
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
            </React.Fragment>
        )
    }
}

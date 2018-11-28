
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import NewsList from "./news/newslist"

export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    
    
    newsFromAPI = [
        { id: 1, name: "News Item 1", synopsis: "Synopsis #1", url: "URL#1" },
        { id: 2, name: "News Item 2", synopsis: "Synopsis #2", url: "URL#2" }
    ]
    
    state = {
        users: [],
        news: this.newsFromAPI
    }
    addUser = users => DataManager.add("users", users)
        .then(() => DataManager.getAll("users"))
        .then(users => this.setState({
            users: users
        }))

    componentDidMount() {
        console.log(this.state.news)

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
                <Route exact path="/news" render={(props) => {
                    return <NewsList {...props}
                        news={this.state.news} />
                }} />

            </React.Fragment>
            
        )
    }
}


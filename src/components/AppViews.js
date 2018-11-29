
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import NewsList from "./news/newslist"
import MessageForm from "./messages/MessageForm"


export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    state = {
        users: [],
        news: this.newsFromAPI,
        messages: [],
        isLoaded: false
    }
    addUser = users => DataManager.add("users", users)
        .then(() => DataManager.getAll("users"))
        .then(users => this.setState({
            users: users
        }))

    addMessage = messages => DataManager.add("messages", messages)
        .then(() => DataManager.getAll("messages"))
        .then(messages => this.setState({
            messages: messages
        }))

    componentDidMount() {
        console.log(this.state.news)

        const newState = {}

        DataManager.getAll("users")
            .then(allUsers => {
                newState.users = allUsers
            })
        .then(() => {
            DataManager.getAll("messages")
            .then(allMessages => {
                newState.messages = allMessages
            })
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

                <Route exact path="/messages/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <MessageForm {...props}
                            messages={this.state.messages}
                            addMessage={this.addMessage} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

            </React.Fragment>

        )
    }
}


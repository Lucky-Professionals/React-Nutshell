import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import NewsList from "./news/newslist"
import NewsEdit from './news/NewsEdit'
import NewsForm from "./news/newsForm"
import ProfilePage from "./profile/profilePage"
import ProfileForm from "./profile/profileForm"
import ProfileEdit from "./profile/profileEdit"
import ProfileDetail from "./profile/profiledetails"
import EventForm from "./events/EventForm"
import EventList from "./events/EventList"
import EditEventForm from "./events/EditEventForm"
import MessageForm from "./messages/MessageForm"
import MessageList from "./messages/MessageList"
import EditMessageForm from "./messages/EditMessageForm"
import TodoForm from './todo/TodoForm'
import TodoList from './todo/TodoList'
import TodoEdit from './todo/TodoEdit'


export default class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  // call login here
  credentials = JSON.parse(localStorage.getItem('credentials'))
  credentials = { id: 1 }
  state = {
    users: [],
    profiles: [],
    news: [],
    events: [],
    messages: [],
    todos: [],
    isLoaded: false
  }
// GUESS WHAT
  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

  // MESSAGE FUNCTIONS

  addMessage = messages => DataManager.add("messages", messages)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  deleteMessage = id => DataManager.delete("messages", id)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))
  editMessage = (id, messages) => DataManager.edit("messages", id, messages)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  // EVENT FUNCTIONS
  addEvent = events => DataManager.add("events", events)
    .then(() => DataManager.getAll("events"))
    .then(events => this.setState({
      events: events
    }))

  // deleteEvent = id => DataManager.delete("events", id)
  //   .then(() => DataManager.getAll("events"))
  //   .then(events => this.setState({
  //     events: events
  //   }))
  editEvent = (id, events) => DataManager.edit("events", id, events)
    .then(() => DataManager.getAll("events"))
    .then(events => this.setState({
      events: events
    }))


  // NEWS FUNCTIONS

  addNews = (news, item) => DataManager.add(news, item)
    .then(() => DataManager.getAllByUser("news", this.credentials.id))
    .then(news => this.setState({
      news: news
    }))
  editNews = (id, news) => DataManager.edit("news", id, news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  addProfile = (profiles, item) => {
    return DataManager.add(profiles, item)
      .then(() => DataManager.getAll("profiles"))
      .then(profiles => this.setState({
        profiles: profiles
      })
      )
  }
  editProfile = (id, profiles) => DataManager.edit("profiles", id, profiles)
    .then(() => DataManager.getAll("profiles"))
    .then(profiles => this.setState({
      profiles: profiles
    }))

  deleteProfile = (profiles, item) => {
    return DataManager.delete(profiles, item)
      .then(() => DataManager.getAll("profiles"))
      .then(profiles => this.setState({
        profiles: profiles
      })
      )
  }

  addTodo = todos => DataManager.add("todos", todos)
    .then(() => DataManager.getAll("todos"))
    .then(todos => this.setState({
      todos: todos
    })
    )

  editTodo = (id, todos) => DataManager.edit("todos", id, todos)
    .then(() => DataManager.getAll("todos"))
    .then(todos => this.setState({
      todos: todos
    }))

  deleteTodo = id => DataManager.delete("todos", id)
    .then(() => DataManager.getAll("todos"))
    .then(todos => this.setState({
      todos: todos
    }))


  componentDidMount() {
    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })

    DataManager.getAll("messages")
      .then(allMessages => {
        newState.messages = allMessages
      })

    DataManager.getAll("profiles")
      .then(allProfiles => {
        newState.profiles = allProfiles
      })

    DataManager.getAll("todos")
      .then(allTodos => {
        newState.todos = allTodos
      })

    DataManager.getAll("events")
      .then(allEvents => {
        newState.events = allEvents
      })

    DataManager.getAll("news")
      .then(allNews => {
        newState.news = allNews
      })
      .then(() =>
        this.setState(newState))
  }


  render() {
    return (
      <React.Fragment>

        <Route exact path="/register" render={(props) => {
          return <Register {...props}
          addUser={this.addUser}
          users={this.state.users} />
        }} />
        <Route exact path="/login" component={Login} />

        {/* EVENTS ROUTES */}

        <Route exact path="/events" render={(props) => {
        if(this.isAuthenticated()) {
          return <EventList {...props}
          events={this.state.events}
          deleteEvent={this.deleteEvent}
          editEvent={this.editEvent} />
        }
        else {
          return<Redirect to="/login" />
        }
        }} />

        < Route path="/events/new" render={(props) => {
          return <EventForm {...props}
            addEvent={this.addEvent} />
        }} />
        <Route exact path="/events/edit/:eventsId(\d+)" render={(props) => {
          return <EditEventForm {...props}
            editEvent={this.editEvent}
            events={this.state.events}
            addEvent={this.addEvent} />

        }} />


        {/* NEWS ROUTES */}

        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props}
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
        <Route exact path="/news/edit/:newsId(\d+)" render={(props) => {
          return <NewsEdit {...props}
            editNews={this.editNews}
            news={this.state.news}
          />
        }} />
        <Route exact path="/messages" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessageList {...props}
              addMessage={this.addMessage}
              users={this.state.users}
              editMessage={this.editMessage}
              deleteMessage={this.deleteMessage}
              messages={this.state.messages} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* YEEEEEEEEEEEEEEEEEEEHEEEEEEEEEEEEEEEEEE */}
        <Route exact path="/messages/edit/:messageId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <EditMessageForm {...props} editMessage={this.editMessage} messages={this.state.messages} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/todos" render={(props) => {
          if (this.isAuthenticated()) {
          return <TodoList {...props}
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            addTodo={this.addTodo}
          />
        } else {
          return <Redirect to="/login" />
        }
        }} />



        <Route exact path="/todos/edit/:todoId(\d+)" render={(props) => {
          return <TodoEdit {...props}
            editTodo={this.editTodo}
            todos={this.state.todos}
          />
        }} />



        <Route exact path="/profile" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProfilePage {...props}
              deleteProfile={this.deleteProfile}
              profiles={this.state.profiles}
              editProfile={this.editProfile}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        < Route path="/profile/new" render={(props) => {
          return <ProfileForm {...props}
            addProfile={this.addProfile} />
        }} />
        <Route exact path="/profile/edit/:profileId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProfileEdit {...props}
              editProfile={this.editProfile}
              profiles={this.state.profiles} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/profile/detail/:profileId(\d+)" render={(props) => {
                    return <ProfileDetail {...props} 
                    profiles={this.state.profiles} />
                }} />

      </React.Fragment>
    )
  }
}


